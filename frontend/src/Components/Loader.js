import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
 from{
   -webkit-transform: rotate(0deg);
 }
 to{
   -webkit-transform: rotate(360deg);
 }
`;

const Block = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.span`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: dashed 5px white;
  animation: ${spin} 1.5s infinite linear;
`;

const Loader = () => {
  return (
    <Block>
      <Loading />
    </Block>
  );
};
export default Loader;
