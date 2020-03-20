import React from 'react';
import searchWhite from '../../Images/search_white.png';
import styled from 'styled-components';

const Img = styled.img`
  width: 40px;
`;

const Search = () => {
  return <Img src={searchWhite} />;
};

export default Search;
