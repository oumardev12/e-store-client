import { useState } from "react";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaCopyright,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import { useShoppingCart } from "../../context/context";

const Footer = () => {
  const { setError, setSuccess } = useShoppingCart();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setError("all the fields are required");
      return setTimeout(() => {
        setError("");
      }, 5000);
    }

    if (email.length >= 50) {
      setError("your email is too long (50 char max)");
      return setTimeout(() => {
        setError("");
      }, 5000);
    }

    setEmail("");

    setSuccess("thank you for your subscription");
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  return (
    <div className="flex flex-col gap-20 pt-10 pb-5 px-2 bg-[rgba(0,0,0,0.95)] text-white">
      <div className="flex items-center justify-center gap-10 max-md:flex-wrap ">
        <div className="mx-auto select-none">
          <h3 className="text-blue-400">Logo</h3>
        </div>
        <div className="text-sm text-gray-500 text-center">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <span className="text-xs max-md:text-[10px]">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
          </span>
        </div>
        <form onSubmit={(e) => handleNewsletter(e)} className="mx-auto">
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="bg-slate-800 text-white max-sm:text-xs max-sm:px-1 max-sm:py-1 text-sm px-3 outline-none py-2 rounded-tl-md rounded-bl-md "
          />
          <button
            type="submit"
            className="px-3 py-2 max-sm:text-xs max-sm:px-1 max-sm:py-1 bg-blue-800 text-white rounded-tr-md rounded-br-md hover:bg-white hover:text-black transition-all duration-500 ease-out text-sm select-none"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex items-center justify-evenly text-gray-500 max-md:flex-wrap gap-10">
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="max-sm:text-sm">CONTACT INFO</h3>
          <ul className="text-xs flex flex-col gap-2 items-center justify-center">
            <li>
              <a
                href="tel:+000000000"
                className="flex items-center justify-center gap-1 hover:text-white transition-all duration-500 ease-out"
              >
                <FaPhone />
                <span>+000000000</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:estore@gamil.com"
                className="flex items-center justify-center gap-1 hover:text-white transition-all duration-500 ease-out"
              >
                <FaEnvelope />
                <span>estore@gmail.com</span>
              </a>
            </li>
            <li>
              <address className="flex items-center justify-center gap-1">
                <FaLocationDot />
                <span>on EARTH</span>
              </address>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="max-sm:text-sm">LINKS</h3>
          <ul className="text-xs">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-500 ease-out"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-500 ease-out"
              >
                Customer service
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="max-sm:text-sm">FOLLOW US</h3>
          <ul className="flex flex-col items-center justify-center gap-2">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook"
              >
                <FaFacebook
                  fontSize={20}
                  className="cursor-pointer hover:text-white transition-all duration-500 ease-out"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="instagram"
              >
                <FaInstagram
                  fontSize={20}
                  className="cursor-pointer hover:text-white transition-all duration-500 ease-out"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="tiktok"
              >
                <FaTiktok
                  fontSize={20}
                  className="cursor-pointer hover:text-white transition-all duration-500 ease-out"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center text-gray-500">
        <div className="text-sm flex items-center justify-center gap-1">
          <span>Copyright</span>
          <FaCopyright />
          <span>2023</span>
          <span>Estore</span>
          <span>LLC</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
