import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";
import { FaXmark as CloseModale } from "react-icons/fa6";
import {
  AnimatePresence,
  m,
  messageTransition,
} from "../../constants/constants";
import { useShoppingCart } from "../../context/context";

const Toasters = () => {
  const { error, setError, success, setSuccess } = useShoppingCart();

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {error !== "" && (
          <m.div
            variants={messageTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed z-50 top-2 left-1/2 w-full"
            style={{
              translate: "-50%",
            }}
          >
            <div className="relative sm:w-1/3 w-[90%] h-12 mx-auto px-3 py-1 bg-red-300 rounded-md flex items-center justify-center gap-2 text-center">
              <div
                onClick={() => setError("")}
                className="absolute cursor-pointer top-0 right-0 text-white"
              >
                <CloseModale />
              </div>
              <AiFillWarning color="red" />
              <span className="sm:text-sm text-xs text-slate-700 w-full">
                {error.slice(0, 60)}
              </span>
            </div>
          </m.div>
        )}

        {success !== "" && (
          <m.div
            variants={messageTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed z-50 bottom-2 w-full left-1/4"
            style={{
              translate: "-50%",
            }}
          >
            <div className="relative sm:w-1/3 w-[90%] h-12 mx-auto px-3 py-1 bg-green-300 rounded-md flex items-center justify-center gap-2 text-center">
              <div
                onClick={() => setSuccess("")}
                className="absolute cursor-pointer top-0 right-0 text-black"
              >
                <CloseModale />
              </div>
              <AiFillCheckCircle color="green" />
              <span className="sm:text-sm text-xs text-slate-700 w-full">
                {success.slice(0, 60)}
              </span>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Toasters;
