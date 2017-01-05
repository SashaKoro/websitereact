import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 85px;
  background: #555F61;
  width: 100%;
`;

const ContactsDiv = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Anchor = styled.a`
  color: black;
  margin-right: 15px;
  
  &:hover {
    color: #202020;
    cursor: pointer;
  },
  
  &:focus {
    outline-color: black;
    outline-style: solid;
    outline-width: 2px;
  }
`;

const Icon = styled.i`
  font-size: 32px;
`;

const Moto = styled.i`
  font-size: 19px;
  margin-left: 10px;
  color: #8E1F1F;
`;

const Footer = () => {
  return (
    <Div>
        <ContactsDiv>
          <Anchor><Icon className="fa">&#xf199;</Icon></Anchor>
          <Anchor><Icon className="fa">&#xf08c;</Icon></Anchor>
          <Anchor><Icon className="fa">&#xf09b;</Icon></Anchor>
        </ContactsDiv>
        <Moto className="fa">&#xf21c;</Moto>
    </Div>
  );
};

export default Footer;
