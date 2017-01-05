import React from 'react';
import styled from 'styled-components';

const TheProjects = styled.div`
  padding-top: 150px;
  height: 100%;
  width: 100%;
  color: #555F61;
  text-align: center;
  flex: 1;
`;

const HiddenProjects = styled.div`
  display: none;
`

const ProjectWrap = styled.div`
`;

const DivWrap = styled.div`
  display: inline-block;
 `;

const ProjectHeader = styled.h1`
  padding-bottom: 100px;
`;

const RowTwo = styled.div`
  margin-top: 50px;
  margin-bottom: 75px;
`;

const Icon = styled.i`
  font-size: 220px;
`;

const IDIcon = styled(Icon)`
  margin-left: 120px;
  margin-right: 120px;
`;

const BuoyIcon = styled(Icon)`
  font-size: 200px;
`;

const CloudWrap = styled(DivWrap)`
  margin-right: 120px;
`;

const ProjectLink = styled.a`
  color: black;
  text-decoration: none;
  line-height: 75px;
  
  &:hover {
    text-decoration: underline;
    color: #373D3F;
    cursor: pointer;
  },
  
  &:focus {
    color: #373D3F;
    text-decoration: underline;
    outline-style: none;
  }
`;

const WeatherLink = styled(ProjectLink)`
  line-height: 60px;
`;


const Projects = () => {
  return (
    <TheProjects className="TheProjects">
      <ProjectHeader className="ProjectHeader"><b>Here are some of the cool things I've built</b></ProjectHeader>
      <ProjectWrap className="ProjectWrap">
        <div>
          <DivWrap>
            <Icon className="fa fa-calculator" />
            <figcaption>
              <ProjectLink className="ProjectLink" target="_blank" href="https://sashakoro.github.io/calculator" >Calculator + Frankulator</ProjectLink>
            </figcaption>
          </DivWrap>
          <DivWrap>
            <IDIcon className="fa fa-id-badge" />
            <figcaption>
              <ProjectLink className="ProjectLink" target="_blank" href="http://codepen.io/SashaK-/full/pNbBQR/" >Tribute Page</ProjectLink>
            </figcaption>
          </DivWrap>
          <DivWrap>
            <Icon className="fa fa-gears" />
            <figcaption>
              <ProjectLink className="ProjectLink" target="_blank" href="http://codepen.io/SashaK-/full/LbbWom/" >Quote Machine</ProjectLink>
            </figcaption>
          </DivWrap>
        </div>
        <RowTwo>
          <CloudWrap className="CloudWrap">
            <Icon className="fa fa-cloud" />
            <figcaption>
              <WeatherLink className="WeatherLink" target="_blank" href="https://codepen.io/SashaK-/full/XNpYXM/" >Weather App</WeatherLink>
            </figcaption>
          </CloudWrap>
          <DivWrap>
            <BuoyIcon className="fa fa-life-bouy fa-rotate-45" />
            <figcaption>
              <ProjectLink className="ProjectLink" target="_blank" href="https://sashakoro.github.io/Simon-Project/" >Simon Game</ProjectLink>
            </figcaption>
          </DivWrap>
        </RowTwo>
      </ProjectWrap>

      <HiddenProjects className="HiddenProjects">
        <div>
          <DivWrap>
            <Icon className="fa fa-calculator" />
            <figcaption>
              <ProjectLink className="ProjectLink" target="_blank" href="https://sashakoro.github.io/calculator" >Calculator + Frankulator</ProjectLink>
            </figcaption>
          </DivWrap>
        </div>
        <div>
          <DivWrap>
            <IDIcon className="fa fa-id-badge" />
            <figcaption>
              <ProjectLink className="ProjectLink" target="_blank" href="http://codepen.io/SashaK-/full/pNbBQR/" >Tribute Page</ProjectLink>
            </figcaption>
          </DivWrap>
        </div>
        <div>
          <DivWrap>
            <Icon className="fa fa-gears" />
            <figcaption>
              <ProjectLink className="ProjectLink" target="_blank" href="http://codepen.io/SashaK-/full/LbbWom/" >Quote Machine</ProjectLink>
            </figcaption>
          </DivWrap>
        </div>
        <div>
          <CloudWrap className="CloudWrap">
            <Icon className="fa fa-cloud" />
            <figcaption>
              <WeatherLink className="WeatherLink" target="_blank" href="https://codepen.io/SashaK-/full/XNpYXM/" >Weather App</WeatherLink>
            </figcaption>
          </CloudWrap>
        </div>
        <div>
          <DivWrap className="BottomFigure">
            <BuoyIcon className="fa fa-life-bouy fa-rotate-45" />
            <figcaption>
              <ProjectLink className="ProjectLink" target="_blank" href="https://sashakoro.github.io/Simon-Project/" >Simon Game</ProjectLink>
            </figcaption>
          </DivWrap>
        </div>
      </HiddenProjects>
    </TheProjects>


  );
};

export default Projects;
