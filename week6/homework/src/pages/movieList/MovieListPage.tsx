import { getImageUrl } from "@utils/getTmdbImageUrl";
import { useMovieListQuery } from "./apis/getMovieList";
import ListCard from "./components/card/ListCard";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@constants/path";
import RatingFilter from "./components/ratingFilter/RatingFilter";
import { useState } from "react";

const MovieListPage = () => {
  const [selectedRating, setSelectedRating] = useState("all");
  const navigate = useNavigate();
  const {
    data: movieList,
    isPending,
    isError,
  } = useMovieListQuery(selectedRating);

  if (isPending) return <div>로딩중</div>;
  if (isError) return <div>에러 발생</div>;

  const handleRatingChange = (value: string) => {
    setSelectedRating(value);
  };

  const handleCardClick = (movieId: number) => {
    navigate(ROUTE_PATH.movieDetail(movieId));
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-5 px-6 py-10 sm:px-10 lg:px-12">
      <h1 className="text-3xl font-bold">Movie Explorer</h1>
      <section>
        <RatingFilter value={selectedRating} onChange={handleRatingChange} />
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,260px))] gap-6">
        {movieList?.results.map((movie) => (
          <ListCard
            key={movie.id}
            title={movie.title}
            description={movie.overview}
            imageUrl={getImageUrl(movie.poster_path)}
            releaseDate={movie.release_date}
            onClick={() => handleCardClick(movie.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default MovieListPage;
