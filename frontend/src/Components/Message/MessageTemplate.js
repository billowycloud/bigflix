import React from "react";
import styled from "styled-components";

const Block = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const TextWrapper = styled.div`
  padding-top: 10rem;
  font-size: 0.8rem;
`;
const MessageTemplate = ({ children }) => {
  return (
    <Block>
      <TextWrapper>{children}</TextWrapper>
    </Block>
  );
};

export default MessageTemplate;
