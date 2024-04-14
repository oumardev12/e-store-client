import { useState } from "react";
import { FaXmark as CloseModale } from "react-icons/fa6";
import SignUp from "../authForms/SignUp";
import LogIn from "../authForms/LogIn";
import { modalDropIn, m } from "../../constants/constants";

type authenticationModalProps = {
  setShowAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthenticationModal = ({
  setShowAuthModal,
}: authenticationModalProps) => {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <m.div
      className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 h-full w-full flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowAuthModal((prev) => !prev)}
    >
      <m.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] max-w-2xl h-[80%] bg-gray-950 rounded-md flex flex-col items-center justify-center"
        variants={modalDropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          onClick={() => setShowAuthModal((prev) => !prev)}
          className="absolute cursor-pointer top-0 right-0 text-2xl text-white"
        >
          <CloseModale fontSize={16} />
        </div>
        <div className="grow w-full text-white">
          {showSignUp ? (
            <SignUp setShowAuthModal={setShowAuthModal} />
          ) : (
            <LogIn setShowAuthModal={setShowAuthModal} />
          )}
        </div>
        <div className="text-center max-[400px]:text-sm text-white">
          <p>
            {showSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            className="cursor-pointer py-1 px-6 rounded-md my-2 bg-white text-black hover:bg-black hover:text-white transition-all"
            onClick={() => setShowSignUp((prev) => !prev)}
          >
            {showSignUp ? "login" : "signup"}
          </button>
        </div>
      </m.div>
    </m.div>
  );
};

export default AuthenticationModal;
