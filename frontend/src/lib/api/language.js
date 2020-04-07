import axios from "axios";

export const Kor = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
    language: "ko-KR",
  },
});

export const Eng = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
    language: "en-US",
  },
});
