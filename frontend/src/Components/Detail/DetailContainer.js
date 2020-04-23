import React, { useState, useEffect } from "react";
import DetailModal from "./DetailModal";
import { movieApi, tvApi } from "../../lib/api/home";

const DetailContainer = ({ id, isMovie, onClose }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let result = null;
      try {
        if (isMovie) {
          ({ data: result } = await movieApi.movieDetail(id));
        } else {
          ({ data: result } = await tvApi.tvDetail(id));
        }
        setResult({ result });
      } catch (e) {
        setError(e);
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
      loading={loading}
      error={error}
    />
  );
};

export default DetailContainer;
