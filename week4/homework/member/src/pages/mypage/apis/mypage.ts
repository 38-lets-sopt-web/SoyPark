import type {
  ResponseUsers,
  ResponseUserInfo,
  PatchProfile,
} from "../types/mypage";
import { axiosInstance } from "@apis/axiosInstance";

// 전체 유저 정보 조회
export const getUsers = async (): Promise<ResponseUsers> => {
  const { data } = await axiosInstance.get(`/api/v1/users`);

  return data;
};

// 정보 수정
export const patchUserInfo = async (
  userId: number,
  body: PatchProfile,
): Promise<ResponseUserInfo> => {
  const { data } = await axiosInstance.patch(`/api/v1/users/${userId}`, body);

  return data;
};
