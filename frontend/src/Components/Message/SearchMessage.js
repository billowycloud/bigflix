import React from "react";
import styled from "styled-components";
import MessageTemplate from "./MessageTemplate";

const Result = styled.p`
  line-height: 4rem;
  font-size: 1rem;
  span {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const TipTitle = styled.div`
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0.5rem;
  margin-bottom: 0.8rem;
  padding: 10px;
  background: white;
  color: black;
`;
const Tip = styled.p`
  line-height: 1.2rem;
`;
const SearchMessage = ({ searchValue }) => {
  return (
    <MessageTemplate>
      <Result>
        입력하신 검색어 <span>"{searchValue}"</span>(와)과 일치하는 결과가 없습니다.
      </Result>
      <p>관련 작품은 아직 감상 서비스 제공이 되지 않고 있어요.</p>
      <TipTitle>검색 팁</TipTitle>
      <Tip>
        ·다른 키워드를 입력해 보세요.
        <br />
        ·영화 제목 또는 TV 프로그램 제목을 통해 검색하세요.
        <br />
        ·배우의 이름으로 검색하면, 해당 배우가 출연한 작품을 볼 수 있어요.
      </Tip>
    </MessageTemplate>
  );
};

export default SearchMessage;
