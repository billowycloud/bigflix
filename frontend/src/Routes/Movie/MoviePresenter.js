import React from "react";
import styled from "styled-components";
import GenreHeader from "../../Components/GenreHeader";
import { useScroll } from "../../lib/hooks/useScroll";

const Block = styled.div`
  margin-top: 5rem;
  height: 100vh;
`;
const Test = styled.div`
  color: white;
  font-size: 10rem;
`;
const MoviePresenter = () => {
  const { y } = useScroll();
  return (
    <Block>
      <GenreHeader scrollY={y} path="/browse/movie" />
      <Test>MOVIE 테스트</Test>
    </Block>
  );
};

export default MoviePresenter;
