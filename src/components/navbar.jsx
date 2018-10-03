import React, { Component } from 'react';
import { NavBar, Title } from '../styles/navbar.js';

class Navbar extends Component {

  render() {
    return (
      <NavBar className="navbar navbar-light bg-light fixed-top text-center">
        <Title>Isaac Orme</Title>
        <button className="btn btn-primary btn-lg mr-2 contact-btn">Contact</button>
      </NavBar>
    );
  }
}

export default Navbar;
