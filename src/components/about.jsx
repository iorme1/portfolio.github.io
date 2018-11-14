import React, { Component } from 'react';
import { AboutContainer, Title, Paragraph } from  '../styles/about.js';

class About extends Component {
  render() {
    return (
        <AboutContainer className="jumbotron pt-2 pb-0">
          <Title className="text-center mb-4">aboutMe</Title>
          <Paragraph>
            Hello! I'm Isaac Orme. I specialize in JavaScript and Ruby programming languages with
            experience in Rails, React, and AngularJS. I love building web applications
            that help make a person's day-to-day tasks easier or just making applications for
            entertainment value. As I gain more knowledge about writing better code, I enjoy going back
            and refactoring old applications to improve past projects. Go ahead and take a peek at my skills
            and projects section below to find out more about me and what I've been up to lately.
          </Paragraph>
        </AboutContainer>
    );
  }
}

export default About;
