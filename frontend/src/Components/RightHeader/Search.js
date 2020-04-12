import React, { useState } from 'react';
import searchWhite from '../../assets/search_white.png';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';

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

const Form = styled.div`
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

const Search = ({ history, currentRoute, location }) => {
  const [prevRoute, setPrevRoute] = useState(currentRoute);
  const [isOpen, setIsOpen] = useState(false); //Search탭 오픈 유무

  const handleURL = (event) => {
    const { value } = event.target;
    if (Number(value.length) === 1) {
      if (!currentRoute.includes('search')) setPrevRoute(currentRoute);
      history.push(`/search/${value}`);
    } else if (Number(value.length) === 0) {
      history.push(prevRoute);
    } else if (Number(value.length) > 1) {
      history.push(`/search/${value}`);
    }
  };

  return (
    <SearchBlock>
      <InputBox hide={isOpen}>
        <SearchIcon
          src={searchWhite}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Form>
          <Input placeholder="제목, 배우" onKeyUp={handleURL}></Input>
        </Form>
      </InputBox>
    </SearchBlock>
  );
};

export default withRouter(Search);
