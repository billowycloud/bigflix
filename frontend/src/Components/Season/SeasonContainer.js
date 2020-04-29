import React, { useState, useEffect } from "react";
import { tvApi } from "../../lib/api/home";
import SeasonSection from "./SeasonSection";

const SeasonContainer = ({ id, seasonNumber }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { episodes: tvSeasons },
        } = await tvApi.tvSeasons(id, seasonNumber);
        setResult(tvSeasons);
      } catch (e) {
        setError(e + "영화 정보를 찾을 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, seasonNumber]);
  return loading ? <></> : <SeasonSection result={result} error={error} />;
};

export default SeasonContainer;
