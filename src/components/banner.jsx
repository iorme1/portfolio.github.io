import React, { Component } from 'react';
import About from './about';
import me from '../images/projects/me.jpeg';
import {BannerContainer, Title, Isaac} from '../styles/banner.js';

class Banner extends Component {

  render() {
    return (
        <BannerContainer className="jumbotron text-center">
          <Title>webDeveloper
            <span>
              <Isaac
              className="ml-2"
              alt="isaac"
              src={me} />
            </span>
          </Title>
          <About/>
        </BannerContainer>
    );
  }
}

export default Banner;
