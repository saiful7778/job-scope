import { axiosPublic } from "@/lib/configs/axios.config";
import type { AxiosInstance } from "axios";

export function useAxios(): AxiosInstance {
  return axiosPublic;
}

export function useAxiosSecure() {}
