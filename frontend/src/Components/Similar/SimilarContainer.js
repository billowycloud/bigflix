import React, { useState, useEffect } from "react";
import SimilarPresenter from "./SimilarPresenter";
import { movieApi, tvApi } from "../../lib/api/home";

const SimilarContainer = ({ isMovie, id, title }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isMovie) {
          const {
            data: { results: movieSimilar },
          } = await movieApi.movieSimilar(id);
          setResult(movieSimilar);
        } else {
          const {
            data: { results: tvSimilar },
          } = await tvApi.tvSimilar(id);
          setResult(tvSimilar);
        }
      } catch (e) {
        setError(e + "영화 정보를 찾을 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, isMovie]);
  return (
    <SimilarPresenter
      result={result}
      loading={loading}
      error={error}
      isMovie={isMovie}
      title={title}
    />
  );
};

export default SimilarContainer;
