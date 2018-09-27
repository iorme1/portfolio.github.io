import React, { Component } from 'react';
import aboutMe from '../images/projects/about-me.jpg';

class Banner extends Component {

  render() {
    return (
        <div
          className="jumbotron text-center banner-container"
          data-aos="slide-right"
          data-aos-duration="750"
          >
          <h3>webDeveloper</h3>
          <p>
            Hello! I'm Isaac Orme. I specialize in JavaScript and Ruby programming languages with
            experience in Rails, React, Angular, and Node.
          </p>
        </div>
    );
  }
}

export default Banner;
