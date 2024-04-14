import { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/context";
import { BsBag } from "react-icons/bs";

type cardItemsProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  actualPrice: number;
};

const CardItems = ({ id, img, name, price, actualPrice }: cardItemsProps) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    user,
    setShowAuthModal,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const [isLoaded, setIsLoaded] = useState(false);
  const [imgUrl, setImgUrl] = useState(``);

  useEffect(() => {
    const image = new Image();
    image.src = `/images/${img}`;
    image.addEventListener("load", () => {
      setIsLoaded(true);
      setImgUrl(image.src);
    });
  }, []);

  return (
    <div className="w-72 h-72 max-md:w-[270px] max-md:h-[270px] p-3 rounded-md call-shadow flex justify-center relative ">
      {isLoaded && (
        <img
          loading="lazy"
          src={`${imgUrl}`}
          width={name === "iphone" ? 70 : 150}
          height={name === "iphone" ? 70 : 150}
          alt={name}
          className={`object-cover self-start mt-4`}
        />
      )}
      <div className="absolute bottom-16 left-5">
        <span>{name}</span>
      </div>

      {quantity !== 0 ? (
        <>
          <button
            onClick={() => decreaseItemQuantity(id)}
            title="decrease quantity"
            aria-label="decrease quantity"
            type="button"
            className="absolute bottom-[61px] right-[73px]  px-3 bg-slate-200 rounded-md hover:bg-black hover:text-white transition-all duration-300"
          >
            -
          </button>
          <button
            onClick={() => increaseItemQuantity(id)}
            title="increase quantity"
            aria-label="increase quantity"
            type="button"
            className="absolute bottom-[61px] right-2 px-3 bg-slate-200 rounded-md hover:bg-black hover:text-white transition-all duration-300"
          >
            +
          </button>
          <div
            className={`absolute bottom-16  text-sm ${
              quantity >= 10 ? "right-11" : "right-12"
            }`}
          >
            <span>x{quantity}</span>
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            if (!user.id || !user.username) {
              return setShowAuthModal(true);
            }
            increaseItemQuantity(id);
          }}
          title="add to cart"
          aria-label="add to cart"
          type="button"
          className="absolute bottom-16 right-5 p-2 rounded-md bg-slate-200 cursor-pointer group hover:bg-black hover:text-white transition-all duration-300"
        >
          <BsBag />
        </button>
      )}

      <div className="absolute bottom-4 left-5 flex items-center justify-center gap-2">
        <span>${price}</span>
        <span className="text-red-400 text-[12px] line-through">
          ${actualPrice}
        </span>
      </div>
    </div>
  );
};

export default CardItems;
