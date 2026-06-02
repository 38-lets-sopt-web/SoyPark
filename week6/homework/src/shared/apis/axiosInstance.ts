import axios, { AxiosError } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const GUEST_SESSION_KEY = "guest_session_id";

// 로컬 스토리지에서 게스트 세션 ID 가져오기
const getStoredGuestSessionId = () => {
  return localStorage.getItem(GUEST_SESSION_KEY);
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const guestSessionId = getStoredGuestSessionId();

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
