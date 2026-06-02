import { api } from "@apis/https";
import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "@constants/apiEndpoints";
import { QUERY_KEY } from "@constants/queryKeys";
import type { RatedMovieListResponse } from "@pages/movieDetail/types/rating";

export const getMovieRating = (guestSessionId: string) => {
  return api.get<RatedMovieListResponse>(
    API_ENDPOINT.RATE_LIST(guestSessionId),
  );
};

export const useMovieRatingQuery = (guestSessionId: string) => {
  return useQuery({
    queryKey: QUERY_KEY.RATED_MOVIES(guestSessionId),
    queryFn: () => getMovieRating(guestSessionId),
    enabled: !!guestSessionId,
  });
};
