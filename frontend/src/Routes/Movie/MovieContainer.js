import React, { useState, useEffect, useContext } from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "../../lib/api/home";
import FlixContext from "../../contexts/FlixContext";

const MovieContainer = () => {
  const { state } = useContext(FlixContext);
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
        const {
          data: { results: movieDiscover },
        } = await movieApi.movieDiscover(state.selectedGenre, 1);

        setResult({
          movieSimilar,
          movieTrendingDay,
          movieTrendingWeek,
          movieDiscover,
        });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [state.selectedGenre]);
  return <MoviePresenter result={result} loading={loading} error={error} />;
};

export default MovieContainer;
