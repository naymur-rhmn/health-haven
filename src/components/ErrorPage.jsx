import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center gap-2 h-screen">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="font-semibold text-xl">Oops!</h1>
        <p className="">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
