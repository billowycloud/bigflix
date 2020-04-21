import React, { useState, useRef, useContext, useEffect } from "react";
import searchWhite from "../../assets/search_white.png";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";
import FlixContext from "../../contexts/FlixContext";

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
    props.isOpen &&
    css`
      & {
        border: 1px solid white;
        background: rgba(12, 12, 12, 0.3);
      }
      ${Form} {
        width: 10rem;
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

const Delete = styled.div`
  ${(props) =>
    props.isOpen
      ? css`
          width: 30px;
          height: 30px;
          &:before,
          &:after {
            width: 26px;
            height: 4px;
          }
        `
      : css`
          width: 0;
          heigth: 0;
          &:before,
          &:after {
            width: 0px;
            height: 0px;
          }
        `}

  position: relative;
  border-radius: 6px;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: width 1s ease-in-out;
    background-color: white;
    border-radius: 2px;
    top: 14px;
  }

  &:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 2px;
  }
  &:after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 2px;
  }
`;
const Search = ({ history, currentRoute }) => {
  const { state, actions } = useContext(FlixContext);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); //Search탭 오픈 유무

  useEffect(() => {
    /* Search탭이 열린채로 다른라우터 이동 시 닫기 */
    if (
      isOpen &&
      inputRef.current.value.length > 0 &&
      !currentRoute.includes("search")
    ) {
      inputRef.current.value = "";
      setIsOpen(false);
    }
  }, [isOpen, currentRoute]);
  const handleURL = (event) => {
    const { value } = event.target;
    actions.setSearchValue(value);
    if (Number(value.length) === 1) {
      if (!currentRoute.includes("search")) actions.setPrevRoute(currentRoute);
      history.push(`/search`);
    } else if (Number(value.length) === 0) {
      history.push(state.prevRoute);
    } else if (Number(value.length) > 1) {
      history.push(`/search`);
    }
  };

  return (
    <SearchBlock>
      <InputBox isOpen={isOpen}>
        <SearchIcon
          src={searchWhite}
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
              inputRef.current.focus();
              actions.setPrevRoute(currentRoute); //포커싱 될 때 이전페이지
            }
          }}
        />
        <Form>
          <Input
            ref={inputRef}
            placeholder="제목, 배우"
            onChange={handleURL}
            onBlur={(e) => {
              if (e.target.value === "") {
                setIsOpen(false);
                history.push(state.prevRoute);
              }
            }}
          />
        </Form>
        <Delete
          isOpen={isOpen}
          isValue={state.searchValue}
          onClick={() => {
            setIsOpen(false);
            inputRef.current.value = "";
            actions.setSearchValue("");
            history.push(state.prevRoute);
          }}
        />
      </InputBox>
    </SearchBlock>
  );
};

export default withRouter(Search);
