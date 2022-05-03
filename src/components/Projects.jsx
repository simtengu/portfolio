import React, { useState } from "react";
import { projects } from "../data";
const Projects = () => {

  return (
    <>
      <div id="carrier-info-div" className="container-fluid py-4">
        <div className="container">
          <div className="pt-4"></div>
          <div>
            <div id="projects" className=" mb-5 pt-2">
              <div className="pl-1 text-left">
                <h2 className="education">Projects</h2>
                <div
                  className="bg-warning"
                  style={{
                    width: "150px",
                    height: "6px",
                  }}
                ></div>
              </div>
            </div>

            <div className="row projects-row">
              {projects.map((project, index) => {
                let { title, images, tools, description,link } = project;
                return (
                  <div
                    key={index}
                    className="col-sm-6 col-md-4 col-lg-4 px-2 my-2"
                  >
                    <div

                      className="project p-2"
                    >
                      <img className="img-fluid" src={images[0]} />
                      <div className="mt-2">
                        <p className=" fontSize mb-0 font-weight-bold project-title">
                          {title}
                        </p>
                        <p className="mb-0">{description}</p>
                        <div className="d-flex align-items-center flex-wrap">

                        <p className="font-weight-bold">Tools:</p>
                       

                        <p className="ml-2">{tools} </p>
                        
                        </div>
                      </div>
                      <a href={link} target="_blank" className="btn btn-primary rounded-pill mt-1 visitBtn">
                        visit project
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
