import React from "react";
import MessageTemplate from "./MessageTemplate";
import styled from "styled-components";

const Text = styled.p`
  font-size: 1.5rem;
`;

const MylistMessage = () => {
  return (
    <MessageTemplate>
      <Text>아직 찜하신 콘텐츠가 없습니다.</Text>
    </MessageTemplate>
  );
};

export default MylistMessage;
