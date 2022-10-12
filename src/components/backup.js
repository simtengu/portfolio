import React from "react";
import { projects } from "../data";
const Projects = () => {

    return (
        <>
            <div id="carrier-info-div" className="container-fluid py-4 bgDark2">
                <div className="container">
                    <div className="pt-4"></div>
                    <div>
                        <div id="projects" className=" mb-5 pt-2">
                            <div className="pl-1 text-center">
                                <h3 style={{ textDecoration: "underline" }} className="education">Projects</h3>

                            </div>
                        </div>

                        <div className="row projects-row pb-5">
                            {projects.map((project, index) => {
                                let { title, images, tools, description, link } = project;
                                return (
                                    <div
                                        key={index}
                                        className="col-sm-6 col-md-4 col-lg-4 px-2 my-2"
                                    >
                                        <div

                                            className="project p-4"
                                        >
                                            <img className="img-fluid" src={images[0]} />
                                            <hr className="bg-info"></hr>
                                            <div className="mt-2">
                                                <p className=" fontSize mb-0 text-paragraph font-weight-bold project-title">
                                                    {title}
                                                </p>
                                                <div className="text-paragraph">

                                                    <p className="mb-0">{description}</p>

                                                    <p className="ml-2 font-weight-bold text-dark">({tools})</p>


                                                </div>
                                            </div>
                                            <a href={link} target="_blank" className="btn visitBtn rounded-pill mt-1 btn-outline-primary">
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
