import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';

const Block = styled.div`
  margin-top: 5rem;
`;
const Test = styled.div`
  color: white;
  font-size: 10rem;
`;
const MoviePresenter = () => {
  return (
    <Block>
      <Header />
      <Test>영화화면 테스트</Test>
    </Block>
  );
};

export default MoviePresenter;
