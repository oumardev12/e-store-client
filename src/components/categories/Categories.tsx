import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
  return (
    <div
      id="categories"
      className="bg-[#fafafa] flex flex-col gap-10 items-center justify-center py-12 px-5 "
    >
      <h3 className="text-xl">
        <span>Browse</span> Our Categories
      </h3>
      <div className="flex w-full justify-center items-center gap-7 max-sm:flex-col select-none">
        <CategoriesCard categoryName="Shoes" img="yellow-shoe.png" />
        <CategoriesCard categoryName="Electronics" img="monitor.png" />
      </div>
    </div>
  );
};

type CategoriesCardProps = {
  img: string;
  categoryName: string;
};

const CategoriesCard = ({ img, categoryName }: CategoriesCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgUrl, setImgUrl] = useState(``);
  const { pathname } = useLocation();

  useEffect(() => {
    const image = new Image();
    image.src = `/images/${img}`;
    image.addEventListener("load", () => {
      setIsLoaded(true);
      setImgUrl(image.src);
    });
  }, []);

  return (
    <Link
      to={`/products/${categoryName.toLowerCase()}`}
      className={
        "w-52 h-52 max-md:w-44 max-md:h-44 p-3 rounded-md call-shadow flex items-center justify-center cursor-pointer group relative overflow-hidden"
      }
    >
      {isLoaded && (
        <img
          src={`${imgUrl}`}
          width={150}
          height={150}
          alt={img}
          className={`object-cover`}
        />
      )}
      <div
        className={` absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.3)] transition-all duration-500 ease-out ${
          pathname === `/products/${categoryName.toLowerCase()}`
            ? "translate-y-0 opacity-100"
            : "translate-y-96 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px]"
        }`}
      />
      <span
        className={`absolute bottom-0 w-full p-1 text-center bg-black text-white  transition-all duration-500 ease-out ${
          pathname === `/products/${categoryName.toLowerCase()}`
            ? "translate-y-0 opacity-100"
            : "translate-y-96 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px]"
        }`}
      >
        {categoryName}
      </span>
    </Link>
  );
};

export default Categories;
