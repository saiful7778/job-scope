import { axiosPrivate, axiosPublic } from "@/lib/configs/axios.config";
import newAccessToken from "@/lib/newAccessToken";
import verifyToken from "@/lib/verifyToken";
import { authSelector } from "@/redux/features/auth/authSlice";
import type { AxiosInstance } from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function useAxios(): AxiosInstance {
  return axiosPublic;
}

export function useAxiosSecure() {
  const { accessToken, refreshToken } = useSelector(authSelector);

  useEffect(() => {
    const responseInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        // config.headers["Authentication"] = `Bearer ${accessToken}`;
        return config;
      },
      (err) => Promise.reject(err),
    );

    const requestInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;
        const status = err?.response?.status;

        if ((status === 401 || status === 403) && !prevRequest?.sent) {
          prevRequest.sent = true;
          if (refreshToken) {
            await verifyToken(refreshToken);
            const { access } = await newAccessToken<{ access: string }>(
              refreshToken,
            );
            prevRequest.headers["Authentication"] = `Bearer ${access}`;
            return axiosPrivate(prevRequest);
          } else {
            return Promise.reject(err);
          }
        }

        return Promise.reject(err);
      },
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseInterceptor);
      axiosPrivate.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken, refreshToken]);

  return axiosPrivate;
}
