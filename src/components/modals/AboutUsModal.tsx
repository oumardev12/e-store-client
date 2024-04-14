import { FaXmark as CloseModale } from "react-icons/fa6";
import { modalDropIn, m } from "../../constants/constants";

type aboutUsModalProps = {
  setShowAboutsUsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutUsModal = ({ setShowAboutsUsModal }: aboutUsModalProps) => {
  return (
    <m.div
      className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 h-full w-full flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowAboutsUsModal((prev) => !prev)}
    >
      <m.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] max-w-2xl h-[80%] bg-gray-950 rounded-md flex flex-col items-center justify-center"
        variants={modalDropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          onClick={() => setShowAboutsUsModal((prev) => !prev)}
          className="absolute cursor-pointer top-0 right-0 text-2xl text-white"
        >
          <CloseModale fontSize={16} />
        </div>
        <div className="grow w-full text-white">
          <div className="flex flex-col items-center justify-center text-center p-2 h-full">
            <h3 className="mb-auto mt-4">About US</h3>
            <p className="mb-auto sm:text-base text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi tempora dolorum ad deleniti! Ipsa, dolorum quas nobis
              vitae ab quo laboriosam? Ipsa sed ea fuga obcaecati, odit nobis
              repellat eaque. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Natus, quisquam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestias, facilis quae! Ipsa debitis iusto
              repellat, illo architecto voluptatibus magni tenetur doloribus
              culpa voluptate perspiciatis molestias cumque ea provident. Nisi,
              nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Labore ab qui, fugiat delectus nobis sequi repellat magnam a
              atque, doloremque facilis impedit autem dolorem repellendus
              suscipit dolor! Quis, recusandae officiis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Fuga ab consequatur molestias!
              Atque sunt architecto recusandae, inventore itaque doloribus,
              delectus nemo dolorem sed quo quam necessitatibus dolore cum
              quibusdam ad!
            </p>
          </div>
        </div>
      </m.div>
    </m.div>
  );
};

export default AboutUsModal;
