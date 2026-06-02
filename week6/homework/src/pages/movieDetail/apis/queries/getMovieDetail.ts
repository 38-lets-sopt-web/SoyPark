import { api } from "@apis/https";
import { useQuery } from "@tanstack/react-query";
import type { MovieDetailResponse } from "../../types/detail";
import { API_ENDPOINT } from "@constants/apiEndpoints";
import { QUERY_KEY } from "@constants/queryKeys";

export const getMovieDetail = (id: number) => {
  return api.get<MovieDetailResponse>(API_ENDPOINT.DETAIL(id), {
    language: "ko-KR",
  });
};

export const useMovieDetailQuery = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEY.MOVIE_DETAIL(id),
    queryFn: () => getMovieDetail(id),
    enabled: Number.isFinite(id),
  });
};
