import React from "react";
import styled from "styled-components";
import Poster from "../Contents/Poster";
import Section from "../Contents/Section";

const Block = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
`;
const Msg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
const SimilarPresenter = ({ result, loading, error, isMovie, title }) => {
  return loading ? (
    <></>
  ) : (
    <Block>
      {isMovie && result && result.length > 0 && (
        <Section title={`'${title}'(와)과 비슷한 콘텐츠`}>
          {result.map((content) => (
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
      {!isMovie && result && result.length > 0 && (
        <Section title={`'${title}'(와)과 비슷한 콘텐츠`}>
          {result.map((content) => (
            <Poster
              key={content.id}
              id={content.id}
              title={content.name}
              imgUrl={content.poster_path}
              rating={content.vote_average}
              year={content.first_air_date && content.first_air_date.substring(0, 4)}
              isGrid={false}
              isMovie={false}
            />
          ))}
        </Section>
      )}
      {result.length === 0 && <Msg>'{title}'(와)과 비슷한 컨텐츠가 없습니다.</Msg>}
    </Block>
  );
};

export default SimilarPresenter;
