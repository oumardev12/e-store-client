import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../../api/api";
import { CirclesWithBar } from "react-loader-spinner";
import { AiOutlineLogout } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import items from "../../data/items.json";
import { useShoppingCart } from "../../context/context";
import { useEffect } from "react";

const Profile = () => {
  const { userId } = useParams();
  const { setUser, setError } = useShoppingCart();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setError("");
    };
  }, []);

  const { data: user, status } = useQuery({
    queryKey: [userId],
    queryFn: () => getSingleUser(userId!),
    enabled: !!userId,
    networkMode: "always",
    staleTime: Infinity,
  });

  if (status === "loading") {
    return (
      <div className="h-[92vh] flex items-center justify-center ">
        <CirclesWithBar
          ariaLabel="loading spinner"
          height={35}
          width={35}
          color="orange"
        />
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="h-[92vh] flex items-center justify-center">
        <p className="text-red-600">Something went wrong 😕</p>
      </div>
    );
  }

  const handleLogOut = async () => {
    try {
      const { logOut } = await import("../../api/api");
      const res = await logOut();
      if (res) {
        setUser({ id: "", username: "" });
        sessionStorage.removeItem("user_info");
        navigate("/");
      }
    } catch (error: any) {
      setError(error.response.data.errorMessage);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col items-center justify-center gap-2 p-2 py-6 bg-gray-200 rounded-md sm:w-1/2 w-3/4 mt-4 relative">
          <span>
            username: <span>{user.username} </span>
          </span>
          <span className="text-slate-600 text-sm">
            registered since:&nbsp;
            <span>
              {new Date(user.created_at).toLocaleDateString(undefined, {})}
            </span>
          </span>
          <div className="absolute top-2 right-2">
            <button
              className="text-red-500"
              aria-label="log the user out"
              type="button"
              title="log out"
              onClick={() => handleLogOut()}
            >
              <AiOutlineLogout fontSize={20} />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-2">
            <h3>Purchases</h3>
            <BsBag fontSize={14} color="orange" />
          </div>
          <div className="container mx-auto flex justify-center items-center gap-4 flex-wrap">
            {user.purchases.reverse().map((item, i) => (
              <ProfileCard {...item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

type profileCardProps = {
  products: { product_id: string; quantity: string }[];
  purchase_at: string;
};

const ProfileCard = ({ products, purchase_at }: profileCardProps) => {
  return (
    <div className="bg-gray-200 rounded-md pt-4 pb-1 px-4 flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        {products.map((p) => {
          const product_items = items.filter(
            (item) => item.id === parseInt(p.product_id)
          );
          return product_items.map((item) => (
            <PurchaseCard key={item.id} {...item} quantity={p.quantity} />
          ));
        })}
      </div>
      <div className="text-sm text-slate-600 mt-auto mx-auto">
        {new Date(purchase_at).toLocaleDateString(undefined, {})}
      </div>
    </div>
  );
};

type purchaseCardProps = {
  id: number;
  name: string;
  img: string;
  placeholder: string;
  actualPrice: number;
  price: number;
  category: string;
  bestSeller: boolean;
  quantity: string;
};

const PurchaseCard = ({ name, img, quantity }: purchaseCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-3 call-shadow rounded-md">
      <div className="flex items-center justify-center gap-3 ">
        <img
          src={`/images/${img}`}
          alt={name}
          className="object-cover"
          width={name === "iphone" ? 15 : 40}
          height={name === "iphone" ? 15 : 40}
        />
        <div className="text-sm">
          <span>{name}</span>
        </div>
      </div>
      <span className="text-sm text-slate-600">
        quantity: x<span>{quantity} </span>{" "}
      </span>
    </div>
  );
};

export default Profile;
