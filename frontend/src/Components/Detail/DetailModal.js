import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Block = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: calc(100vh - 11rem);
`;

const DetailModal = ({ onClose, result, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Block>
      <Content>
        <h3></h3>
        <p></p>
        <button onClick={onClose}>닫기</button>
      </Content>
    </Block>
  );
};

export default DetailModal;
