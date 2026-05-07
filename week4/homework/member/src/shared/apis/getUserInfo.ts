import { axiosInstance } from "@apis/axiosInstance";
import type { ResponseUserInfo } from "@pages/mypage/types/mypage";

// 개인정보 조회
export const getUserInfo = async (
  userId: string,
): Promise<ResponseUserInfo> => {
  const { data } = await axiosInstance.get(`/api/v1/users/${userId}`);

  return data;
};
