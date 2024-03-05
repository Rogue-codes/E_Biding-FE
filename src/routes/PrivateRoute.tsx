import { Navigate, Outlet } from 'react-router-dom';
import { useGetUser } from '../hooks/useGetUserHooks';
import { useQuery } from 'react-query';
import * as apiClient from "../services/Api";
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

export default function PrivateRoute() {
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

  const user = useGetUser(); // Using the custom hook here
  return !user ? <Navigate to='/auth' /> : <Outlet />;
}
