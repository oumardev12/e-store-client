import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { labelTransition } from "../../utils/helpers";
import { signUpSchema, signUpSchemaType } from "../../schemas/schemas";
import { useShoppingCart } from "../../context/context";

type signupProps = {
  setShowAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp = ({ setShowAuthModal }: signupProps) => {
  const [activeUsername, setActiveUsername] = useState(false);
  const [activePass, setActivePass] = useState(false);
  const [activeConf, setActiveConf] = useState(false);
  const { setUser, setError, error } = useShoppingCart();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<signUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSignup: SubmitHandler<signUpSchemaType> = async (data) => {
    try {
      const { signUp } = await import("../../api/api");
      const { data: user } = await signUp(data);

      setUser({
        username: user.username,
        id: user.id,
      });
      sessionStorage.setItem("user_info", JSON.stringify(user));
      reset();
      setActiveUsername(false);
      setActivePass(false);
      setActiveConf(false);
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
      onSubmit={handleSubmit(handleSignup)}
      className="flex flex-col items-center justify-evenly h-full"
    >
      <h3 className="text-lg max-[400px]:text-sm">Sign Up</h3>
      <div className={`relative w-[70%] text-center group `}>
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
           border-b-white border-b-2 w-[100%] rounded-[4px]
           max-[400px]:text-sm"
          {...register("username")}
        />
        <p className="text-red-600 mt-1 mb-3 text-sm tracking-wider max-[400px]:text-[10px]">
          {errors.username ? errors.username.message : ""}
        </p>
      </div>
      <div className="relative w-[70%] text-center group">
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
           border-b-white border-b-2 w-[100%] rounded-[4px]
           max-[400px]:text-sm"
          {...register("password")}
        />
        <p className="text-red-600 mt-1 mb-3 text-sm tracking-wider max-[400px]:text-[10px]">
          {errors.password ? errors.password.message : ""}
        </p>
      </div>
      <div className="relative w-[70%] text-center group">
        <label
          htmlFor="confirmPassword"
          className={`absolute ${
            !activeConf
              ? "top-0 left-0 sm:text-base"
              : "left-[-2px] top-[-25px] max-[400px]:top-[-17px]  max-[400px]:text-[10px] sm:text-sm"
          } pointer-events-none group-focus-within:top-[-25px] group-focus-within:left-[-2px] group-focus-within:text-sm group-focus-within:max-[400px]:text-[10px] group-focus-within:max-[400px]:top-[-17px] transition-all text-sm `}
        >
          Confirm password <span className="text-red-600">*</span>
        </label>
        <input
          onInput={(event) =>
            labelTransition({ event, index: 3, setActiveConf })
          }
          type="password"
          id="confirmPassword"
          className="bg-transparent outline-none
           border-b-white border-b-2 w-[100%] rounded-[4px] 
           max-[400px]:text-sm"
          {...register("confirmPassword")}
        />
        <p className="text-red-600  mt-1 mb-3 text-sm tracking-wider max-[400px]:text-[10px]">
          {errors.confirmPassword ? errors.confirmPassword.message : ""}
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
          "Sign Up"
        )}
      </button>
    </form>
  );
};

export default SignUp;
