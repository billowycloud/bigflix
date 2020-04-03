import React, { useState } from "react";
import searchWhite from "../../assets/search_white.png";
import styled, { keyframes, css } from "styled-components";

const SearchBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 60px;
`;

const InputBox = styled.div`
  border: ${props => (props.hide ? "1px solid white" : "none")};
  ${props =>
    props.hide &&
    css`
      animation: ${ImageFade} 0.2s ease-in-out;
    `}

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const Form = styled.form`
  display: ${props => (props.hide ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  input {
    height: 2.8rem;
    background: transparent;
    color: white;
    font-size: 1rem;
    border: none;
    outline: none;
  }
`;

const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const ImageFade = keyframes`
from{
  width: 0rem;
}
to{
  width: 13rem;
}
`;

const Search = () => {
  const [isOpen, setIsOpen] = useState(false); //Search탭 오픈 유무
  const toggle = () => setIsOpen(!isOpen);

  return (
    <SearchBlock>
      <InputBox hide={isOpen}>
        <SearchIcon src={searchWhite} onClick={toggle} />
        <Form hide={isOpen}>
          <input placeholder="제목, 장르"></input>
        </Form>
      </InputBox>
    </SearchBlock>
  );
};

export default Search;
