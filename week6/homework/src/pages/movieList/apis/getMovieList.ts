import { api } from "@apis/https";
import { useQuery } from "@tanstack/react-query";
import type { MovieListResponse } from "../types/list";
import { API_ENDPOINT } from "@constants/apiEndpoints";
import { QUERY_KEY } from "@constants/queryKeys";
import type { RatingFilterValue } from "../components/ratingFilter/RatingFilter";

export const getMovieList = (rating: RatingFilterValue) => {
  const params =
    rating === "all"
      ? { language: "ko-KR" }
      : {
          language: "ko-KR",
          "vote_average.gte": Number(rating),
          "vote_average.lte": Number(rating) === 10 ? 10 : Number(rating) + 0.9,
        };
  return api.get<MovieListResponse>(API_ENDPOINT.LIST, params);
};

export const useMovieListQuery = (rating: RatingFilterValue) => {
  return useQuery({
    queryKey: [...QUERY_KEY.MOVIE_LIST, rating],
    queryFn: () => getMovieList(rating),
  });
};
