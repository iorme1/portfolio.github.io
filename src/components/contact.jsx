import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (

          <footer className="contact-container">
              <ul className="contact-details">
                <li>
                  <a href="https://github.com/iorme1">
                    <i className="fa fa-github github-icon">
                      <span className="m-2 github-text">iorme1</span>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/isaac-orme-88b1b8169/">
                    <i className="fa fa-linkedin linkedin-icon">
                      <span className="m-2 linkedin-text">LinkedIn</span>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-envelope gmail-icon">
                      <span className="m-2 gmail-text">gmail</span>
                    </i>
                  </a>
                </li>
              </ul>
          </footer>
    );
  }
}

export default Contact;
