import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {projects} from "../data";
const Projects = () => {
    const [isProjectHovered,setIsProjectHovered] = useState(false);
    const [hoveredProjectId,setHoveredProjectId] = useState(projects.length);
    const setProjectHovered = (id)=>{
       setIsProjectHovered(true);
       setHoveredProjectId(id);
    }
    const unsetProjectHovered = ()=>{
        setIsProjectHovered(false);
    }
    return (
      <>
        <div id="carrier-info-div" className="container-fluid mt-4">
          <div className="container">
            <div className="pt-4"></div>
            <div>
              <div id="projects" className=" mb-5 pt-2">
                <div className="pl-1 text-md-left text-center">
                  <h2 className="education">Projects</h2>
                  {/* <div
                  className="d-none d-md-block"
                  style={{
                    width: "260px",
                    height: "6px",
                    backgroundImage: "linear-gradient(to right,#fff,#000,#fff)",
                  }}
                ></div> */}
                </div>
              </div>

              <div className="row p-3 projects-row">
                {projects.map((project, index) => {
                  let { title, images, id, description } = project;
                  return (
                    <div
                      key={index}
                      className="col-sm-6 col-md-4 col-lg-3 py-2 px-4 my-2"
                    >
                      <Link to={`/projects/${id}`}>
                        <div
                          onMouseLeave={() => unsetProjectHovered()}
                          onMouseOver={() => setProjectHovered(id)}
                          className={
                            isProjectHovered && id == hoveredProjectId
                              ? `project bg-project card p-1`
                              : `project bg-cyan-pink card p-1`
                          }
                        >
                          <div className="projectDescription"></div>
                          <img className="img-fluid" src={images[0]} />
                          <div className="text-left pl-2 footer">
                            <p
                              className={
                                isProjectHovered && id == hoveredProjectId
                                  ? `text-light mt-2`
                                  : `text-project mt-2`
                              }
                            >
                              {title}
                            </p>
                            <p
                              className={
                                isProjectHovered && id == hoveredProjectId
                                  ? `text-light`
                                  : `text-project text-muted`
                              }
                              
                            >
                              {description.substr(0, 64)}{" "}
                              <span className="text-primary font-weight-bold">
                                ...
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Projects;