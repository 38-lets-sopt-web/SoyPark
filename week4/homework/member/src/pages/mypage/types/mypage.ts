import type { BaseResponse } from "@shared/types/baseResponse";

export type ResponseUserInfo = BaseResponse<{
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}>;

export type PatchProfile = BaseResponse<{
  name: string;
  email: string;
  age: number;
}>;
