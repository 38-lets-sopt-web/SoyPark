export interface BaseResponse<T = null> {
  success: boolean;
  status: number;
  code: string;
  message: string;
  meta: T;
}
