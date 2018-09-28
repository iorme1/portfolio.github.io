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
      {
        id: 1, title: travBlogData.title , github: travBlogData.github,
        site: travBlogData.site , src: travBlogData.src ,
        alt: travBlogData.title.alt, desc: travBlogData.desc
      },
      {
        id: 2, title: railsDBData.title , github: railsDBData.github,
        site: railsDBData.title, src: railsDBData.src,
        alt: railsDBData.alt, desc: railsDBData.desc,
      },
      {
        id: 3, title: newStandardData.title , github: newStandardData.github,
        site: newStandardData.site , src: newStandardData.src,
        alt: newStandardData.alt , desc: newStandardData.desc
      },
      {
        id: 4, title: blocJamsData.title, github: blocJamsData.github,
        site: blocJamsData.site, src: blocJamsData.src ,
        alt: blocJamsData.alt , desc: blocJamsData.desc,
      },
      {
        id: 5, title: blocipediaData.title , github: blocipediaData.github,
        site: blocipediaData.site, src: blocipediaData.src,
        alt: blocipediaData.alt , desc: blocipediaData.desc,
      },
      {
        id: 6, title: bloccitData.title, github: bloccitData.github,
        site: bloccitData.site, src: bloccitData.src ,
        alt: bloccitData.alt , desc: bloccitData.desc,
      },
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
