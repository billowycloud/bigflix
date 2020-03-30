import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Block = styled.div``;

const Header = styled.div`
  background: green;
  height: 45rem;
  /* random movie and tv [latest] */
`;

const Test = styled.div`
  color: white;
  font-size: 10rem;
`;

const HomePresenter = ({ result, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Block>
      <Header />
      {console.log(result.popularMovie)}
      {result && result.popularMovie && result.popularMovie.length > 0 && (
        <Test>{result.popularMovie.map(content => content.title)}</Test>
      )}
    </Block>
  );
};

export default HomePresenter;
