import React, { Component } from 'react';
import { AboutContainer, Title, Paragraph } from  '../styles/about.js';

class About extends Component {
  render() {
    return (
        <AboutContainer className="jumbotron pt-2 pb-0">
          <Title className="text-center mb-4">aboutMe</Title>
          <Paragraph>
            Hello! I'm Isaac Orme. I specialize in JavaScript and Ruby programming languages with
            experience in Rails, React, Angular, and Node. Creating web applications
            to help make people's lives easier or just making applications to add some kind
            of entertainment value is what gets me up early in the morning. I love perfecting
            applications and constantly adding new and helpful features as they come to mind.
            Go ahead and take a peek at my skills and projects section below to find out more about
            me and what I've been up to lately.
          </Paragraph>
        </AboutContainer>
    );
  }
}

export default About;
