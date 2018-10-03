import React, { Component } from 'react';
import Project from './project';
import travBlogData from '../project-data/travelBlog.js';
import railsDBData from  '../project-data/railsDB.js';
import newStandardData from '../project-data/newStandard.js'
import blocJamsData from '../project-data/blocJams.js';
import blocipediaData from '../project-data/blocipedia.js';
import bloccitData from '../project-data/bloccit.js';
import { ProjectContainer, Title } from '../styles/projects.js';


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
      <ProjectContainer>

        <div className="row">
          <div className="col-md-12">
            <Title className="text-center m-5">myProjects</Title>
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

      </ProjectContainer>
    );
  }
}

export default Projects;
