import axiosInstance from "./axiosInstance";

export const api = {
  get: async <T>(url: string, params?: Record<string, unknown>) => {
    const response = await axiosInstance.get<T>(url, { params });
    return response.data;
  },
  post: async <T, B = unknown>(
    url: string,
    body?: B,
    params?: Record<string, unknown>,
  ) => {
    const response = await axiosInstance.post<T>(url, body, { params });
    return response.data;
  },
  delete: async <T, B = unknown>(
    url: string,
    body?: B,
    params?: Record<string, unknown>,
  ) => {
    const response = await axiosInstance.delete<T>(url, {
      data: body,
      params,
    });
    return response.data;
  },
};
