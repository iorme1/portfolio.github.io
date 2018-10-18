import React, { Component } from 'react';
import { NavBar, Title, ScrollItem, NavItems} from '../styles/navbar.js';

class Navbar extends Component {

  render() {
    let { scrollContact, scrollSkills, scrollProjects } = this.props

    return (
      <NavBar className="navbar navbar-light bg-light fixed-top">
        <Title>Isaac Orme</Title>
        <NavItems>
          <ScrollItem
            className="btn btn-danger mr-2 btn-lg"
            onClick={scrollContact}
          >
            Contact
          </ScrollItem>
          <ScrollItem
            className="btn btn-warning mr-2 btn-lg"
            onClick={scrollSkills}
          >
            Skills
          </ScrollItem>
          <ScrollItem
            className="btn btn-primary mr-2 btn-lg"
            onClick={scrollProjects}
          >
            Projects
          </ScrollItem>
        </NavItems>
      </NavBar>
    );
  }
}

export default Navbar;
