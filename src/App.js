import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import Contact from './components/contact';
import Skills from './components/skills';
import Banner from './components/banner';
import Projects from './components/projects';
import Background from './components/background';
import scrollToComponent from 'react-scroll-to-component';

AOS.init({
  disable: 'mobile'
});

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Background/>
        <Navbar
         scrollContact={() => scrollToComponent(this.ContactForm, {
            offset: 0, align: 'top', duration: 1200
         })}
         scrollSkills={() => scrollToComponent(this.Skills, {
           offset: -100, align: 'top', duration: 1200
         })}
         scrollProjects={() => scrollToComponent(this.Projects, {
           offset: 0, align: 'top', duration: 1200
         })}
        />
        <div className="row">
          <div className="col-md-12">
            <Banner />
          </div>
        </div>

        <Skills
          ref={ (div) => { this.Skills = div; }}
        />

        <div className="row">
          <div className="col-md-12">
            <Projects
              ref={ (div) => { this.Projects = div; }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Contact
              ref={ (div) => { this.ContactForm = div; }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
