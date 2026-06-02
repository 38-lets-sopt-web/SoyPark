import type { MovieListItem } from "@pages/movieList/types/list";

// 별점 가져오기
export interface RatedMovieItem extends MovieListItem {
  rating: number;
}

export interface RatedMovieListResponse {
  page: number;
  results: RatedMovieItem[];
  total_pages: number;
  total_results: number;
}

// 별점 등록/삭제 응답
export interface MovieRatingResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

export interface PostMovieRatingParams {
  movie_id: number;
  value: number;
  guest_session_id: string;
}

export interface DeleteMovieRatingParams {
  movie_id: number;
  guest_session_id: string;
}
