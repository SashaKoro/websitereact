import React from 'react';
import styled from 'styled-components';

const SiteFooter = styled.div`
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
    color: #202020
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
    <SiteFooter className="SiteFooter">
        <ContactsDiv>
          <Anchor href="mailto:balaskorotkov@gmail.com" ><Icon className="fa">&#xf199;</Icon></Anchor>
          <Anchor target="_blank" href="https://www.linkedin.com/in/alexandre-korotkov-bb492b129" ><Icon className="fa">&#xf08c;</Icon></Anchor>
          <Anchor target="_blank" href="https://github.com/SashaKoro" ><Icon className="fa">&#xf09b;</Icon></Anchor>
        </ContactsDiv>
        <Moto className="Moto fa">&#xf21c;</Moto>
    </SiteFooter>
  );
};

export default Footer;
