import React from 'react';
import searchWhite from '../../Images/search_white.png';
import styled from 'styled-components';

const SearchBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 60px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  border: 1.5px solid white;
  border-radius: 10px;

  button {
    overflow: visible;
    cursor: pointer;
    border: none;
    outline: none;

    background: transparent;
  }

  .searchImage:before {
    content: '';
    display: block;
    background-image: url(${searchWhite});
    background-position: center center;
    background-size: cover;
    width: 40px;
    height: 40px;
  }
`;

const Form = styled.form`
  display: flex;
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

const Search = () => {
  return (
    <SearchBlock>
      <InputBox>
        <button>
          <span className="searchImage"></span>
        </button>
        <Form>
          <input placeholder="제목, 장르"></input>
        </Form>
      </InputBox>
    </SearchBlock>
  );
};

export default Search;
