import { Navigate, Outlet } from 'react-router-dom';
import { useGetUser } from '../hooks/useGetUserHooks';

export default function PrivateRoute() {
  const user = useGetUser(); // Using the custom hook here
  return !user ? <Navigate to='/auth' /> : <Outlet />;
}
