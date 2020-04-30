import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GenreHeader from "../../Components/GenreHeader";
import Loader from "../../Components/Loader";
import Section from "../../Components/Contents/Section";
import Poster from "../../Components/Contents/Poster";
import { withRouter } from "react-router-dom";
import GridTemplate from "../../Components/GridTemplate";
import TopSection from "../../Components/Contents/TopSection";

const Block = styled.div`
  position: relative;
  top: -2.8rem;
`;

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const MoviePresenter = ({ result, loading, error, location: { pathname } }) => {
  const [headerImg, setHeaderImg] = useState(); //대표 이미지
  useEffect(() => {
    setHeaderImg(Math.floor(Math.random() * 10)); // movieTrendingDay 10개 랜덤 출력
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <GenreHeader path="/browse/movie" />
      {isNaN(pathname.split("/")[3]) ? (
        <>
          {result && result.movieTrendingWeek && result.movieTrendingWeek.length > 0 && (
            <TopSection
              result={
                result.movieTrendingWeek[headerImg].backdrop_path === null ||
                result.movieTrendingWeek[headerImg].overview === ""
                  ? result.movieTrendingWeek[0]
                  : result.movieTrendingWeek[headerImg]
              }
              isMovie={true}
            />
          )}
          <Block>
            {result && result.movieTrendingDay && result.movieTrendingDay.length > 0 && (
              <Section title="오늘 하루 인기 영화">
                {result.movieTrendingDay.map((content) => (
                  <Poster
                    key={content.id}
                    id={content.id}
                    title={content.title}
                    imgUrl={content.poster_path}
                    rating={content.vote_average}
                    year={content.release_date && content.release_date.substring(0, 4)}
                    isGrid={false}
                    isMovie={true}
                  />
                ))}
              </Section>
            )}
            {result && result.movieTrendingWeek && result.movieTrendingWeek.length > 0 && (
              <Section title="주간 인기 영화">
                {result.movieTrendingWeek.map((content) => (
                  <Poster
                    key={content.id}
                    id={content.id}
                    title={content.title}
                    imgUrl={content.poster_path}
                    rating={content.vote_average}
                    year={content.release_date && content.release_date.substring(0, 4)}
                    isGrid={false}
                    isMovie={true}
                  />
                ))}
              </Section>
            )}
          </Block>
        </>
      ) : (
        <Wrapper>
          <GridTemplate>
            {result &&
              result.movieDiscover &&
              result.movieDiscover.length > 0 &&
              result.movieDiscover.map((content) => (
                <Poster
                  key={content.id}
                  id={content.id}
                  title={content.title}
                  imgUrl={content.poster_path}
                  rating={content.vote_average}
                  year={content.release_date && content.release_date.substring(0, 4)}
                  isGrid={true}
                  isMovie={true}
                />
              ))}
          </GridTemplate>
        </Wrapper>
      )}
    </>
  );
};

export default withRouter(MoviePresenter);
