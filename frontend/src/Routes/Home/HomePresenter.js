import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Contents/Section";
import Poster from "../../Components/Contents/Poster";

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
              />
            ))}
          </Section>
        )}
      </Block>
    </>
  );
};

export default HomePresenter;
