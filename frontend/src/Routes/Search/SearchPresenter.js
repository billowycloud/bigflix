import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Contents/Poster";

const Block = styled.div`
  margin-top: 5rem;
  padding-left: 4%;
  padding-right: 4%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.3rem, 1fr));
  grid-gap: 30px;
  grid-template-rows: 1fr;
  width: 100%;
  justify-content: center;
`;

/* /serach/multi API를 요청했을 경우 조건에 따른 포스터 출력
media_type이 배우일 경우 배우가 출연했던 영화와 TV를 출력 */
const SearchPresenter = ({ results, loading, error, splitedText }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      <Block>
        {results && results.multiResults && results.multiResults.length > 0 && (
          <Wrapper>
            {results.multiResults.map((content) =>
              content.media_type === "person" ? (
                content.known_for.map((content) =>
                  content.media_type === "movie" ? (
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
                      isGrid={true}
                    />
                  ) : (
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
                      isGrid={true}
                    />
                  )
                )
              ) : content.media_type === "movie" ? (
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
              ) : (
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
                  isGrid={true}
                />
              )
            )}
          </Wrapper>
        )}
      </Block>
      {results.multiResults && results.multiResults.length === 0 && (
        <div>{splitedText}</div>
      )}
    </>
  );
};

export default SearchPresenter;
