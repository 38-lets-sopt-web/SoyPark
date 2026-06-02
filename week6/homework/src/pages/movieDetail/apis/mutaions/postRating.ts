import { api } from "@apis/https";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "@constants/apiEndpoints";

import type {
  MovieRatingResponse,
  PostMovieRatingParams,
} from "@pages/movieDetail/types/rating";

export const postMovieRating = ({
  movie_id,
  value,
  guest_session_id,
}: PostMovieRatingParams) => {
  return api.post<MovieRatingResponse, { value: number }>(
    API_ENDPOINT.RATE(movie_id),
    { value },
    {
      guest_session_id: guest_session_id,
    },
  );
};

export const useMovieRatingMutation = () => {
  return useMutation({
    mutationFn: postMovieRating,
  });
};
