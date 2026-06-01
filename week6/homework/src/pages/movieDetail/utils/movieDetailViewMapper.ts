import { BASIC_INFO_LABEL, DETAIL_STAT_LABEL } from "../constants/labels";
import type { MovieDetailResponse } from "../types/detail";

// 응답을 각 라벨에 맞게 가공
export const getMovieDetailViewData = (movieDetail: MovieDetailResponse) => {
  const detailStats = [
    {
      label: DETAIL_STAT_LABEL.VOTE_AVERAGE,
      value: `${movieDetail.vote_average.toFixed(1)} / 10`,
    },
    {
      label: DETAIL_STAT_LABEL.VOTE_COUNT,
      value: movieDetail.vote_count.toLocaleString("ko-KR"),
    },
    {
      label: DETAIL_STAT_LABEL.RUNTIME,
      value: `${Math.floor(movieDetail.runtime / 60)}시간 ${movieDetail.runtime % 60}분`,
    },
    {
      label: DETAIL_STAT_LABEL.STATUS,
      value: movieDetail.status,
    },
  ];

  const basicInfo = [
    {
      label: BASIC_INFO_LABEL.ORIGINAL_TITLE,
      value: movieDetail.original_title,
    },
    {
      label: BASIC_INFO_LABEL.ORIGINAL_LANGUAGE,
      value: movieDetail.original_language,
    },
    {
      label: BASIC_INFO_LABEL.PRODUCTION_COUNTRY,
      value:
        movieDetail.production_countries
          .map((country) => country.name)
          .join(", ") || "-",
    },
    {
      label: BASIC_INFO_LABEL.SPOKEN_LANGUAGE,
      value:
        movieDetail.spoken_languages
          .map((language) => language.english_name)
          .join(", ") || "-",
    },
    {
      label: BASIC_INFO_LABEL.BUDGET,
      value: `US$${movieDetail.budget.toLocaleString("en-US")}`,
    },
    {
      label: BASIC_INFO_LABEL.REVENUE,
      value: `US$${movieDetail.revenue.toLocaleString("en-US")}`,
    },
  ];

  return {
    detailStats,
    basicInfo,
  };
};
