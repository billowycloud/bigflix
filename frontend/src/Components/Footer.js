import React from "react";
import styled from "styled-components";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

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
        <a href="https://www.facebook.com/" target="blank">
          <SNS src={facebook} />
        </a>
        <a href="https://www.instagram.com/billowy_clouds/" target="blank">
          <SNS src={instagram} />
        </a>
        <a href="https://github.com/billowycloud" target="blank">
          <SNS src={github} />
        </a>
      </SNSBlock>
      <Text>
        ⓒ 2020 <span>BillowyCloud</span>
      </Text>
    </Block>
  );
};

export default Footer;
