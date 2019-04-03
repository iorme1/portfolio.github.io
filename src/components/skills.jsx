import React, { Component } from 'react';
import { Hexagon, SkillsContainer, SkillsText, Title } from '../styles/skills.js';

class Skills extends Component {

  render() {
    return (
      <SkillsContainer className="row">

        <div className="col-md-3">
          <Hexagon
            className="programming-languages"
            data-aos="fade-down"
            data-aos-duration="750"
          >
            <Title>
              Programming Languages
            </Title>
          </Hexagon>

            <SkillsText
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="750"
              >
              <p>JavaScript</p>
              <p>Ruby</p>
              <p>SQL</p>
              <p>HTML5</p>
              <p>CSS</p>
            </SkillsText>
        </div>

        <div className="col-md-3 skill-container">
          <Hexagon
            className="frameworks-libraries"
            data-aos="fade-down"
            data-aos-duration="1250"
            >
            <Title>Frameworks & Libraries</Title>
          </Hexagon>

          <SkillsText
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1250"
          >
            <p>Ruby on Rails</p>
            <p>React</p>
            <p>Redux</p>
            <p>jQuery</p>
            <p>Bootstrap</p>
            <p>Devise</p>
            <p>Rspec</p>
          </SkillsText>
        </div>


        <div className="col-md-3 skill-container">
          <Hexagon
          className="industry-knowledge"
          data-aos="fade-down"
          data-aos-duration="1600"
          >
            <Title>
              Industry Knowledge
            </Title>
          </Hexagon>

          <SkillsText
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <p>Web Development</p>
            <p>Object-Oriented Programming</p>
            <p>Functional Programming</p>
            <p>Test Driven Development</p>
            <p>API consumption & Creation </p>
            <p>Data Structures & Algorithms</p>
            <p>Git/Github</p>
          </SkillsText>

        </div>

        <div className="col-md-3 skill-container">

          <Hexagon
          className="education"
          data-aos="fade-down"
          data-aos-duration="1900"
          >
            <Title>Education</Title>
          </Hexagon>

          <SkillsText
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            <p>
              San Francisco State University
              BA in Business Marketing 2013
            </p>
            <p>Bloc inc. Software Development</p>
          </SkillsText>
        </div>
      </SkillsContainer>
    );
  }
}

export default Skills;
