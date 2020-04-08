import React from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";

const Block = styled.div`
  position: fixed;
  ${(props) =>
    props.scrollY === 0
      ? css`
          top: 5rem;
          background: transparent;
          transition: background 0.5s ease-in-out;
        `
      : css`
          top: 0;
          background: rgb(20, 20, 20);
        `}

  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding-left: 5rem;
`;

const PageName = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const GenreBox = styled.div`
  margin-left: 2rem;
`;

const GenreHeader = ({ location: { pathname }, scrollY }) => {
  return (
    <Block scrollY={scrollY}>
      <PageName>
        {(pathname === "/browse/tv" && "TV 프로그램") ||
          (pathname === "/browse/movie" && "영화")}
      </PageName>
      <GenreBox>장르</GenreBox>
    </Block>
  );
};

export default withRouter(GenreHeader);
