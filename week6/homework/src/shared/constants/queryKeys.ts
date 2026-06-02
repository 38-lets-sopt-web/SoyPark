export const QUERY_KEY = {
  MOVIE_LIST: ["movieList"] as const,
  MOVIE_DETAIL: (movieId: number) => ["movieDetail", movieId] as const,
  GUEST_SESSION: ["guestSession"] as const,
  RATED_MOVIES: (guestSessionId: string) =>
    ["ratedMovies", guestSessionId] as const,
} as const;
