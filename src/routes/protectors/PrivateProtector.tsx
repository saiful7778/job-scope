import Spinner from "@/components/Spinner";
import { authSelector } from "@/redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const PrivateProtector: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading, accessToken, refreshToken } = useSelector(authSelector);
  const { pathname } = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Spinner size={20} />
      </div>
    );
  }

  if (!!accessToken && !!refreshToken) {
    return children;
  }

  return <Navigate to="/login" state={{ pathname }} />;
};

export default PrivateProtector;
