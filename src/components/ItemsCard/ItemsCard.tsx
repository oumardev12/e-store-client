import { useShoppingCart } from "../../context/context";
import items from "../../data/items.json";
import { FaXmark as CloseModale } from "react-icons/fa6";

type itemsCardProps = {
  id: number;
  quantity: number;
};

const ItemsCard = ({ id, quantity }: itemsCardProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = items.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <div className="flex items-center justify-evenly w-full gap-3 ">
      <img
        src={`/images/${item?.img}`}
        alt={item?.name}
        className="object-cover"
        width={60}
        height={60}
      />
      <div className="flex flex-col justify-center items-center ">
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm">{item?.name}</span>
          {quantity > 1 && (
            <span className="text-xs text-slate-500">x{quantity}</span>
          )}
        </div>
        <div>
          <span>${item?.price}</span>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-center gap-2">
        <span>${item?.price! * quantity}</span>
        <button
          onClick={() => removeFromCart(item?.id!)}
          aria-label="remove from cart"
          title="remove from cart"
          type="button"
          className="p-2 rounded-md bg-slate-200 cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
        >
          <CloseModale fontSize={10} />
        </button>
      </div>
    </div>
  );
};

export default ItemsCard;
