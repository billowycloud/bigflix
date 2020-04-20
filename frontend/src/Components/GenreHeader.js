import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { movieApi, tvApi } from "../lib/api/home";

const fadeIn = keyframes`
 from{
   opacity: 0;
 }
 to{
  opacity: 1;
 }
`;

const Block = styled.div`
  z-index: 9;
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

const PageBack = styled.h1`
  font-size: 1.3rem;
  color: #7f7f7e;
  cursor: pointer;
`;

const GenreBox = styled.div`
  margin-left: 2rem;
  position: relative;
`;
const Wrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(12, 12, 12, 0.9);
  top: 37px;
  left: 0;
  position: absolute;
  width: 32rem;
  display: none;

  padding: 0.5rem;
  ${(props) =>
    props.isOpen &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 1.5rem;
      animation: ${fadeIn} 0.5s ease-in-out;
    `}
`;
const GenreItem = styled.div`
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: black;
  border: 1px solid white;
  padding: 10px;
  ${(props) =>
    props.isOpen &&
    css`
      background: rgba(0, 0, 0, 0.2);
    `}
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
const Text = styled.div``;

const GenreText = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;
const DownArrow = styled.div`
  margin-left: 1rem;
  width: 0px;
  height: 0px;
  border-top: 7px solid white;
  border-bottom: 7px solid none;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
`;
const useFetch = () => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { genres: getGenreMovie },
        } = await movieApi.getGenre();
        const {
          data: { genres: getGenreTV },
        } = await tvApi.getGenre();
        setResult({
          getGenreMovie,
          getGenreTV,
        });
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  }, []);

  return { result, error };
};

const GenreHeader = ({ history, location: { pathname }, scrollY }) => {
  const { result } = useFetch();
  const [isOpen, setIsOpen] = useState(false);
  const [genre, setGenre] = useState(); // 장르 텍스트 설정

  return (
    <Block scrollY={scrollY}>
      {isNaN(pathname.split("/")[3]) ? (
        <PageName>
          {(pathname.includes("/browse/tv") && "TV 프로그램") ||
            (pathname.includes("/browse/movie") && "영화")}
        </PageName>
      ) : (
        <PageBack
          onClick={() => {
            history.goBack();
          }}
        >
          {(pathname.includes("/browse/tv") && "TV 프로그램 ＞") ||
            (pathname.includes("/browse/movie") && "영화 ＞")}
        </PageBack>
      )}
      <GenreBox>
        {isNaN(pathname.split("/")[3]) ? (
          <>
            <Button
              isOpen={isOpen}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Text>장르</Text>
              <DownArrow />
            </Button>
            <Wrapper isOpen={isOpen}>
              {(pathname.includes("/browse/tv") &&
                result &&
                result.getGenreTV &&
                result.getGenreTV.map((content) => (
                  <GenreItem key={content.id}>
                    <Link
                      to={`/browse/tv/${content.id}`}
                      onClick={() => {
                        setGenre(content.name);
                      }}
                    >
                      {content.name}
                    </Link>
                  </GenreItem>
                ))) ||
                (pathname.includes("/browse/movie") &&
                  result &&
                  result.getGenreMovie &&
                  result.getGenreMovie.map((content) => (
                    <GenreItem key={content.id}>
                      <Link
                        to={`/browse/movie/${content.id}`}
                        onClick={() => {
                          setGenre(content.name);
                        }}
                      >
                        {content.name}
                      </Link>
                    </GenreItem>
                  )))}
            </Wrapper>
          </>
        ) : (
          <GenreText>{genre}</GenreText>
        )}
      </GenreBox>
    </Block>
  );
};

export default withRouter(GenreHeader);
