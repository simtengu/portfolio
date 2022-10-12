import React,{useEffect} from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import { projects } from "../data";
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    return () => {};
  }, []);
  return (
    <>
      <div id="carrier-info-div" className="container-fluid py-4 bgDark2">
        <div className="container">
          <div className="pt-4"></div>
          <div>
            <div id="projects" className=" mb-5 pt-2">
              <div className="pl-1 text-center">
                <h1 data-aos="fade-up" className=" text-primary text-heading">
                  Projects
                </h1>
              </div>
            </div>

            <div className="row pb-5 justify-content-center">
              {projects.map((project, index) => {
                let { title, images, tools, description, link,repo_link } = project;
                return (
                  <div
                    key={index}
                    className="col-xs-11 col-md-9 col-lg-10 px-2 mt-4"
                    data-aos="fade-right"
                  >
                    <div className="container p-2 p-md-4">
                      <div className=" row pb-3">
                        <div className="col-md-5">
                          {" "}
                          <img
                            className="img-fluid img-thumbnail"
                            style={{ borderRadius: 10 }}
                            src={images[0]}
                            alt={title}
                          />
                        </div>
                        <div className="col-md-7 mt-4 mt-md-0">
                          <div
                            style={{ height: "100%" }}
                            className="d-flex flex-column justify-content-start"
                          >
                            <div className=" ">
                              <h3 className=" mb-2 text-paragraph font-weight-bold  text-primary project-title">
                                {title}
                              </h3>
                              <div className="text-paragraph">
                                <p
                                  className="mb-0 "
                                  style={{ color: "#f2f2f2", fontSize: 18 }}
                                >
                                  {description}
                                </p>

                                <p
                                  className=" font-weight-bold mt-3"
                                  style={{ color: "#848c95" }}
                                >
                                  Tools used
                                </p>
                                <Row>
                                  {tools.split(",").map((tool) => (
                                    <div
                                      key={tool}
                                      className="d-flex align-items-start mt-1 mt-md-0"
                                    >
                                      <p className="m-0 ml-1 ml-md-0">
                                        <FaCheckCircle className="text-primary" />
                                      </p>
                                      <p className="text-paragraph p-0 m-0 ml-2 text-light">
                                        {tool}
                                      </p>
                                    </div>
                                  ))}
                                </Row>
                              </div>
                            </div>
                            <div className="d-flex mt-4">
                              <a
                                href={repo_link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm btn-outline-primary rounded-pill  "
                              >
                                Github repo
                              </a>
                              <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm btn-primary rounded-pill ml-2"
                              >
                                visit project
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style={{ height: 7 }} />
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

export const Row = (props) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap py-1 w-100">
        {props.children}
      </div>
    </>
  );
};

export default Projects;
