import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { movieApi, tvApi } from '../../lib/api/home';

const HomeContainer = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: popularMovie }
        } = await movieApi.popularMovie();
        const {
          data: { results: popularTV }
        } = await tvApi.popularTV();
        const {
          data: { results: latestMovie }
        } = await movieApi.latestMovie();
        const {
          data: { results: topRatedMovie }
        } = await movieApi.topRatedMovie();
        const {
          data: { results: topRatedTV }
        } = await tvApi.topRatedTV();
        const {
          data: { results: airingTodayTV }
        } = await tvApi.airingTodayTV();

        setResult({
          popularMovie,
          popularTV,
          latestMovie,
          topRatedMovie,
          topRatedTV,
          airingTodayTV
        });
      } catch (e) {
        setError(e + '영화 정보를 찾을 수 없습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return <HomePresenter result={result} error={error} loading={loading} />;
};

export default HomeContainer;
