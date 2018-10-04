import React, { Component } from 'react';
import ContactForm from './contactForm';
import { ContactContainer, ContactDetails, IconText } from  '../styles/contact.js';

class Contact extends Component {

  render() {
    return (
        <ContactContainer>
          <ContactDetails>
            <li>
              <a href="https://github.com/iorme1">
                <IconText className="fa fa-github mr-4"></IconText>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/isaac-orme-88b1b8169/">
                <IconText className="fa fa-linkedin mr-4"></IconText>
              </a>
            </li>
          </ContactDetails>
          <ContactForm />
        </ContactContainer>
    );
  }
}

export default Contact;
