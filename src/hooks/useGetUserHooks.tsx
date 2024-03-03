import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store"; // Update the path to your rootReducer file

export const useGetUser = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return user;
}
