import { ROUTES } from "@constants/path";
import { getImageUrl } from "@utils/getTmdbImageUrl";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import BasicInfoSection from "./components/section/BasicInfoSection";
import DetailStatCard from "./components/card/DetailStatCard";
import RatingSection from "./components/section/RatingSection";
import { sectionTitleClassName } from "@pages/movieList/constants/commonStyles";
import { useMovieDetailQuery } from "./apis/queries/getMovieDetail";
import { getMovieDetailViewData } from "./utils/movieDetailViewMapper";
import { useMovieRatingQuery } from "./apis/queries/getRating";
import { useGuestSessionQuery } from "@apis/getAuth";

const MovieDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movieId = Number(id);

  const {
    data: movieDetail,
    isPending,
    isError,
  } = useMovieDetailQuery(movieId); // 영화 상세 정보 조회
  const { data: guestSessionId } = useGuestSessionQuery(); // 게스트 세션 조회
  const { data: ratedMovies } = useMovieRatingQuery(guestSessionId ?? ""); // 사용자의 평점 조회

  // 사용자가 이미 평점을 남긴 영화인지 확인하여 초기값으로 설정
  const initialRating = ratedMovies?.results.find(
    (movie) => movie.id === movieId,
  )?.rating;

  if (isPending) return <div>로딩중</div>;
  if (isError || !movieDetail) return <div>에러 발생</div>;
  const { detailStats, basicInfo } = getMovieDetailViewData(movieDetail);

  const handleGoBack = () => {
    navigate(ROUTES.MOVIE_LIST);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-4 px-6 py-10">
      <button
        type="button"
        aria-label="목록으로 돌아가기 버튼"
        className="inline-flex items-center gap-2 text-sm font-semibold text-text transition-colors hover:text-accent"
        onClick={handleGoBack}
      >
        <FaArrowLeft className="h-4 w-4" />
        <span>목록으로 돌아가기</span>
      </button>

      <section className="overflow-hidden rounded-(--radius-card) border border-border bg-white shadow-card">
        <div className="h-100 relative">
          <img
            alt={`${movieDetail.title} 배경 이미지`}
            className="h-full w-full object-cover"
            src={getImageUrl(movieDetail.backdrop_path, 1280) ?? undefined}
          />
          <div className="absolute inset-0 from-black/20 via-transparent to-transparent" />
        </div>

        <div className="grid gap-6 px-6 py-6 grid-cols-[260px_minmax(0,1fr)]">
          <div className="rounded-(--radius-card) border border-border">
            <img
              alt={`${movieDetail.title} 포스터`}
              className="rounded-(--radius-card) h-full w-full object-cover"
              src={getImageUrl(movieDetail.poster_path, 500) ?? undefined}
            />
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-text-muted">
                {movieDetail.release_date}
              </p>
              <h1 className="text-4xl font-extrabold">{movieDetail.title}</h1>
            </div>

            <div className="flex flex-wrap gap-2">
              {movieDetail.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full border border-border bg-surface-soft px-3 py-2 text-sm font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detailStats.map((item) => (
                <DetailStatCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-(--radius-card) border border-border bg-white px-6 py-6 shadow-card">
        <h2 className={sectionTitleClassName}>줄거리</h2>
        <p className="mt-3">{movieDetail.overview}</p>
      </section>

      <section className="grid gap-6 grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <BasicInfoSection items={basicInfo} />
        {guestSessionId ? (
          <RatingSection
            key={`${movieId}-${initialRating ?? "empty"}`}
            movieId={movieId}
            guestSessionId={guestSessionId}
            initialRating={initialRating}
          />
        ) : null}
      </section>
    </main>
  );
};

export default MovieDetailPage;
