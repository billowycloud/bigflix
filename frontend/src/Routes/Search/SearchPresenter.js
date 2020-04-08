import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
const Test = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  font-size: 10rem;
`;
const SearchPresenter = ({ results, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Test>{console.log(results.multiResults)}</Test>
  );
};

export default SearchPresenter;
