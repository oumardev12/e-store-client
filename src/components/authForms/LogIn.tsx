import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { labelTransition } from "../../utils/helpers";
import { useShoppingCart } from "../../context/context";
import { logInSchema, logInSchemaType } from "../../schemas/schemas";

type loginProps = {
  setShowAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogIn = ({ setShowAuthModal }: loginProps) => {
  const [activeUsername, setActiveUsername] = useState(false);
  const [activePass, setActivePass] = useState(false);
  const { setUser, setError, error } = useShoppingCart();

  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting, errors },
  } = useForm<logInSchemaType>({
    resolver: zodResolver(logInSchema),
  });

  const handleLogin: SubmitHandler<logInSchemaType> = async (data) => {
    try {
      const { logIn } = await import("../../api/api");
      const { data: user } = await logIn(data);

      setUser({
        id: user.id,
        username: user.username,
      });
      sessionStorage.setItem("user_info", JSON.stringify(user));
      reset();
      setActiveUsername(false);
      setActivePass(false);
      setShowAuthModal(false);
    } catch (error: any) {
      setError(error.response.data.errorMessage.slice(0, 40));
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      setError("");
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col items-center justify-evenly  h-full"
    >
      <h3 className="text-lg max-[400px]:text-sm">Log in to your account</h3>
      <div className="relative w-[70%] group ">
        <label
          htmlFor="username"
          className={`absolute ${
            !activeUsername
              ? "top-0 left-0 sm:text-base"
              : "left-[-2px] top-[-25px] max-[400px]:top-[-17px]  max-[400px]:text-[10px] sm:text-sm"
          } pointer-events-none group-focus-within:top-[-25px] group-focus-within:left-[-2px] group-focus-within:text-sm group-focus-within:max-[400px]:text-[10px] group-focus-within:max-[400px]:top-[-17px] transition-all text-sm `}
        >
          Username <span className="text-red-600">*</span>
        </label>
        <input
          onInput={(event) =>
            labelTransition({ event, index: 1, setActiveUsername })
          }
          type="text"
          id="username"
          className="bg-gray-950 outline-none
           border-b-white border-b-2 w-[100%]
           max-[400px]:text-sm rounded-[4px]"
          {...register("username")}
        />
        <p className="text-red-600 text-center mt-2 text-sm tracking-wider max-[400px]:text-[10px]">
          {errors.username ? errors.username.message : ""}
        </p>
      </div>
      <div className="relative w-[70%] group">
        <label
          htmlFor="password"
          className={`absolute ${
            !activePass
              ? "top-0 left-0 sm:text-base"
              : "left-[-2px] top-[-25px] max-[400px]:top-[-17px]  max-[400px]:text-[10px] sm:text-sm"
          } pointer-events-none group-focus-within:top-[-25px] group-focus-within:left-[-2px] group-focus-within:text-sm group-focus-within:max-[400px]:text-[10px] group-focus-within:max-[400px]:top-[-17px] transition-all text-sm `}
        >
          Password <span className="text-red-600">*</span>
        </label>
        <input
          onInput={(event) =>
            labelTransition({ event, index: 2, setActivePass })
          }
          type="password"
          id="password"
          className="bg-transparent outline-none
           border-b-white border-b-2 w-[100%] 
           max-[400px]:text-sm rounded-[4px]"
          {...register("password")}
        />
        <p className="text-red-600 text-center mt-2 text-sm tracking-wider max-[400px]:text-[10px]">
          {errors.password ? errors.password.message : ""}
        </p>
      </div>
      <button
        disabled={isSubmitting || error !== ""}
        type="submit"
        className="w-[70%] bg-blue-800 p-2 rounded-md hover:bg-blue-950 transition-all max-[400px]:text-sm"
      >
        {isSubmitting ? (
          <div className="wrapper-loader">
            <span className="loader"></span>
          </div>
        ) : (
          "Log In"
        )}
      </button>
    </form>
  );
};

export default LogIn;
