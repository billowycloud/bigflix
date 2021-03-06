import { Kor } from "./language";

export const movieApi = {
  popularMovie: () => Kor.get("movie/popular"),
  topRatedMovie: () => Kor.get("movie/top_rated"),
  movieDetail: (id) =>
    Kor.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  movieSimilar: (id) => Kor.get(`movie/${id}/similar`),
  movieTrendingDay: () => Kor.get("trending/movie/day"),
  movieTrendingWeek: () => Kor.get("trending/movie/week"),
  getGenre: () => Kor.get("genre/movie/list"),
  movieDiscover: (genre, page) =>
    Kor.get(`discover/movie`, {
      params: {
        with_genres: genre,
        page: page,
      },
    }),
};

export const tvApi = {
  popularTV: () => Kor.get("tv/popular"),
  topRatedTV: () => Kor.get("tv/top_rated"),
  airingTodayTV: () => Kor.get("tv/airing_today"),
  tvDetail: (id) =>
    Kor.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  tvSimilar: (id) => Kor.get(`tv/${id}/similar`),
  tvTrendingDay: () => Kor.get("trending/tv/day"),
  tvTrendingWeek: () => Kor.get("trending/tv/week"),
  getGenre: () => Kor.get("genre/tv/list"),
  tvDiscover: (genre, page) =>
    Kor.get(`discover/tv`, {
      params: {
        with_genres: genre,
        page: page,
      },
    }),
  tvSeasons: (id, season_number) => Kor.get(`tv/${id}/season/${season_number}`),
};

export const multiApi = {
  search: (term) =>
    Kor.get(`search/multi?${term}`, {
      params: {
        query: term,
      },
    }),
};
