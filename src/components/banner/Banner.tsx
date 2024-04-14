import { useEffect, useState } from "react";

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgUrl, setImgUrl] = useState(``);

  useEffect(() => {
    const image = new Image();
    image.src = `/images/casque.png`;
    image.addEventListener("load", () => {
      setIsLoaded(true);
      setImgUrl(image.src);
    });
  }, []);

  return (
    <div className="flex h-[90vh] max-md:justify-center max-md:items-center max-sm:flex-col p-3 pt-8">
      <div className="mx-auto">
        {isLoaded && (
          <img
            loading="lazy"
            src={`${imgUrl}`}
            width={400}
            height={400}
            alt="casque audio"
            className={`object-cover max-md:w-[200px] max-md:h-[210px] `}
          />
        )}
      </div>
      <div className="mx-auto my-auto flex flex-col gap-4 items-center max-sm:text-center ">
        <h2 className="text-4xl flex flex-col gap-3 max-md:text-2xl">
          <span>Shop Personalize</span>
          <span className="sm:self-end">Your Galaxy</span>
          <span className="sm:self-end">Watches</span>
        </h2>
        <button
          type="button"
          className="px-2 py-1 bg-black text-white call-shadow sm:self-end rounded-lg hover:bg-white hover:text-black transition-all duration-500 max-md:text-sm"
        >
          <a href="#categories">Shop Now</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
