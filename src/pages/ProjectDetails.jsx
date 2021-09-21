import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.css";

const flickityOptions = {
  autoPlay: true,
  draggable: true,
  freeScroll: true,
  contain: true,
  wrapAround: true,
  pageDots: false,
};
const ProjectDetails = () => {

    
  const { project_id } = useParams("project_id");
  const project = projects.find(
    (project) => parseInt(project_id) === project.id
  );
  let {
    project_link,
    title,
    images,
    purpose,
    features,
    description,
    tools,
    status,
  } = project;
    let visitable = true;
    if( status === parseInt(100)){
       visitable = false;
    }
  return (
    <>
      <div className="fluid-container project-details-container">
        <div className="project-wrapper w-100 px-3 py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div
                style={{ backgroundColor: "#111111" }}
                className="col-md-9 col-lg-10 mt-5 py-2 rounded"
              >
                <div className="pl-1 ">
                  <h3 className=" mt-2 text-center text-project font-arial text-capitalize font-weight-bold">
                    {title}
                  </h3>
                </div>
                {/* project images carousel........................................ */}
                <Carousel images={images} />

                <div className="row">
                  <div className="col-md-6 my-2">
                    <div className="pl-1 ">
                      <h4 className="text-project font-arial text-capitalize font-weight-bold">
                        description
                      </h4>
                      <p
                        style={{ fontSize: "20px", fontFamily: "times" }}
                        className="text-muted"
                      >
                        {description}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 my-2">
                    <div className="pl-1 ">
                      <h4 className="text-project font-arial text-capitalize font-weight-bold">
                        purpose
                      </h4>
                      <p
                        style={{ fontSize: "20px", fontFamily: "times" }}
                        className="text-muted"
                      >
                        {purpose}
                      </p>
                    </div>
                  </div>

                  {features && (
                    <div className="col-md-10 my-2">
                      <div className="pl-1 ">
                        <h4 className="text-project font-arial text-capitalize font-weight-bold">
                          Features
                        </h4>

                        {features.map((feature, index) => (
                          <p
                            key={index}
                            style={{ fontSize: "20px", fontFamily: "times" }}
                            className="text-muted"
                          >
                            {feature}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="col-md-10 my-2">
                    <div className="pl-1 ">
                      <h4 className="text-project font-arial text-capitalize font-weight-bold">
                        Technologies Used
                      </h4>

                      <p
                        style={{ fontSize: "20px", fontFamily: "times" }}
                        className="text-muted"
                      >
                        {tools}
                      </p>
                    </div>
                  </div>
                  <div className=" my-2 col-12">
                    <div className="pl-1">
                      <h4 className="text-project font-arial text-capitalize font-weight-bold">
                        Project Status:{" "}
                        <span className="text-light">{status}%</span>
                      </h4>
                      <a href={project_link} target="_blank" rel="noreferrer">
                        <button
                          disabled={visitable}
                          style={{ fontFamily: "arial", fontSize: "22px" }}
                          className="mt-2 btn btn-success text-light"
                        >
                          visit project
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



function Carousel({images}) {
  return (
    <Flickity
      className={"main-carousel mx-auto text-center "}
      options={flickityOptions} 
    >
      
      {images.map((img, index) => {
        return (
          <div key={index} className=" col-sm-6 col-lg-8 my-3">
            <img className="img-fluid" alt="project_img" src={img} />
          </div>
        );
      })}
      
      {/* <div className="carousel-cell">
        <img style={{ width: "350px" }} src={gradu_images[0]} />
      </div>
      <div className="carousel-cell">
        {" "}
        <img style={{ width: "350px" }} src={gradu_images[1]} />
      </div>
      <div className="carousel-cell">
        <img style={{ width: "350px" }} src={gradu_images[2]} />
      </div> */}
    </Flickity>
  );
}

export default ProjectDetails;
