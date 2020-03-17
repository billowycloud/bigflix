import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/logo.png';
import background from '../../Images/mainBackground.jpg';

const Block = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.background});
  background-position: center center;
  background-size: cover;
`;

const AuthBox = styled.div`
  img {
    margin-bottom: 2rem;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 500px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <Block background={background}>
      <AuthBox>
        <img src={logo} alt="logo" />
        {children}
      </AuthBox>
    </Block>
  );
};

export default AuthTemplate;
