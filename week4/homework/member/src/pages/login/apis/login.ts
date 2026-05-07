import type { RequestLogin } from "../types/login";
import { axiosInstance } from "@apis/axiosInstance";

export const postLogin = async (body: RequestLogin): Promise<RequestLogin> => {
  const { data } = await axiosInstance.post("/api/v1/auth/signin", body);

  return data;
};
