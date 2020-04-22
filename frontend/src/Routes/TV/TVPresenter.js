import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GenreHeader from "../../Components/GenreHeader";
import { useScroll } from "../../lib/hooks/useScroll";
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

const TVPresenter = ({ result, loading, error, location: { pathname } }) => {
  const { y } = useScroll();
  const [headerImg, setHeaderImg] = useState(); //대표 이미지
  useEffect(() => {
    setHeaderImg(Math.floor(Math.random() * 10)); // tvTrendingDay 10개 랜덤 출력
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <GenreHeader scrollY={y} path="/browse/tv" />
      {isNaN(pathname.split("/")[3]) ? (
        <>
          {result && result.tvTrendingDay && result.tvTrendingDay.length > 0 && (
            <TopSection
              result={
                result.tvTrendingDay[headerImg] === null
                  ? result.tvTrendingDay[0]
                  : result.tvTrendingDay[headerImg]
              }
            />
          )}
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
                      content.first_air_date && content.first_air_date.substring(0, 4)
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
                      content.first_air_date && content.first_air_date.substring(0, 4)
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
              result.tvDiscover &&
              result.tvDiscover.length > 0 &&
              result.tvDiscover.map((content) => (
                <Poster
                  key={content.id}
                  id={content.id}
                  title={content.name}
                  imgUrl={content.poster_path}
                  rating={content.vote_average}
                  year={content.first_air_date && content.first_air_date.substring(0, 4)}
                  isGrid={true}
                />
              ))}
          </GridTemplate>
        </Wrapper>
      )}
    </>
  );
};

export default withRouter(TVPresenter);
