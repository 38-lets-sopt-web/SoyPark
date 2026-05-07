import type { BaseResponse } from "@/shared/types/baseResponse";

export type RequestLogin = {
  loginId: string;
  password: string;
};

export type ResponseLogin = BaseResponse<{
  userId: number;
}>;
