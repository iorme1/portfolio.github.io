import React, { Component } from 'react';
import ContactForm from './contactForm';

class Contact extends Component {

  render() {
    return (
        <footer className="contact-container">
          <ul className="contact-details">
            <li>
              <a href="https://github.com/iorme1">
                <i className="fa fa-github github-icon mr-4"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/isaac-orme-88b1b8169/">
                <i className="fa fa-linkedin linkedin-icon mr-4"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-envelope gmail-icon mr-4"></i>
              </a>
            </li>
          </ul>

          <ContactForm />
        </footer>
    );
  }
}

export default Contact;
