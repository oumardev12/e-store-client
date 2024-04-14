import { FaXmark as CloseModale } from "react-icons/fa6";
import { modalDropIn, m } from "../../constants/constants";
import { useRef, useState } from "react";
import { labelTransition } from "../../utils/helpers";
import { useShoppingCart } from "../../context/context";

type contactUsModalProps = {
  setShowContactUsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactUsModal = ({ setShowContactUsModal }: contactUsModalProps) => {
  const [activeEmail, setActiveEmail] = useState(false);
  const { setError, setSuccess } = useShoppingCart();

  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let emailValue = email.current?.value;
    let messageValue = message.current?.value;

    if (!emailValue || !messageValue) {
      setError("all the fields are required");
      return setTimeout(() => {
        setError("");
      }, 5000);
    }

    if (emailValue.length >= 50) {
      setError("your email is too long (50 char max)");
      return setTimeout(() => {
        setError("");
      }, 5000);
    }

    if (emailValue.length >= 700) {
      setError("your message is too long (700 char max)");
      return setTimeout(() => {
        setError("");
      }, 5000);
    }

    setSuccess("your message was sent!");
    setTimeout(() => {
      setSuccess("");
    }, 5000);

    setShowContactUsModal(false);
  };

  return (
    <m.div
      className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 h-full w-full flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowContactUsModal((prev) => !prev)}
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
          onClick={() => setShowContactUsModal((prev) => !prev)}
          className="absolute cursor-pointer top-0 right-0 text-2xl text-white"
        >
          <CloseModale fontSize={16} />
        </div>
        <div className="grow w-full text-white">
          <form
            onSubmit={(e) => handleContact(e)}
            className="flex flex-col items-center justify-evenly  h-full"
          >
            <h3 className="text-lg max-[400px]:text-sm">
              Get In Touch With US
            </h3>
            <div className="relative w-[70%] group ">
              <label
                htmlFor="email"
                className={`absolute ${
                  !activeEmail
                    ? "top-0 left-0 sm:text-base"
                    : "left-[-2px] top-[-25px] max-[400px]:top-[-17px]  max-[400px]:text-[10px] sm:text-sm"
                } pointer-events-none group-focus-within:top-[-25px] group-focus-within:left-[-2px] group-focus-within:text-sm group-focus-within:max-[400px]:text-[10px] group-focus-within:max-[400px]:top-[-17px] transition-all text-sm `}
              >
                Your Email <span className="text-red-600">*</span>
              </label>
              <input
                onInput={(event) =>
                  labelTransition({ event, index: 4, setActiveEmail })
                }
                type="email"
                required
                id="email"
                className="bg-gray-950 outline-none
                      border-b-white border-b-2 w-[100%]
                    max-[400px]:text-sm rounded-[4px]"
                ref={email}
              />
            </div>
            <div className="relative w-[70%] group">
              <textarea
                ref={message}
                name="message"
                cols={30}
                rows={10}
                placeholder="enter your message"
                className="resize-none w-full rounded-md outline-none text-black p-2 placeholder:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-[70%] bg-blue-800 p-2 rounded-md hover:bg-blue-950 transition-all max-[400px]:text-sm"
            >
              contact
            </button>
          </form>
        </div>
      </m.div>
    </m.div>
  );
};

export default ContactUsModal;
