import React, { useEffect } from "react";
import AOS from "aos";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaLaravel,
  FaPhp,
  FaReact,
  FaSass,
  FaVuejs,
  FaJs,
  FaWordpress,
  FaStar,
} from "react-icons/fa";
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    return () => {};
  }, []);
  return (
    <>
      <div
        data-aos="slide-up"
        id="skills"
        className=" my-5 py-5 d-flex justify-content-center"
      >
        <div className="text-center">
          <h2 className="education text-mincho">Skills</h2>
          <div
            style={{
              width: "140px",
              height: "6px",
            }}
            className="mx-auto bg-warning"
          ></div>
        </div>
      </div>
      <div data-aos="slide-up" className="row">
        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaHtml5 style={{ fontSize: "40px", color: "orange" }} />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  HTML5
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaCss3 style={{ fontSize: "40px", color: "#3695cf" }} />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  CSS
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaJs style={{ fontSize: "40px", color: "#f9f900" }} />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  JAVASCRIPT
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaBootstrap style={{ fontSize: "40px", color: "indigo" }} />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  BOOTSTRAP
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaSass style={{ fontSize: "40px", color: "#ff00ff" }} />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  Sass
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaLaravel style={{ fontSize: "40px", color: "#ff4a4a" }} />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  LARAVEL
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaPhp style={{ fontSize: "40px", color: "#0066a1" }} />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  PHP
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaReact
                style={{
                  fontSize: "40px",
                  color: "#4ecfe6",
                  backgroundColor: "#292f34",
                }}
              />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  REACTJS
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div>
              <div className="">
                <h4
                  className="m-0"
                  style={{ color: "#0066a1", fontWeight: "bolder" }}
                >
                  jQuery
                </h4>
                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3 col-lg-2 my-2 p-1">
          <div className="card p-1">
            <div className="d-flex align-items-start">
              <FaWordpress
                style={{
                  fontSize: "40px",
                  color: "#5eb3ce",
                }}
              />
              <div className="ml-2">
                <p id="level" className="m-0" style={{ fontSize: "20px" }}>
                  WORDPRESS
                </p>

                <div className="d-flex align-items-center text-warning">
                  <FaStar className="" />
                  <FaStar className="m-1" />
                  <FaStar className="m-1" />
        
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Skills;
