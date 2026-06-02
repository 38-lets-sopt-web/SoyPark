export const ROUTES = {
  MOVIE_LIST: "/",
  MOVIE_DETAIL: "/movie/:id",
} as const;

export const ROUTE_PATH = {
  movieDetail: (id: number) => `/movie/${id}`,
} as const;
