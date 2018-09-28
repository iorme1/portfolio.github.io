import React, { Component } from 'react';


class Project extends Component {
  render() {
    const {title, github, site, src, alt, desc } = this.props;

    return (
        <div className="col-md-4 mb-3">
          <div className="card"
            data-aos="flip-right"
            data-aos-duration="1200"
          >
            <img className="card-img-top" src={src} alt={alt}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <a href={github} className="btn btn-primary">View Github</a>
            </div>
          </div>
        </div>
    );
  }
}

export default Project;
