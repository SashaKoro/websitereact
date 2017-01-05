import React from 'react';
import styled from 'styled-components';
const profilePhoto = require('../images/profilePhoto.jpg');

const AboutDiv = styled.div`
  padding-top: 150px;
  background-color: white;
  height: 100%;
  color: #555F61;
  font-family: arial;
  font-size: 20px;
  flex: 1;
`;

const Self = styled.figure`
  float: right;
  margin-right: 12%;
  padding-left: 30px;
`;

const IntroHeader = styled.h1`
  margin-left: 14%;
  padding-bottom: 40px;
`;

const IntroParagraph = styled.p`
  margin-left: 10%;
  margin-right: 33%;
  margin-bottom: 60px;
`;

const SkillList = styled.ul`
  margin-left: 11%;
`;

const Li = styled.li`
  margin:0 0 20px 0;
`;

const About = () => {

  return (
    <AboutDiv className="AboutDiv">
      <Self className="Self">
        <img alt="A photo of me" src={profilePhoto} title="Visiting the Abbey of Gethsemani"/>
        <figcaption />
      </Self>
      <IntroHeader className="IntroHeader"><b>Alexandre Korotkov (Sasha)</b></IntroHeader>
      <IntroParagraph className="IntroParagraph">Welcome to my site! My name is Alexandre Korotkov, but everyone calls me Sasha. I moved to Cincinnati in September of 2016 and started learning programming that very same month. I am a self-taught developer. The main tools I use to help me learn are FreeCodeCamp, Podcasts, Project Euler, Meetups, and paired programming. My favorite text editor is sublime(although emacs looks really cool), and my favorite place to study is the Xavier University Library. My strengths are:</IntroParagraph>
      <SkillList className="SkillList">
        <Li>Relentless desire to learn and grow.</Li>
        <Li>Javascript, Python, HTML, CSS, Jquery, Unit testing, API's.</Li>
        <Li>Eager to discover new technologies and new ways of thinking.</Li>
        <Li>Natural aptitude for finding hidden edge cases and thinking outside the box.</Li>
        <Li>Enjoy pair programming with and mentoring other up-and-coming programmers.</Li>
      </SkillList>
    </AboutDiv>
  );
};

export default About;
