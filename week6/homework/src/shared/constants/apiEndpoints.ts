export const API_ENDPOINT = {
  LIST: "/discover/movie",
  DETAIL: (movieId: number) => `/movie/${movieId}`,
  GUEST_ID: "/authentication/guest_session/new",
  RATE: (movieId: number) => `/movie/${movieId}/rating`,
  RATE_LIST: (guestSessionId: string) =>
    `/guest_session/${guestSessionId}/rated/movies`,
  RATE_DELETE: (movieId: number) => `/movie/${movieId}/rating`,
} as const;

// 헬퍼 타입: 중첩된 객체의 모든 리프(leaf) 값들을 추출
export type DeepValues<T> = T extends object
  ? { [K in keyof T]: DeepValues<T[K]> }[keyof T]
  : T;

// 자동으로 모든 엔드포인트 문자열 추출
export type ApiEndpoint = DeepValues<typeof API_ENDPOINT>;
