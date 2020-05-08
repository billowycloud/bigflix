import React from "react";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Contents/Poster";
import SearchMessage from "../../Components/Message/SearchMessage";
import GridTemplate from "../../Components/GridTemplate";

/* /serach/multi API를 요청했을 경우 조건에 따른 포스터 출력
media_type이 배우일 경우 배우가 출연했던 영화와 TV를 출력 */
const SearchPresenter = ({ results, loading, error, searchValue }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      <GridTemplate>
        {results &&
          results.multiResults &&
          results.multiResults.length > 0 &&
          results.multiResults.map((content) =>
            content.media_type === "person" ? (
              content.known_for.map((content) =>
                content.media_type === "movie" ? (
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
                ) : (
                  <Poster
                    key={content.id}
                    id={content.id}
                    title={content.name}
                    imgUrl={content.poster_path}
                    rating={content.vote_average}
                    year={
                      content.first_air_date && content.first_air_date.substring(0, 4)
                    }
                    isGrid={true}
                    isMovie={false}
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
                year={content.release_date && content.release_date.substring(0, 4)}
                isGrid={true}
                isMovie={true}
              />
            ) : (
              <Poster
                key={content.id}
                id={content.id}
                title={content.name}
                imgUrl={content.poster_path}
                rating={content.vote_average}
                year={content.first_air_date && content.first_air_date.substring(0, 4)}
                isGrid={true}
                isMovie={false}
              />
            )
          )}
      </GridTemplate>
      {results.multiResults && results.multiResults.length === 0 && (
        <SearchMessage searchValue={searchValue} />
      )}
    </>
  );
};

export default SearchPresenter;
