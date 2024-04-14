import { Link, useLocation } from "react-router-dom";
import { BiUser, BiDownArrowCircle } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence } from "../../constants/constants";
import { lazy, Suspense } from "react";
import { useShoppingCart } from "../../context/context";

const AuthenticationModal = lazy(() => import("../modals/AuthenticationModal"));
const ShoppingCartModal = lazy(() => import("../modals/ShoppingCartModal"));
const AboutUsModal = lazy(() => import("../modals/AboutUsModal"));
const ContactUsModal = lazy(() => import("../modals/ContactUsModal"));
const NavModal = lazy(() => import("../modals/NavModal"));

const Navbar = () => {
  const [showShoppingCartModal, setShowShoppingCartModal] = useState(false);
  const [showAboutsUsModal, setShowAboutsUsModal] = useState(false);
  const [showContactUsModal, setShowContactUsModal] = useState(false);
  const [showNavModal, setShowNavModal] = useState(false);

  const location = useLocation();

  const { cartQuantity, user, showAuthModal, setShowAuthModal } =
    useShoppingCart();

  return (
    <>
      <header
        className={`w-full h-[8vh]  ${
          showAuthModal || showAboutsUsModal || showContactUsModal
            ? "static"
            : "sticky top-0"
        }  z-40 call-shadow bg-[#fff] select-none`}
      >
        <nav className="flex w-full h-full items-center max-md:justify-between py-2 px-5 text-sm">
          <div className="md:ml-auto md:mr-32 max-md:order-2">
            <h3 className="text-blue-400">LOGO</h3>
          </div>
          <ul className="flex items-center justify-center gap-5 max-md:order-1 max-md:hidden md:mr-auto text-xs">
            <li>
              <Link
                className="text-black hover:text-orange-600 transition-all"
                to={"/"}
                onClick={() => setShowShoppingCartModal(false)}
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
                >
                  PRODUCTS
                </a>
              ) : (
                <Link
                  to={"/"}
                  className=" text-black hover:text-orange-600 transition-all"
                >
                  PRODUCTS
                </Link>
              )}
            </li>
            <li>
              <button
                onClick={() => {
                  setShowShoppingCartModal(false);
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
                  setShowShoppingCartModal(false);
                  setShowContactUsModal(true);
                }}
                type="button"
                className=" text-black hover:text-orange-600 transition-all"
              >
                CONTACT US
              </button>
            </li>
          </ul>
          <button
            onClick={() => {
              setShowShoppingCartModal(false);
              setShowNavModal((prev) => !prev);
            }}
            className={`md:hidden block hamburger ${
              showNavModal ? "open" : ""
            }`}
            aria-label="toggle nav items"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="md:mr-auto flex justify-center items-center max-md:order-3 gap-3">
            {!user.id || !user.username ? (
              <button
                title="signup or login"
                aria-label="show authentication modal"
                type="button"
                onClick={() => {
                  setShowShoppingCartModal(false);
                  setShowAuthModal(true);
                }}
              >
                <BiUser fontSize={17} className="cursor-pointer" />
              </button>
            ) : (
              <Link
                onClick={() => {
                  setShowNavModal(false);
                  setShowShoppingCartModal(false);
                }}
                to={`/profile/${user.id}`}
                aria-label="view your profile"
                title="view your profile"
                className="flex items-center justify-center gap-1 hover:text-orange-600 transition-all"
              >
                <p>{user.username.slice(0, 10)} </p>
                <BiDownArrowCircle fontSize={16} />
              </Link>
            )}
            {(user.id || user.username) && (
              <button
                title="show your added products"
                aria-label="show all added products"
                type="button"
                className="relative hover:text-orange-600 transition-all"
                onClick={() => {
                  setShowNavModal(false);
                  setShowShoppingCartModal((prev) => !prev);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="17"
                  viewBox="0 -960 960 960"
                  width="17"
                  className="cursor-pointer"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
                {cartQuantity !== 0 && (
                  <div className="absolute -top-[14px] -right-3 w-5 h-5 flex items-center justify-center  rounded-full bg-red-500 text-white text-sm">
                    <span className="text-[10px]">{cartQuantity}</span>
                  </div>
                )}
              </button>
            )}
          </div>
        </nav>
      </header>

      <Suspense fallback={null}>
        <AnimatePresence initial={false} mode="wait">
          {showAuthModal && (
            <AuthenticationModal setShowAuthModal={setShowAuthModal} />
          )}
        </AnimatePresence>
      </Suspense>
      <Suspense fallback={null}>
        <AnimatePresence initial={false} mode="wait">
          {showShoppingCartModal && (
            <ShoppingCartModal
              setShowShoppingCartModal={setShowShoppingCartModal}
            />
          )}
        </AnimatePresence>
      </Suspense>
      <Suspense fallback={null}>
        <AnimatePresence initial={false} mode="wait">
          {showAboutsUsModal && (
            <AboutUsModal setShowAboutsUsModal={setShowAboutsUsModal} />
          )}
        </AnimatePresence>
      </Suspense>
      <Suspense fallback={null}>
        <AnimatePresence initial={false} mode="wait">
          {showContactUsModal && (
            <ContactUsModal setShowContactUsModal={setShowContactUsModal} />
          )}
        </AnimatePresence>
      </Suspense>
      <Suspense fallback={null}>
        <AnimatePresence initial={false} mode="wait">
          {showNavModal && (
            <NavModal
              setShowNavModal={setShowNavModal}
              setShowAboutsUsModal={setShowAboutsUsModal}
              setShowContactUsModal={setShowContactUsModal}
            />
          )}
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default Navbar;
