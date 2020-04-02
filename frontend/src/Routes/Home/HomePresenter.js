import React from 'react';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Contents/Section';
import Poster from '../../Components/Contents/Poster';

const Block = styled.div`
  padding: 40px;
  padding-top: 0;
`;

const Header = styled.div`
  background: green;
  height: 45rem;
  /* random movie and tv [latest] */
`;

const HomePresenter = ({ result, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Block>
        {result && result.popularMovie && result.popularMovie.length > 0 && (
          <Section title="현재 인기 영화">
            {result.popularMovie.map(content => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.title}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {result && result.popularTV && result.popularTV.length > 0 && (
          <Section title="현재 인기 드라마">
            {result.popularTV.map(content => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {result && result.latestMovie && result.latestMovie.length > 0 && (
          <Section title="최신 영화">
            {result.latestMovie.map(content => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.title}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {result && result.airingTodayTV && result.airingTodayTV.length > 0 && (
          <Section title="오늘 방영된 TV채널">
            {result.airingTodayTV.map(content => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {result && result.topRatedMovie && result.topRatedMovie.length > 0 && (
          <Section title="최고 평점 영화">
            {result.topRatedMovie.map(content => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.title}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {result && result.topRatedTV && result.topRatedTV.length > 0 && (
          <Section title="최고 평점 TV채널">
            {result.topRatedTV.map(content => (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
      </Block>
    </>
  );
};

export default HomePresenter;
