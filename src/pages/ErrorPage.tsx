import { Button } from "@/components/shadcn/ui/button";
import { Link, useRouteError } from "react-router";

const ErrorPage: React.FC = () => {
  const errorData = useRouteError() as {
    status: number;
    statusText: string;
    internal: boolean;
    data: string;
    error: Error;
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2 text-center lg:gap-4">
      <div className="text-9xl font-bold">404!</div>
      <h1 className="mt-5 text-lg font-bold lg:text-3xl">
        {errorData.status === 404
          ? "This page doesn't exist!"
          : errorData.status === 401
            ? "You aren't authorized to see this"
            : "Something went wrong"}{" "}
      </h1>
      {import.meta.env.MODE === "development" && (
        <pre>
          <code>{errorData?.data}</code>
        </pre>
      )}
      <Button className="!py-2" asChild>
        <Link to="/">Go back</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
