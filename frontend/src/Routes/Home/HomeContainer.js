import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { homeApi } from "../../lib/api/home";

const HomeContainer = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: popularMovie }
        } = await homeApi.popularMovie();
        const {
          data: { results: popularTV }
        } = await homeApi.popularTV();
        const {
          data: { results: latestMovie }
        } = await homeApi.latestMovie();
        const {
          data: { results: topRatedMovie }
        } = await homeApi.topRatedMovie();
        const {
          data: { results: topRatedTV }
        } = await homeApi.topRatedTV();
        const {
          data: { results: airingTodayTV }
        } = await homeApi.airingTodayTV();
        setResult({
          popularMovie,
          popularTV,
          latestMovie,
          topRatedMovie,
          topRatedTV,
          airingTodayTV
        });
      } catch (e) {
        setError(e + "영화 정보를 찾을 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return <HomePresenter result={result} error={error} loading={loading} />;
};

export default HomeContainer;
