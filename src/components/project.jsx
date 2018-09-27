import React, { Component } from 'react';
import blocJams from '../images/projects/bloc-jams.png';
import bloccit from '../images/projects/bloccit.png';
import blocipedia from '../images/projects/blocipedia.png';
import newStandard from '../images/projects/blocipedia.png';
import railsDB from '../images/projects/rails-db.png';
import travelBlog from '../images/projects/travel-blog.png';


class Project extends Component {

  render() {
    return (
      <div
        className="projects-container"
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center m-5">My Projects</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={travelBlog}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={railsDB}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={newStandard}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={blocipedia}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={bloccit}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card">
              <img className="card-img-top" src={blocJams}/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
