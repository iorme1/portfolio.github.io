import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import Contact from './components/contact';
import Skills from './components/skills';
import Banner from './components/banner';
import About from './components/about';
import Projects from './components/projects';
import Background from './components/background';

AOS.init();

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Background/>
        <Navbar/>
        <div className="row webdev-about">
          <div className="col-md-12">
            <Banner />
          </div>
          <div className="col-md-12">
            <About />
          </div>
        </div>

        <Skills />

        <div className="row">
          <div className="col-md-12">
            <Projects />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Contact />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
