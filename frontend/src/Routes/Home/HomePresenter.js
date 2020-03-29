import React from 'react';
import Header from '../../Components/Header';
import styled from 'styled-components';

const HomeBlock = styled.div``;

const HomeHeader = styled.div`
  background: green;
  height: 45rem;
  /* random movie and tv [latest] */
`;

const Test = styled.div`
  color: white;
  font-size: 10rem;
`;

const HomePresenter = () => {
  return (
    <HomeBlock>
      <HomeHeader />
      <Header />
      <Test>홈화면 테스트</Test>
    </HomeBlock>
  );
};

export default HomePresenter;
