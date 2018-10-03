import React, { Component } from 'react';
import me from '../images/projects/me.jpeg';
import {BannerContainer, Title, Isaac} from '../styles/banner.js';

class Banner extends Component {

  render() {
    return (
        <BannerContainer className="jumbotron text-center">
          <Title>webDeveloper
            <span>
              <Isaac
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="ml-2"
              alt="isaac"
              src={me} />
            </span>
          </Title>
          <p>
            Hello! I'm Isaac Orme. I specialize in JavaScript and Ruby programming languages with
            experience in Rails, React, Angular, and Node.
          </p>
        </BannerContainer>
    );
  }
}

export default Banner;
