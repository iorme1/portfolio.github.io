import React, { Component } from 'react';
import Navbar from './components/navbar';
import ContactSidebar from './components/contactSidebar';
import Banner from './components/banner';
import About from './components/about';
import Project from './components/project';

class App extends Component {
  state =  {
    sidebarOpen: false
  }

  showSidebar() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          sidebar={this.showSidebar.bind(this)}
        />
        <div className="row">
          <div className="col-md-4">
              <ContactSidebar
                sidebar={this.state.sidebarOpen}
              />
          </div>
        </div>
        <Banner />
        <About />
        <Project />
      </React.Fragment>
    );
  }
}

export default App;
