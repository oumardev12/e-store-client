import { useEffect, useState } from "react";

const PromoBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgUrl, setImgUrl] = useState(`/images/placeholders/promo.avif`);

  useEffect(() => {
    const image = new Image();
    image.src = `/images/promo.jpg`;
    image.addEventListener("load", () => {
      setIsLoaded(true);
      setImgUrl(image.src);
    });
  }, []);

  return (
    <div className="w-ful h-[450px] overflow-hidden mt-10">
      <div className="w-full h-full relative">
        <img
          src={`${imgUrl}`}
          alt="nike shoe"
          width={"100%"}
          height={"100%"}
          className={`object-cover max-sm:w-[100%] max-sm:h-[100%] ${
            isLoaded ? "blur-none" : "blur-[2px]"
          }  transition-[filter] duration-[2s] ease-in-out`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-3 text-white">
          <div>
            <h4 className="text-2xl max-sm:text-lg">
              Extra{" "}
              <span className="px-2 py-1 bg-blue-500  rounded-md text-lg">
                30% Off
              </span>
              &nbsp;Online
            </h4>
          </div>
          <div>
            <h4 className="text-2xl max-sm:text-lg">LIFESTYLE COLLECTION</h4>
          </div>
          <div className="text-sm text-slate-200 max-sm:text-xs">
            <span>Free Shipping On Orders Over $99</span>
          </div>
          <a href="#categories">
            <button
              type="button"
              className="p-3 py-2 bg-slate-200 text-black rounded-xl hover:text-white hover:bg-black transition-all duration-500 ease-out max-sm:text-sm"
            >
              Discover Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
