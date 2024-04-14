import { useParams } from "react-router-dom";
import {
  Banner,
  BestSelling,
  Categories,
  ClientSlider,
  Footer,
  Products,
  PromoBanner,
} from "..";

const Feed = () => {
  const { category } = useParams();

  return (
    <div className="flex flex-col gap-3 h-full pt-4">
      <Banner />
      <Categories />
      {category === "shoes" ? (
        <Products categoryName="Shoes" />
      ) : category === "electronics" ? (
        <Products categoryName="Electronics" />
      ) : (
        <BestSelling />
      )}
      <PromoBanner />
      <ClientSlider />
      <Footer />
    </div>
  );
};

export default Feed;
