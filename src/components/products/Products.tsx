import { CardItems } from "..";
import products from "../../data/items.json";

type productsProps = {
  categoryName: string;
};

const Products = ({ categoryName }: productsProps) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-12 px-5">
      <h3 className=" text-xl">{categoryName}</h3>
      <div className="flex flex-wrap container justify-center items-center gap-10 select-none">
        {products
          .filter((item) => item.category === categoryName.toLowerCase())
          .map((item) => {
            return <CardItems key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Products;
