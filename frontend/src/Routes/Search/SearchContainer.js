import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { multiApi } from "../../lib/api/home";
import { withRouter } from "react-router-dom";

const SearchContainer = ({ location: { pathname } }) => {
  let splitedSearchText = pathname.split("/")[2];

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (splitedSearchText.length === 0) return;
        setLoading(true);
        const {
          data: { results: multiResults },
        } = await multiApi.search(splitedSearchText);

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
  }, [splitedSearchText]);

  return <SearchPresenter results={results} loading={loading} error={error} />;
};

export default withRouter(SearchContainer);
