import Spinner from "@/components/Spinner";
import { defaultLoginRedirect } from "@/lib/staticData";
import { authSelector } from "@/redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const AuthProtector: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading, accessToken, refreshToken } = useSelector(authSelector);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Spinner size={20} />
      </div>
    );
  }

  if (!!accessToken && !!refreshToken) {
    return <Navigate to={defaultLoginRedirect} />;
  }

  return children;
};

export default AuthProtector;
