import axios, { AxiosError } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const getGuestSessionId = () => {
  if (typeof window === "undefined") return null;

  return window.localStorage.getItem("guest_session_id");
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const guestSessionId = getGuestSessionId();

  config.params = {
    ...config.params,
    api_key: config.params?.api_key ?? apiKey,
    ...(guestSessionId && {
      guest_session_id: config.params?.guest_session_id ?? guestSessionId,
    }),
  };

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (import.meta.env.DEV) {
      console.error("[API Error]", {
        message: error.message,
      });
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
