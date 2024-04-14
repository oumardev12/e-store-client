import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoutes";
import { Checkout, Feed, Profile } from "../components";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/products/:category" element={<Feed />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="h-[90vh] flex items-center justify-center">
              <p className="text-red-600">page not found 😕</p>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default Home;
