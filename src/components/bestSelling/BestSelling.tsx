import { CardItems } from "..";
import items from "../../data/items.json";

const BestSelling = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-12 px-5">
      <h3 className=" text-xl">Best Sellings</h3>
      <div className="flex flex-wrap container justify-center items-center gap-10 select-none">
        {items
          .filter((item) => item.bestSeller)
          .map((item) => {
            return <CardItems key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default BestSelling;
