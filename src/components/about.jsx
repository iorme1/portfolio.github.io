import React, { Component } from 'react';
import { AboutContainer, Title, Paragraph } from  '../styles/about.js';


class About extends Component {
  render() {
    return (
        <AboutContainer className="jumbotron">
          <Title className="text-center">aboutMe</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum
          </Paragraph>
        </AboutContainer>
    );
  }
}

export default About;
