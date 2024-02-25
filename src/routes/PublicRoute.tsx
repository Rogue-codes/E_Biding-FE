import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute() {

  const user = useSelector((state: any) => state.auth.user)
  console.log(user);
  return user ? <Navigate to="/" /> : <Outlet />;
}
