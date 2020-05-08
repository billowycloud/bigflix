import React from "react";
import styled from "styled-components";

const Block = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
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

const GridTemplate = ({ children }) => {
  return (
    <Block>
      <Wrapper>{children}</Wrapper>
    </Block>
  );
};

export default GridTemplate;
