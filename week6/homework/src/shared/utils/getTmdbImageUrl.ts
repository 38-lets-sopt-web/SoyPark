export const getImageUrl = (path: string | null, size = 400) => {
  if (!path) return null;

  return `https://image.tmdb.org/t/p/w${size}${path}`;
};
