import { Kor } from './language';

export const homeApi = {
  popularMovie: () => Kor.get('movie/popular'),
  popularTV: () => Kor.get('tv/popular'),
  latestMovie: () => Kor.get('/movie/latest'),
  topRatedMovie: () => Kor.get('/movie/top_rated'),
  topRatedTV: () => Kor.get('/tv/top_rated'),
  airingTodayTV: () => Kor.get('/tv/airing_today')
};
