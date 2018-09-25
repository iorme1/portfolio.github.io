import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <h2>Isaac Orme</h2>
        <button
          className="btn btn-primary"
          onClick={this.props.sidebar}
        >
        Contact
        </button>
      </nav>
    );
  }
}

export default Navbar;
