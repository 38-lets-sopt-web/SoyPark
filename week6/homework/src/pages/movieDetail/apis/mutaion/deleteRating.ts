import { api } from "@apis/https";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "@constants/apiEndpoints";

import type {
  DeleteMovieRatingParams,
  MovieRatingResponse,
} from "@pages/movieDetail/types/rating";

export const deleteMovieRating = ({
  movie_id,
  guest_session_id,
}: DeleteMovieRatingParams) => {
  return api.delete<MovieRatingResponse>(
    API_ENDPOINT.RATE_DELETE(movie_id),
    undefined,
    {
      guest_session_id: guest_session_id,
    },
  );
};

export const useMovieRatingDeleteMutation = () => {
  return useMutation({
    mutationFn: deleteMovieRating,
  });
};
