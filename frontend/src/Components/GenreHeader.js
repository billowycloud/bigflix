import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useScroll } from '../lib/hooks/useScroll';

const Block = styled.div`
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 4rem;
  background: blue;
  display: flex;
  align-items: center;
  padding-left: 5rem;
`;

const PageName = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const Genre = styled.div``;

const GenreHeader = ({ location: { pathname }, scrollY }) => {
  const { y } = useScroll();
  return (
    <Block
      style={{
        background: y === 0 && 'transparent',
      }}
    >
      <PageName>
        {(pathname === '/browse/tv' && 'TV 프로그램') ||
          (pathname === '/browse/movie' && '영화')}
      </PageName>
      <Genre>장르</Genre>
    </Block>
  );
};

export default withRouter(GenreHeader);
