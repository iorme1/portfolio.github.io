import React, { Component } from 'react';
import {
  NavBar, Title, ScrollItem, NavItems, ResumeLink
} from '../styles/navbar.js';

class Navbar extends Component {

  render() {
    let { scrollContact, scrollSkills, scrollProjects } = this.props

    return (
      <NavBar className="navbar navbar-light bg-light fixed-top">
        <Title>Isaac Orme</Title>
        <NavItems>
          <ScrollItem
            className="btn btn-warning mr-2"
            onClick={scrollContact}
          >
            Contact
          </ScrollItem>
          <ScrollItem
            className="btn btn-warning mr-2"
            onClick={scrollSkills}
          >
            Skills
          </ScrollItem>
          <ScrollItem
            className="btn btn-warning mr-2"
            onClick={scrollProjects}
          >
            Projects
          </ScrollItem>
          <ResumeLink
            href="https://docs.google.com/document/d/1xao-o2KI2nUcuu0MWF_490TsN_TSgtlmaOAHknR5UQI/edit?usp=sharing"
            target="_blank"
            className="btn btn-warning mr-2"
          >
            Resume
          </ResumeLink>
        </NavItems>
      </NavBar>
    );
  }
}

export default Navbar;
