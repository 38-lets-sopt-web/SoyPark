import type { BaseResponse } from "@shared/types/baseResponse";

export type ResponseUserInfo = BaseResponse<{
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}>;

export type PatchProfile = {
  name: string;
  email: string;
  age: number;
};

export type ResponseUsers = BaseResponse<{
  users: users[];
}>;

type users = {
  id: number;
  name: string;
  part: string;
};
