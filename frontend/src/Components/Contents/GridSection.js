import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 95%;
  background: red;
  position: relative;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridSection = ({ children }) => {
  return (
    <Block>
      <Wrapper>
        <Contents>{children}</Contents>
      </Wrapper>
    </Block>
  );
};

export default GridSection;
