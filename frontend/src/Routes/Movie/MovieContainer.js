import React, { useState, useEffect } from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "../../lib/api/home";

const MovieContainer = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let id = 76341;
      try {
        const {
          data: { results: movieSimilar },
        } = await movieApi.movieSimilar(id);
        const {
          data: { results: movieTrendingDay },
        } = await movieApi.movieTrendingDay();
        const {
          data: { results: movieTrendingWeek },
        } = await movieApi.movieTrendingWeek();

        setResult({ movieSimilar, movieTrendingDay, movieTrendingWeek });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return <MoviePresenter result={result} loading={loading} error={error} />;
};

export default MovieContainer;
