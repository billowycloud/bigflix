import React from "react";
import styled from "styled-components";
import GenreHeader from "../../Components/GenreHeader";
import { useScroll } from "../../lib/hooks/useScroll";
import Loader from "../../Components/Loader";
import Section from "../../Components/Contents/Section";
import Poster from "../../Components/Contents/Poster";
import { withRouter } from "react-router-dom";
import GridTemplate from "../../Components/GridTemplate";

const Block = styled.div`
  margin-top: 2rem;
`;

const MovieHeader = styled.div`
  margin-top: 5rem;
  background: url("https://image.tmdb.org/t/p/original/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg");
  background-position: center center;
  background-size: cover;
  height: 45rem;
`;

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const MoviePresenter = ({ result, loading, error, location: { pathname } }) => {
  const { y } = useScroll();
  return loading ? (
    <Loader />
  ) : (
    <>
      <GenreHeader scrollY={y} path="/browse/movie" />
      {isNaN(pathname.split("/")[3]) ? (
        <>
          <MovieHeader />
          <Block>
            {result &&
              result.movieTrendingDay &&
              result.movieTrendingDay.length > 0 && (
                <Section title="오늘 하루 인기 영화">
                  {result.movieTrendingDay.map((content) => (
                    <Poster
                      key={content.id}
                      id={content.id}
                      title={content.title}
                      imgUrl={content.poster_path}
                      rating={content.vote_average}
                      year={
                        content.release_date &&
                        content.release_date.substring(0, 4)
                      }
                      isGrid={false}
                    />
                  ))}
                </Section>
              )}
            {result &&
              result.movieTrendingWeek &&
              result.movieTrendingWeek.length > 0 && (
                <Section title="주간 인기 영화">
                  {result.movieTrendingWeek.map((content) => (
                    <Poster
                      key={content.id}
                      id={content.id}
                      title={content.title}
                      imgUrl={content.poster_path}
                      rating={content.vote_average}
                      year={
                        content.release_date &&
                        content.release_date.substring(0, 4)
                      }
                      isGrid={false}
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
                  year={
                    content.release_date && content.release_date.substring(0, 4)
                  }
                  isGrid={true}
                />
              ))}
          </GridTemplate>
        </Wrapper>
      )}
    </>
  );
};

export default withRouter(MoviePresenter);
