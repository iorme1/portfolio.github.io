import React, { Component } from 'react';
import me from '../images/projects/me.jpeg';

class Banner extends Component {

  render() {
    return (
        <div className="jumbotron text-center banner-container">
          <h2>webDeveloper
            <span>
              <img
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="isaac ml-2"
              alt="isaac"
              src={me} />
            </span>
          </h2>
          <p>
            Hello! I'm Isaac Orme. I specialize in JavaScript and Ruby programming languages with
            experience in Rails, React, Angular, and Node.
          </p>
        </div>
    );
  }
}

export default Banner;
