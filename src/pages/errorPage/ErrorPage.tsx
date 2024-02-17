import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="w-full h-screen flex flex-col gap-6 justify-center items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-lg font-bold">
        Page <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
