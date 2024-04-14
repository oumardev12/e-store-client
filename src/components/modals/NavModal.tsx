import { m } from "../../constants/constants";
import { Variants } from "framer-motion";
import { Link } from "react-router-dom";

type navModalProps = {
  setShowNavModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAboutsUsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowContactUsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const shoppingModal: Variants | undefined = {
  hidden: {
    translateX: "-100%",
  },
  visible: {
    translateX: "0%",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    translateX: "-100%",
  },
};

const NavModal = ({
  setShowNavModal,
  setShowAboutsUsModal,
  setShowContactUsModal,
}: navModalProps) => {
  return (
    <m.div
      className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 h-full w-full flex items-center justify-start z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowNavModal((prev) => !prev)}
    >
      <m.div
        onClick={(e) => e.stopPropagation()}
        className="relative sm:w-[90%] w-full sm:max-w-xs mt-auto h-[92%] bg-white overflow-y-scroll"
        variants={shoppingModal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="h-full">
          <ul className="flex flex-col items-center justify-center gap-5 mr-auto text-xs h-full">
            <li>
              <Link
                className="text-black hover:text-orange-600 transition-all"
                to={"/"}
                onClick={() => {
                  setShowNavModal(false);
                }}
              >
                HOME
              </Link>
            </li>
            <li>
              {location.pathname === "/" ||
              location.pathname === "/products/electronics" ||
              location.pathname === "/products/shoes" ? (
                <a
                  className=" text-black hover:text-orange-600 transition-all"
                  href={"#categories"}
                  onClick={() => {
                    setShowNavModal(false);
                  }}
                >
                  PRODUCTS
                </a>
              ) : (
                <Link
                  to={"/"}
                  className=" text-black hover:text-orange-600 transition-all"
                  onClick={() => {
                    setShowNavModal(false);
                  }}
                >
                  PRODUCTS
                </Link>
              )}
            </li>
            <li>
              <button
                onClick={() => {
                  setShowNavModal(false);
                  setShowAboutsUsModal(true);
                }}
                type="button"
                className=" text-black hover:text-orange-600 transition-all"
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowNavModal(false);
                  setShowContactUsModal(true);
                }}
                type="button"
                className=" text-black hover:text-orange-600 transition-all"
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      </m.div>
    </m.div>
  );
};

export default NavModal;
