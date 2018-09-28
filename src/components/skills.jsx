import React, { Component } from 'react';

class Skills extends Component {

  render() {
    return (
      <div className="row skills-wrap">

        <div className="col-md-3 skill-container">
          <div
            className="hexagon programming-languages"
            data-aos="fade-down"
            data-aos-duration="750"
          >
            <h5>
              Programming Languages
            </h5>
          </div>

            <div
              className="skills-text text-center"
              data-aos="fade-up"
              data-aos-duration="750"
              >
              <p>JavaScript</p>
              <p>Ruby</p>
              <p>SQL</p>
              <p>HTML5</p>
              <p>CSS</p>
            </div>
        </div>

        <div className="col-md-3 skill-container">
          <div
            className="hexagon frameworks-libraries"
            data-aos="fade-down"
            data-aos-duration="1250"
            >
            <h5>Frameworks & Libraries</h5>
          </div>

          <div
            className="skills-text text-center"
            data-aos="fade-up"
            data-aos-duration="1250"
          >
            <p>Ruby on Rails</p>
            <p>AngularJS</p>
            <p>jQuery</p>
            <p>React</p>
            <p>Bootstrap</p>
            <p>Node.js</p>
            <p>Rspec</p>
          </div>
        </div>


        <div className="col-md-3 skill-container">
          <div
          className="hexagon industry-knowledge"
          data-aos="fade-down"
          data-aos-duration="1600"
          >
            <h5>
              Industry Knowledge
            </h5>
          </div>

          <div
            className="skills-text text-center"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <p>Web Development</p>
            <p>Object-oriented programming</p>
            <p>Functional Programming</p>
            <p>Test Driven Development</p>
            <p>Data Structures & Algorithms</p>
            <p>Git/Github</p>
          </div>

        </div>

        <div className="col-md-3 skill-container">

          <div
          className="hexagon education"
          data-aos="fade-down"
          data-aos-duration="1900"
          >
            <h5>Education</h5>
          </div>

          <div
            className="skills-text text-center"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            <p>
              San Francisco State University
              BA in Business Marketing 2013
            </p>
            <p>Bloc inc.	Software Development</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
