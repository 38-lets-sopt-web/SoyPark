import { createBrowserRouter } from "react-router";

import { ROUTES } from "@constants/path";

const router = createBrowserRouter([
  {
    path: ROUTES.MOVIE_LIST,
    children: [
      {
        path: ROUTES.MOVIE_LIST,
        lazy: async () => {
          const { default: MovieListPage } =
            await import("@pages/movieList/MovieListPage");
          return { Component: MovieListPage };
        },
      },
      {
        path: ROUTES.MOVIE_DETAIL,
        lazy: async () => {
          const { default: MovieDetailPage } =
            await import("@pages/movieDetail/MovieDetailPage");
          return { Component: MovieDetailPage };
        },
      },
    ],
  },
]);

export default router;
