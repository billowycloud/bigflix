import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Contents/Section";
import Poster from "../../Components/Contents/Poster";
import TopSection from "../../Components/Contents/TopSection";

const Block = styled.div`
  position: relative;
  top: -2.8rem;
`;

const HomePresenter = ({ result, loading, error }) => {
  const [headerImg, setHeaderImg] = useState(); //대표 이미지
  useEffect(() => {
    setHeaderImg(Math.floor(Math.random() * 10)); // popularMovie 10개 랜덤 출력
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      {result && result.popularMovie && result.popularMovie.length > 0 && (
        <TopSection
          result={
            result.popularMovie[headerImg] === null
              ? result.popularMovie[0]
              : result.popularMovie[headerImg]
          }
        />
      )}
      <Block>
        {result && result.popularMovie && result.popularMovie.length > 0 && (
          <Section title="현재 인기 영화">
            {result.popularMovie.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.title}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.release_date && content.release_date.substring(0, 4)}
                isGrid={false}
              />
            ))}
          </Section>
        )}
        {result && result.popularTV && result.popularTV.length > 0 && (
          <Section title="현재 인기 드라마">
            {result.popularTV.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                isGrid={false}
              />
            ))}
          </Section>
        )}
        {result && result.airingTodayTV && result.airingTodayTV.length > 0 && (
          <Section title="오늘 방영된 TV채널">
            {result.airingTodayTV.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                isGrid={false}
              />
            ))}
          </Section>
        )}
        {result && result.topRatedMovie && result.topRatedMovie.length > 0 && (
          <Section title="최고 평점 영화">
            {result.topRatedMovie.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.title}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.release_date && content.release_date.substring(0, 4)}
                isGrid={false}
              />
            ))}
          </Section>
        )}
        {result && result.topRatedTV && result.topRatedTV.length > 0 && (
          <Section title="최고 평점 TV채널">
            {result.topRatedTV.map((content) => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                isGrid={false}
              />
            ))}
          </Section>
        )}
      </Block>
    </>
  );
};

export default HomePresenter;
