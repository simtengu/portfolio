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
        <div id="projects" className=" my-5 pt-5">
          <div className="pl-1 text-md-left text-center">
            <h2 className="education">Projects</h2>
            <div
              className="d-none d-md-block"
              style={{
                width: "260px",
                height: "6px",
                backgroundImage: "linear-gradient(to right,#fff,#000,#fff)",
              }}
            ></div>
          </div>
        </div>
        <div className="row p-3 projects-row">
          {projects.map((project, index) => {
            let { title, images, id } = project;
            return (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3 p-2">
                <Link to={`/projects/${id}`}>
                  <div
                    onMouseLeave={() => unsetProjectHovered()}
                    onMouseOver={() => setProjectHovered(id)}
                    className={
                      isProjectHovered && id == hoveredProjectId
                        ? `project bg-project card p-1`
                        : `project bg-light card p-1`
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
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
}
 
export default Projects;