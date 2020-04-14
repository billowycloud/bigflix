import React, { useState, useEffect, useContext } from "react";
import SearchPresenter from "./SearchPresenter";
import { multiApi } from "../../lib/api/home";
import SearchContext from "../../contexts/search";

const SearchContainer = ({ history }) => {
  const { state } = useContext(SearchContext);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (state.searchValue.length === 0) {
          history.push(state.prevRoute); //Serach페이지에서 새로고침할 경우 홈 이동
          return;
        }
        setLoading(true);
        const {
          data: { results: multiResults },
        } = await multiApi.search(state.searchValue);

        setResults({
          multiResults,
        });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [state.searchValue, state.prevRoute, history]);

  return (
    <SearchPresenter
      results={results}
      loading={loading}
      error={error}
      searchValue={state.searchValue}
    />
  );
};

export default SearchContainer;
