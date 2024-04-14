import { BiCheckCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AfterCheckout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <BiCheckCircle color={"green"} />
        <p>Thank you for your purchase!</p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="p-2 py-1 bg-blue-500 rounded-md outline-none border-none text-sm text-white"
      >
        Back to home
      </button>
    </div>
  );
};

export default AfterCheckout;
