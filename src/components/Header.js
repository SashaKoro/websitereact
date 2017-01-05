import React from 'react';
import {Link , IndexLink} from 'react-router';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #555F61;
  height: 100px;
  position: fixed;
  width: 100%;
`;

const Logo = styled.span`
  margin-left: 10%;
  margin-right: 51%;
  background-color: #BCA136;
  padding-right: 12px;
  border-top: 30px solid #1496BB;
  border-right: 30px solid #F26D21;
  border-left: 30px solid #F26D21;
  border-bottom: 15px solid transparent;
`;

const Button = styled.button`
  margin-top: 38px;
  margin-right: 9px;
  height: 40px;
  width: 120px;
  max-width: 120px;
  font-family: Arial;
  font-size: 19px;
  color: black;
  border: 1px solid black;
  background-color: #43ABC9;
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  text-align: center;
  
  &:hover {
    background-color: white;
  }
`;



const Header = () => {
  return (
    <Div>
      <Logo />
      <Button><IndexLink to="/">About</IndexLink></Button>
      <Button><Link to="/projects">Projects</Link></Button>
      <Button><Link to="/blog">Blog</Link></Button>
    </Div>
  );
};

export default Header;
