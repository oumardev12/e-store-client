import { labelTransitionType } from "../types/types";

/**
 * utility function for the transition effect on the login
 * and signup fields
 */
export const labelTransition = ({
  event,
  index,
  setActiveUsername,
  setActivePass,
  setActiveConf,
  setActiveEmail,
}: labelTransitionType) => {
  if (event.currentTarget.value !== "") {
    switch (index) {
      case 1:
        if (setActiveUsername) {
          setActiveUsername(true);
        }
        break;
      case 2:
        if (setActivePass) {
          setActivePass(true);
        }
        break;
      case 3:
        if (setActiveConf) {
          setActiveConf(true);
        }
        break;
      case 4:
        if (setActiveEmail) {
          setActiveEmail(true);
        }
        break;

      default:
        break;
    }
  } else if (event.currentTarget.value === "") {
    switch (index) {
      case 1:
        if (setActiveUsername) {
          setActiveUsername(false);
        }
        break;
      case 2:
        if (setActivePass) {
          setActivePass(false);
        }
        break;
      case 3:
        if (setActiveConf) {
          setActiveConf(false);
        }
        break;
      case 4:
        if (setActiveEmail) {
          setActiveEmail(false);
        }
        break;

      default:
        break;
    }
  }
};

/**
 * utility function for formatting dates
 * @param input data of type string
 * @returns new formated data
 */
export const formatDate = (input: string) => {
  const formatter = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
  });
  const newDate = new Date(input);
  return formatter.format(newDate);
};
