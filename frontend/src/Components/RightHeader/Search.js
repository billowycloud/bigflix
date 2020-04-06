import React, { useState } from 'react';
import searchWhite from '../../assets/search_white.png';
import styled, { css } from 'styled-components';

const SearchBlock = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled.img`
  height: 40px;
  cursor: pointer;
`;

const InputBox = styled.div`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.6rem;
  background: transparent;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.hide &&
    css`
      & {
        border: 1px solid white;
        background: rgba(12, 12, 12, 0.3);
      }
      ${Form} {
        width: 13rem;
      }
      ${Input} {
        width: 100%;
      }
    `}
`;

const Form = styled.form`
  height: 100%;
  width: 0;
  transition: width 0.5s ease-in-out;
`;

const Input = styled.input`
  width: 0;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  transition: width 0.5s ease-in-out;
`;

const Search = () => {
  const [isOpen, setIsOpen] = useState(false); //Search탭 오픈 유무
  const toggle = () => setIsOpen(!isOpen);

  return (
    <SearchBlock>
      <InputBox hide={isOpen}>
        <SearchIcon src={searchWhite} onClick={toggle} />
        <Form>
          <Input placeholder="제목, 배우"></Input>
        </Form>
      </InputBox>
    </SearchBlock>
  );
};

export default Search;
