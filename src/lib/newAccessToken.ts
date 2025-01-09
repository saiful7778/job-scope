import { axiosPublic } from "./configs/axios.config";

export default async function newAccessToken<T>(token: string): Promise<T> {
  const { data } = await axiosPublic.post<T>("/api/auth/refresh/", {
    refresh: token,
  });
  return data;
}
