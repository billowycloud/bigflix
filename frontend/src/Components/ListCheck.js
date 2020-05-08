import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import StyleButton from "./Button";

const Block = styled.div``;

const ListCheck = ({ userFrom, movieInfo, movieTrue, movieId }) => {
  const [saved, setSaved] = useState(false);
  let variables = {
    movieTrue,
    userFrom,
    movieInfo,
    movieId,
  };
  useEffect(() => {
    axios.post("/api/mylist/saved", variables).then((response) => {
      if (response.data.success) {
        setSaved(response.data.saved);
      } else {
        console.log("데이터를 가져오는데 실패하였습니다.");
      }
    });
  }, [variables]);

  const handleSaved = () => {
    if (saved) {
      axios.post("/api/mylist/remove", variables).then((response) => {
        if (response.data.success) {
          setSaved(!saved);
        } else {
          console.log("찜 목록 지우기에 실패하였습니다.");
        }
      });
    } else {
      axios.post("/api/mylist/add", variables).then((response) => {
        if (response.data.success) {
          setSaved(!saved);
        } else {
          console.log("찜 목록 추가에 실패하였습니다.");
        }
      });
    }
  };

  return (
    <StyleButton onClick={handleSaved}>
      <Block>{saved ? "저장 됨" : "찜하기"}</Block>
    </StyleButton>
  );
};

export default ListCheck;
