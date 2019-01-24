import React, { Component } from 'react';
import Project from './project';
import { ProjectContainer, Title } from '../styles/projects.js';
import projects from '../project-data/projects';

class Projects extends Component {
  render() {
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
