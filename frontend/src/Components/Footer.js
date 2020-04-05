import React from 'react';
import styled from 'styled-components';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const Block = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SNSBlock = styled.div`
  margin-bottom: 1rem;
`;
const SNS = styled.img`
  height: 4rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`;

const Text = styled.div`
  span {
    font-weight: bold;
    color: #e74c3c;
  }
`;
const Footer = () => {
  return (
    <Block>
      <SNSBlock>
        <SNS src={facebook} />
        <SNS src={instagram} />
        <SNS src={twitter} />
      </SNSBlock>
      <Text>
        ⓒ 2020 <span>BillowyCloud</span>
      </Text>
    </Block>
  );
};

export default Footer;
