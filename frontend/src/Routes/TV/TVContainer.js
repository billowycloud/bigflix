import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../lib/api/home";

const TVContainer = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let id = 76341;
      try {
        const {
          data: { results: tvSimilar },
        } = await tvApi.tvSimilar(id);
        const {
          data: { results: tvTrendingDay },
        } = await tvApi.tvTrendingDay();
        const {
          data: { results: tvTrendingWeek },
        } = await tvApi.tvTrendingWeek();
        const {
          data: { results: tvDiscover },
        } = await tvApi.tvDiscover(10759, 1);

        setResult({ tvSimilar, tvTrendingDay, tvTrendingWeek, tvDiscover });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return <TVPresenter result={result} loading={loading} error={error} />;
};

export default TVContainer;
