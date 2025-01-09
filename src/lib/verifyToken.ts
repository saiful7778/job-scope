import { axiosPublic } from "./configs/axios.config";

export default function verifyToken(token: string) {
  return axiosPublic.post("/api/auth/verify/", { token });
}
