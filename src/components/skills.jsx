import React, { Component } from 'react';

class Skills extends Component {

  render() {
    return (
      <div className="row skills-wrap">

        <div className="col-md-3 skill-container">
          <div
            className="hexagon programming-languages"
            data-aos="flip-right"
            data-aos-duration="750"
          >
            <h5>
              Programming Languages
            </h5>
          </div>

            <ul
              className="skills-text"
              data-aos="fade-up"
              data-aos-duration="750"
              >
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>SQL</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
        </div>

        <div className="col-md-3 skill-container">
          <div
            className="hexagon frameworks-libraries"
            data-aos="flip-right"
            data-aos-duration="1250"
            >
            <h5>Frameworks & Libraries</h5>
          </div>

          <ul
            className="skills-text"
            data-aos="fade-up"
            data-aos-duration="1250"
          >
            <li>Ruby on Rails</li>
            <li>AngularJS</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>Rspec</li>
          </ul>
        </div>


        <div className="col-md-3 skill-container">
          <div
          className="hexagon industry-knowledge"
          data-aos="flip-right"
          data-aos-duration="1600"
          >
            <h5>
              Industry Knowledge
            </h5>
          </div>

          <ul
            className="skills-text"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <li>Web Development</li>
            <li>OOP</li>
            <li>Functional Programming</li>
            <li>Test Driven Development</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </div>

        <div className="col-md-3 skill-container">
          <div
          className="hexagon education"
          data-aos="flip-right"
          data-aos-duration="1900"
          >
            <h5>Education</h5>
          </div>

          <ul
            className="skills-text"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            <li>
              San Francisco State University
              BA in Business Marketing 2013
            </li>
            <li>Bloc inc.	Software Development</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
