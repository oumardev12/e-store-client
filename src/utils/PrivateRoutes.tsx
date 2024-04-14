import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoutes() {
  const location = useLocation();
  const session = JSON.parse(sessionStorage.getItem("user_info")!);

  return !session?.id ? (
    <Navigate to={"/"} state={{ from: location }} replace={true} />
  ) : (
    <Outlet />
  );
}

export default PrivateRoutes;
