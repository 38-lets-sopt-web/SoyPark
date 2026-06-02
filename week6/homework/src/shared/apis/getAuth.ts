import { API_ENDPOINT } from "@constants/apiEndpoints";
import type { GuestSessionResponse } from "@shared/types/auth";
import { api } from "./https";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@constants/queryKeys";

const GUEST_SESSION_KEY = "guest_session_id";

// 게스트 세션 ID가 없을 경우 발급 받아 저장
export const getGuestSession = () => {
  return api.get<GuestSessionResponse>(API_ENDPOINT.GUEST_ID);
};

export const useGuestSessionQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.GUEST_SESSION,
    queryFn: async () => {
      const storedGuestSessionId = localStorage.getItem(GUEST_SESSION_KEY);

      if (storedGuestSessionId) {
        return storedGuestSessionId;
      }

      const response = await getGuestSession();
      localStorage.setItem(GUEST_SESSION_KEY, response.guest_session_id);

      return response.guest_session_id;
    },
  });
};
