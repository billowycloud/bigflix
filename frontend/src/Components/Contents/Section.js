import React from 'react';
import styled from 'styled-components';
const Block = styled.div`
  margin-bottom: 3rem;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;
const Contents = styled.div`
  overflow-x: hidden;
  display: flex;
  width: 95vw;
  overflow: -moz-scrollbars-horizontal;
  grid-template-columns: repeat(20, 1fr);
  column-gap: 0;
`;

const Section = ({ title, children }) => {
  return (
    <Block>
      <Title>{title}</Title>
      <Contents>{children}</Contents>
    </Block>
  );
};

export default Section;
