import { api } from "@apis/https";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { MovieListResponse } from "../types/list";
import { API_ENDPOINT } from "@constants/apiEndpoints";
import { QUERY_KEY } from "@constants/queryKeys";
import type { RatingFilterValue } from "../components/ratingFilter/RatingFilter";

export const getMovieList = (page: number, rating: RatingFilterValue) => {
  const params =
    rating === "all"
      ? { page }
      : {
          "vote_average.gte": Number(rating),
          "vote_average.lte": Number(rating) === 10 ? 10 : Number(rating) + 0.9,
          page,
        };
  return api.get<MovieListResponse>(API_ENDPOINT.LIST, params);
};

export const useMovieListQuery = (rating: RatingFilterValue) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEY.MOVIE_LIST, rating],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getMovieList(pageParam, rating),
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });
};
