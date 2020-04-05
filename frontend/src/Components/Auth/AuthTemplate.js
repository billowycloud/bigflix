import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import background from '../../assets/mainBackground.jpg';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.background});
  background-position: center center;
  background-size: cover;
  height: 100vh;
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
