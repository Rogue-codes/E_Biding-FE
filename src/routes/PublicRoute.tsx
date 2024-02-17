import { isLoggedIn } from "../helpers";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const hasAccess: boolean = isLoggedIn;
  return hasAccess ? <Navigate to="/" /> : <Outlet />;
}
