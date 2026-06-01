import { ROUTES } from "@constants/path";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BasicInfoSection from "./components/section/BasicInfoSection";
import DetailStatCard from "./components/card/DetailStatCard";
import RatingSection from "./components/section/RatingSection";
import { mockMovieDetail, detailStats, basicInfo } from "./mocks/detailMock";
import { sectionTitleClassName } from "@pages/movieList/constants/commonStyles";

const MovieDetailPage = () => {
  const navigate = useNavigate();

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
        <div className="relative h-85 bg-background-muted">
          <img
            alt={`${mockMovieDetail.title} 배경 이미지`}
            className="h-full w-full object-cover"
            src={mockMovieDetail.backdropUrl}
          />
          <div className="absolute inset-0 from-black/20 via-transparent to-transparent" />
        </div>

        <div className="grid gap-6 px-6 py-6 grid-cols-[260px_minmax(0,1fr)]">
          <div className=" rounded-[1.25rem] border border-border">
            <img
              alt={`${mockMovieDetail.title} 포스터`}
              className="h-full w-full object-cover"
              src={mockMovieDetail.posterUrl}
            />
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-text-muted">
                {mockMovieDetail.releaseDate}
              </p>
              <h1 className="text-4xl font-extrabold">
                {mockMovieDetail.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-2">
              {mockMovieDetail.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-border bg-surface-soft px-3 py-2 text-sm font-medium"
                >
                  {genre}
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
        <p className="mt-3">{mockMovieDetail.overview}</p>
      </section>

      <section className="grid gap-6 grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <BasicInfoSection items={basicInfo} />
        <RatingSection />
      </section>
    </main>
  );
};

export default MovieDetailPage;
