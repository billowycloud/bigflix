import React, { useEffect, useState } from "react";
import GridTemplate from "../../Components/GridTemplate";
import Poster from "../../Components/Contents/Poster";
import styled from "styled-components";
import closeIcon from "../../assets/close_white.png";
import axios from "axios";
import MylistMessage from "../../Components/Message/MylistMessage";

const Wrapper = styled.div`
  position: relative;
`;

const RemoveButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  img {
    width: 40px;
    height: 40px;
  }
`;

const MyListPresenter = () => {
  const [mylist, setMylist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .post("/api/mylist/getMovie", {
        userFrom: JSON.parse(localStorage.getItem("user"))._id,
      })
      .then((response) => {
        if (response.data.success) {
          setMylist(response.data.mylist);
        } else {
          console.log("영화 정보를 가져오는데 실패했습니다.");
        }
      });
  };
  const handleRemove = (movieId, userFrom, movieTrue) => {
    const variables = {
      userFrom,
      movieTrue,
      movieId,
    };
    console.log(variables);
    axios.post("/api/mylist/removeFromList", variables).then((response) => {
      if (response.data.success) {
        fetchData();
      } else {
        console.log("리스트 삭제를 실패했습니다.");
      }
    });
  };
  return (
    <>
      <GridTemplate>
        {mylist &&
          mylist.length > 0 &&
          mylist.map((content) =>
            content.movieTrue ? (
              <Wrapper key={content.movieInfo[0].id}>
                <Poster
                  key={content.movieInfo[0].id}
                  id={content.movieInfo[0].id}
                  title={content.movieInfo[0].title}
                  imgUrl={content.movieInfo[0].poster_path}
                  rating={content.movieInfo[0].vote_average}
                  year={
                    content.movieInfo[0].release_date &&
                    content.movieInfo[0].release_date.substring(0, 4)
                  }
                  isGrid={true}
                  isMovie={true}
                />
                <RemoveButton
                  onClick={() =>
                    handleRemove(content.movieId, content.userFrom, content.movieTrue)
                  }
                >
                  <img alt="mylistRemove" src={closeIcon} />
                </RemoveButton>
              </Wrapper>
            ) : (
              <Wrapper key={content.movieInfo[0].id}>
                <Poster
                  key={content.movieInfo[0].id}
                  id={content.movieInfo[0].id}
                  title={content.movieInfo[0].name}
                  imgUrl={content.movieInfo[0].poster_path}
                  rating={content.movieInfo[0].vote_average}
                  year={
                    content.movieInfo[0].first_air_date &&
                    content.movieInfo[0].first_air_date.substring(0, 4)
                  }
                  isGrid={true}
                  isMovie={true}
                />
                <RemoveButton
                  onClick={() =>
                    handleRemove(content.movieId, content.userFrom, content.movieTrue)
                  }
                >
                  <img alt="mylistRemove" src={closeIcon} />
                </RemoveButton>
              </Wrapper>
            )
          )}
      </GridTemplate>
      {mylist && mylist.length === 0 && <MylistMessage />}
    </>
  );
};

export default MyListPresenter;
