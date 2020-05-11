import React, { useState, useEffect } from "react";
import DetailModal from "./DetailModal";
import { movieApi, tvApi } from "../../lib/api/home";

const DetailContainer = ({ id, isMovie, onClose, isPlay }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isMovie) {
          const { data } = await movieApi.movieDetail(id);
          setResult(data);
        } else {
          const { data } = await tvApi.tvDetail(id);
          setResult(data);
        }
      } catch (e) {
        setError(e);
        setResult(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, isMovie]);

  return (
    <DetailModal
      id={id}
      onClose={onClose}
      result={result}
      isMovie={isMovie}
      loading={loading}
      error={error}
      isPlay={isPlay}
    />
  );
};

export default DetailContainer;
