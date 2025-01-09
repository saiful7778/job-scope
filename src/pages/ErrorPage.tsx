import { useRouteError } from "react-router";

const ErrorPage: React.FC = () => {
  const errorData = useRouteError();
  console.log(errorData);
  return <div>ErrorPage</div>;
};

export default ErrorPage;
