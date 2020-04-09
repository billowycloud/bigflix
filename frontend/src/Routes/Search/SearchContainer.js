import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { multiApi } from "../../lib/api/home";
import { withRouter } from "react-router-dom";

const SearchContainer = ({ location: { pathname } }) => {
  let splitedText = pathname.split("/")[2];
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (splitedText.length === 0) return;
        setLoading(true);
        const {
          data: { results: multiResults },
        } = await multiApi.search(splitedText);

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
  }, [splitedText]);

  return (
    <SearchPresenter
      results={results}
      loading={loading}
      error={error}
      splitedText={splitedText}
    />
  );
};

export default withRouter(SearchContainer);
