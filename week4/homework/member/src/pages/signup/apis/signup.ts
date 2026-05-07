import { axiosInstance } from "@apis/axiosInstance";
import type { RequestSignup } from "../types/signup";

export const postSignup = async (body: RequestSignup) => {
  const { data } = await axiosInstance.post("/api/v1/auth/signup", body);

  return data;
};
