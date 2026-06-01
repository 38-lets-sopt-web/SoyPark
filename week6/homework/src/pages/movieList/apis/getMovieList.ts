import { api } from "@apis/https";
import { useQuery } from "@tanstack/react-query";
import type { MovieListResponse } from "../types/list";
import { API_ENDPOINT } from "@constants/apiEndpoints";
import { QUERY_KEY } from "@constants/queryKeys";

export const getMovieList = () => {
  return api.get<MovieListResponse>(API_ENDPOINT.LIST, {
    language: "ko-KR",
  });
};

export const useMovieListQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.MOVIE_LIST,
    queryFn: () => getMovieList(),
  });
};
