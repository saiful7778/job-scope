import { useAxios } from "@/hooks/useAxios";
import errorResponse from "@/lib/errorResponse";
import newAccessToken from "@/lib/newAccessToken";
import verifyToken from "@/lib/verifyToken";
import {
  authSelector,
  restoreLoading,
  storeToken,
} from "@/redux/features/auth/authSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const axios = useAxios();
  const token = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token?.accessToken && token?.refreshToken) {
      (async () => {
        try {
          dispatch(restoreLoading(true));

          await verifyToken(token.refreshToken!);

          const data = await newAccessToken<{ access: string }>(
            token.refreshToken!,
          );
          dispatch(storeToken({ accessToken: data.access }));
        } catch (err) {
          toast.error(errorResponse(err));
        } finally {
          dispatch(restoreLoading(false));
        }
      })();
    } else {
      dispatch(restoreLoading(false));
    }
  }, [token, dispatch, axios]);

  return children;
};

export default AuthProvider;
