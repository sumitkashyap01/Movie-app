export const getTrending = () => "trending/movie/week";

export const getDailyTrending = () => "trending/movie/day";

export const getPopular = () => "movie/popular";

export const getTopRated = () => "movie/top_rated";

export const getUpcoming = () => "movie/upcoming";

export const getImages = (id) => `movie/${id}/images`;

export const searchMovies = (query, page) =>
  `/search/movie?query=${query}&page=${page}`;

export const getMovieDetails = (id) => `movie/${id}`;

export const getCast = (id) => `movie/${id}/credits`;

export const getRecommendations = (id) => `movie/${id}/recommendations`;
