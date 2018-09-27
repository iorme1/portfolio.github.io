import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light fixed-top mynav text-center">
        <button className="btn btn-primary mr-2 proj-btn">Projects</button>
        <button className="btn btn-primary mr-2 skills-btn">Skills</button>
        <h2>Isaac Orme</h2>
        <button className="btn btn-primary btn-lg mr-2 contact-btn">Contact</button>
      </nav>
    );
  }
}

export default Navbar;
