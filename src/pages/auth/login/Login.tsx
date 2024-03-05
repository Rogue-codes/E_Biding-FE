import { useForm } from "react-hook-form";
import { nigalex } from "../../../assets";
import { useMutation } from "react-query";
import * as apiClient from "../../../services/Api";
import { enqueueSnackbar } from "notistack";
import Loading from "react-loading";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/authSlice";

export interface ILoginForm {
  userName: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const dispatch = useDispatch();

  const mutation = useMutation(apiClient.login, {
    onSuccess: (data: any) => {
      enqueueSnackbar(`${data.message}`, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      dispatch(login(data.data));
    },
    onError: (error: any) => {
      // enqueueSnackbar(`${error}`, {
      //   variant: "error",
      //   anchorOrigin: { vertical: "top", horizontal: "right" },
      // });
      console.log(error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
    console.log(data);
  });

  return (
    <div className="w-full h-screen flex flex-col gap-6 justify-start items-center">
      <div className="mt-36">
        <img src={nigalex} alt="" />
      </div>

      <form
        action=""
        className="w-[40.4vw] border p-9 bg-white rounded-xl shadow-lg"
        onSubmit={onSubmit}
      >
        <p className="text-lg underline text-NGA-Primary">Admin Login</p>
        <div className="mt-8">
          <label htmlFor="username" className="text-black font-medium">
            Username
          </label>
          <div className="w-full border border-NGA-Primary rounded-lg ">
            <input
              className="w-full py-2 px-4 rounded-lg focus:outline-none"
              {...register("userName", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                
              })}
              type="text"
            />
          </div>
          {errors.userName && (
            <span className="text-xs text-red-500 block">
              {errors.userName.message}
            </span>
          )}

          <div className="mt-5">
            <label htmlFor="password" className="text-black  font-medium">
              Password
            </label>
            <div className="w-full border border-NGA-Primary rounded-lg">
              <input
                className="w-full py-2 px-4 rounded-lg focus:outline-none"
                {...register("password", {
                  required: "password is required",
                  minLength: 3,
                })}
                type="password"
              />
            </div>
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg py-3 bg-NGA-Primary text-white mt-8"
        >
          {mutation.isLoading ? (
            <Loading type="spin" color="white" className="!w-6 !h-6 mx-auto" />
          ) : (
            <p>LOGIN</p>
          )}
        </button>
      </form>
    </div>
  );
}
