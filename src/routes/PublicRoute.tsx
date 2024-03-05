import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import * as apiClient from '../services/Api'
import { enqueueSnackbar } from "notistack";
import { login } from "../redux/slices/authSlice";
export default function PublicRoute() {
  const dispatch = useDispatch()
  const { data, isSuccess } = useQuery(
    "token",
    () => apiClient.getSession(),
    {
      onError: (error: any) => {
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
    }
  );

  console.log(data?.data)

  if(isSuccess){
    dispatch(login(data?.data))
  }
  const user = useSelector((state: any) => state.auth.user)
  return user ? <Navigate to="/" /> : <Outlet />;
}
