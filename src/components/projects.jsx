import React, { Component } from 'react';
import Project from './project';
import travBlogData from '../project-data/travelBlog.js';
import railsDBData from  '../project-data/railsDB.js';
import newStandardData from '../project-data/newStandard.js'
import blocJamsData from '../project-data/blocJams.js';
import blocipediaData from '../project-data/blocipedia.js';
import bloccitData from '../project-data/bloccit.js';

class Projects extends Component {
  state = {
    projects: [
      travBlogData,
      railsDBData,
      newStandardData,
      blocJamsData,
      blocipediaData,
      bloccitData
    ]
  };

  render() {
    const projects = this.state.projects;

    return (
      <div className="projects-container">

        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center m-5 proj-sect-title">myProjects</h3>
          </div>
        </div>

        <div className="row">
          {projects.map(project => (
            <Project
              key={project.id}
              title={project.title}
              github={project.github}
              site={project.site}
              src={project.src}
              alt={project.alt}
              desc={project.desc}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default Projects;
