import React, { useState, useEffect, useContext } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../lib/api/home";
import FlixContext from "../../lib/contexts/FlixContext";

const TVContainer = () => {
  const { state } = useContext(FlixContext);
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
        } = await tvApi.tvDiscover(state.selectedGenre, 1);

        setResult({ tvSimilar, tvTrendingDay, tvTrendingWeek, tvDiscover });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [state.selectedGenre]);
  return <TVPresenter result={result} loading={loading} error={error} />;
};

export default TVContainer;
