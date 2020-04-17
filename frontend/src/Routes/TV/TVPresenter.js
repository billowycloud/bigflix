import React from "react";
import styled from "styled-components";
import GenreHeader from "../../Components/GenreHeader";
import { useScroll } from "../../lib/hooks/useScroll";
import Loader from "../../Components/Loader";
import Section from "../../Components/Contents/Section";
import Poster from "../../Components/Contents/Poster";

const Block = styled.div`
  margin-top: 2rem;
`;

const TVHeader = styled.div`
  margin-top: 5rem;
  background: url("https://image.tmdb.org/t/p/original/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg");
  background-position: center center;
  background-size: cover;
  height: 45rem;
`;

const TVPresenter = ({ result, loading, error }) => {
  const { y } = useScroll();
  return loading ? (
    <Loader />
  ) : (
    <>
      <GenreHeader scrollY={y} path="/browse/tv" />
      <TVHeader />
      <Block>
        {result && result.tvTrendingDay && result.tvTrendingDay.length > 0 && (
          <Section title="오늘 하루 인기 TV채널">
            {result.tvTrendingDay.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={
                  content.first_air_date &&
                  content.first_air_date.substring(0, 4)
                }
                isGrid={false}
              />
            ))}
          </Section>
        )}
        {result && result.tvTrendingWeek && result.tvTrendingWeek.length > 0 && (
          <Section title="주간 인기 TV채널">
            {result.tvTrendingWeek.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={
                  content.first_air_date &&
                  content.first_air_date.substring(0, 4)
                }
                isGrid={false}
              />
            ))}
          </Section>
        )}
      </Block>
    </>
  );
};

export default TVPresenter;
