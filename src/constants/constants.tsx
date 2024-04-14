import { Variants, motion as m, AnimatePresence } from "framer-motion";
import { BallTriangle, Vortex } from "react-loader-spinner";

export const modalDropIn: Variants | undefined = {
  hidden: {
    opacity: 0,
    translateY: "100%",
  },
  visible: {
    opacity: 1,
    translateY: "0%",
    transition: {
      duration: 0.3,
      // type: "spring",
      // damping: 20,
      // stiffness: 500,
      // bounce: 0.25,
    },
  },
  exit: {
    opacity: 0,
    translateY: "100%",
  },
};

export const messageTransition: Variants | undefined = {
  hidden: {
    opacity: 0,
    translateY: 150,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 10,
      type: "spring",
      damping: 50,
      stiffness: 500,
      bounce: 0.25,
    },
  },
  exit: {
    opacity: 0,
    translateY: -150,
  },
};

export { BallTriangle, Vortex, m, AnimatePresence };
