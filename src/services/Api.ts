import { ILoginForm } from "../pages/auth/login/Login";
import ApiFetcher from "./ApiFetcher";
import { enqueueSnackbar } from "notistack";

export const login = async (formData: ILoginForm) => {
  try {
    const response = await ApiFetcher.post(`/admin/login`, formData);
    return response.data;
  } catch (error: any) {
    console.log(error);
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};
