import React from 'react';
import Header from '../../Components/Header';
import styled from 'styled-components';

const Test = styled.div`
  color: white;
  font-size: 10rem;
`;

const HomePresenter = () => {
  return (
    <>
      <Header />
      <Test>홈화면 테스트</Test>
    </>
  );
};

export default HomePresenter;
