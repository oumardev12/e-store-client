import {
  checkoutFormSchema,
  checkoutFormSchemaType,
} from "../../schemas/schemas";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import ShippingAddress from "./CheckoutForms/ShippingAddress";
import PayementDetails from "./CheckoutForms/PayementDetails";
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ItemsCard from "../ItemsCard/ItemsCard";
import { useShoppingCart } from "../../context/context";
import items from "../../data/items.json";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import AfterCheckout from "./afterCheckout/AfterCheckout";

const Checkout = () => {
  const { cartItems, user, setError, removeFromCart, error } =
    useShoppingCart();
  const [isCompleted, setIsCompleted] = useState(false);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<checkoutFormSchemaType>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const handleCheckout: SubmitHandler<checkoutFormSchemaType> = async (
    data
  ) => {
    if (!isLastStep) return next();

    const newData = {
      data,
      products: cartItems,
    };

    try {
      const { checkout } = await import("../../api/api");
      await checkout(user.id, newData);
      reset();
      setIsCompleted(true);
      queryClient.invalidateQueries([user.id], { exact: true });
      cartItems.forEach((item) => removeFromCart(item.id));
    } catch (error: any) {
      setError(error.response.data?.errorMessage?.slice(0, 40));
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const { step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <ShippingAddress errors={errors} register={register} />,
    <PayementDetails />,
  ]);

  return (
    <form
      onSubmit={handleSubmit(handleCheckout)}
      className="min-h-[75vh] bg-[#fafafa] p-5 rounded-md max-w-2xl mx-auto mt-5 overflow-x-hidden flex flex-col justify-center items-center gap-4"
    >
      {isCompleted ? (
        <AfterCheckout />
      ) : (
        <>
          <h3>Checkout</h3>
          <div className="flex items-center justify-center gap-2 sm:text-sm text-xs max-sm:flex-col">
            <h3 className="flex items-center justify-center gap-1">
              {isLastStep ? (
                <FaCheckCircle className="text-blue-800" />
              ) : (
                <FaQuestionCircle className="text-blue-800" />
              )}
              <span>Shipping Address</span>
            </h3>
            <div className="sm:w-40 w-10  h-[1px] bg-slate-300" />
            <h3 className="flex items-center justify-center gap-1">
              <span>Payement Details</span>
              <FaQuestionCircle className="text-blue-800" />
            </h3>
          </div>

          {isLastStep && <Summary cartItems={cartItems} />}
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="max-sm:text-sm">
              {isLastStep ? "Payment Details" : "Shipping Address"}
            </h3>
            <div className="flex items-center justify-around flex-wrap gap-14 mt-8">
              {step}
            </div>
          </div>
          <div className="mt-auto ml-auto flex gap-2 text-sm">
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => back()}
                className="px-3 py-1 bg-white text-black rounded-md border border-slate-200"
              >
                BACK
              </button>
            )}
            <button
              type="submit"
              className="px-5 py-1 bg-blue-800 rounded-md text-white hover:bg-blue-950 transition-all duration-500 ease-out  text-center"
              disabled={isSubmitting || error !== ""}
            >
              {isSubmitting ? (
                <div className="wrapper-loader ">
                  <span className="loader"></span>
                </div>
              ) : isLastStep ? (
                <span>
                  PAY&nbsp;
                  <span className="text-gray-300">
                    $
                    {cartItems.reduce((total, cart) => {
                      const item = items.find((i) => i.id === cart.id);
                      return total + (item?.price || 0) * cart.quantity;
                    }, 0)}
                  </span>
                </span>
              ) : (
                "NEXT"
              )}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

type summaryProps = {
  cartItems: { id: number; quantity: number }[];
};
const Summary = ({ cartItems }: summaryProps) => {
  return (
    <div className="flex flex-col gap-10 justify-center px-4 w-full ">
      <h3 className="text-center">Summary</h3>
      {cartItems.map((item) => {
        return <ItemsCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Checkout;
