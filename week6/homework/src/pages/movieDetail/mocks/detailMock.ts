import { BASIC_INFO_LABEL, DETAIL_STAT_LABEL } from "../constants/labels";

export const mockMovieDetail = {
  title: "슈퍼 마리오 갤럭시",
  originalTitle: "The Super Mario Galaxy Movie",
  releaseDate: "2026.04.01",
  overview:
    "브루클린의 배관공에서 세계를 구한 히어로로 레벨업한 형제 '마리오'와 '루이지'는 모래 왕국에서 임무를 수행하던 중, 길을 잃은 '요시'를 구출하며 특별한 우정을 쌓게 된다. 한편, 무너진 '쿠파' 가문의 명예를 되찾기 위해 악의 왕자 '쿠파주니어'는 은하계의 수호자이자 치코들의 엄마 '로젤리나'를 납치하고, 버섯 왕국에 갇힌 아빠 '쿠파'를 되찾기 위해 행왕국을 습격한다. 다시 찾아온 위기 속에서 마리오와 루이지, 피치, 키노피오 그리고 새로 합류한 요시까지 로젤리나도 구하고, 쿠파주니어의 비밀한 계획을 막기 위해 넓은 갤럭시로 뛰어들게 되는데...",
  genres: ["가족", "코미디", "모험", "판타지", "애니메이션"],
  posterUrl: "https://image.tmdb.org/t/p/w500/8g7H1GQjWJY9mG9mM7i3GvJgP6x.jpg",
  backdropUrl:
    "https://image.tmdb.org/t/p/w1280/u53UYu5XG2hNgWGvs3xGhAVzypl.jpg",
  voteAverage: 7.6,
  voteCount: "1,378",
  runtime: "1시간 39분",
  status: "Released",
  originalLanguage: "en",
  countries: "Japan, United States of America",
  spokenLanguages: "English",
  budget: "US$110,000,000",
  revenue: "US$967,144,200",
};

export const detailStats = [
  {
    label: DETAIL_STAT_LABEL.VOTE_AVERAGE,
    value: `${mockMovieDetail.voteAverage} / 10`,
  },
  { label: DETAIL_STAT_LABEL.VOTE_COUNT, value: mockMovieDetail.voteCount },
  { label: DETAIL_STAT_LABEL.RUNTIME, value: mockMovieDetail.runtime },
  { label: DETAIL_STAT_LABEL.STATUS, value: mockMovieDetail.status },
];

export const basicInfo = [
  {
    label: BASIC_INFO_LABEL.ORIGINAL_TITLE,
    value: mockMovieDetail.originalTitle,
  },
  {
    label: BASIC_INFO_LABEL.ORIGINAL_LANGUAGE,
    value: mockMovieDetail.originalLanguage,
  },
  {
    label: BASIC_INFO_LABEL.PRODUCTION_COUNTRY,
    value: mockMovieDetail.countries,
  },
  {
    label: BASIC_INFO_LABEL.SPOKEN_LANGUAGE,
    value: mockMovieDetail.spokenLanguages,
  },
  { label: BASIC_INFO_LABEL.BUDGET, value: mockMovieDetail.budget },
  { label: BASIC_INFO_LABEL.REVENUE, value: mockMovieDetail.revenue },
];
