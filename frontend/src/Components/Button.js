import React from "react";
import styled from "styled-components";

const StyleButton = styled.div`
  font-weight: bold;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  display: inline-block;
  background: rgba(23, 23, 23, 0.3);
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: 0.3s;

  &:hover {
    -webkit-transform: scale(1.1);
    color: black;
    background: #e6e6e6;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }

  & + & {
    margin-left: 1.3rem;
  }
`;
const Button = (props) => {
  return <StyleButton {...props} />;
};

export default Button;
