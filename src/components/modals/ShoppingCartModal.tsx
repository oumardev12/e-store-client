import { FaXmark as CloseModale } from "react-icons/fa6";
import { m } from "../../constants/constants";
import { Variants } from "framer-motion";
import { useShoppingCart } from "../../context/context";
import items from "../../data/items.json";
import { Link } from "react-router-dom";
import ItemsCard from "../ItemsCard/ItemsCard";

type shoppinCartModalProps = {
  setShowShoppingCartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const shoppingModal: Variants | undefined = {
  hidden: {
    translateX: "100%",
  },
  visible: {
    translateX: "0%",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    translateX: "100%",
  },
};

const ShoppinCartModal = ({
  setShowShoppingCartModal,
}: shoppinCartModalProps) => {
  const { cartItems } = useShoppingCart();
  return (
    <m.div
      className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 h-full w-full flex items-center justify-end z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowShoppingCartModal((prev) => !prev)}
    >
      <m.div
        onClick={(e) => e.stopPropagation()}
        className="relative sm:w-[90%] w-full sm:max-w-xs mt-auto h-[92%] bg-white overflow-y-scroll"
        variants={shoppingModal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          onClick={() => setShowShoppingCartModal((prev) => !prev)}
          className="absolute cursor-pointer top-2 right-2 text-2xl text-slate-500"
        >
          <CloseModale fontSize={16} />
        </div>
        <div className="flex flex-col gap-6 h-full">
          <div className="my-9 text-center">
            <h3 className="text-xl">Cart</h3>
          </div>
          <div className="flex flex-col gap-10 justify-center px-4">
            {cartItems.map((item) => {
              return <ItemsCard key={item.id} {...item} />;
            })}
          </div>
          {cartItems.length <= 0 ? (
            <>
              <div className="text-center text-slate-500 text-sm">
                <span>cart is empty!</span>
              </div>
            </>
          ) : (
            <div className="mt-auto mx-auto flex flex-col gap-2 items-center py-3 pl-4 w-full">
              <h3>
                Total:&nbsp;
                <span>
                  $
                  {cartItems.reduce((total, cart) => {
                    const item = items.find((i) => i.id === cart.id);
                    return total + (item?.price || 0) * cart.quantity;
                  }, 0)}
                </span>
              </h3>
              <Link
                to={`/checkout`}
                onClick={() => {
                  setShowShoppingCartModal(false);
                }}
                className="py-1 w-full bg-blue-800 px-2 rounded-md text-white hover:bg-blue-950 transition-all text-center select-none"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </m.div>
    </m.div>
  );
};

export default ShoppinCartModal;
