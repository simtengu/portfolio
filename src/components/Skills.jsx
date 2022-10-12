import React, { useEffect } from "react";
import AOS from "aos";
import mongodbImg from "../assets/mongo.jpg";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaLaravel,
  FaReact,
  FaSass,
  FaJs,
  FaWordpress,
  FaStar,
  FaNodeJs,
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
      <div id="skills" className="container mb-5 py-3 ">
        <div className=" mb-md-5 py-2 py-md-5 d-flex justify-content-center">
          <div data-aos="fade-up" className="text-center">
            <h1 className=" text-primary text-heading">Skills</h1>
          </div>
        </div>

        <div data-aos="fade-up" className="row justify-content-center my-2">
          <div className="col-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4 skill-card"
            >
              <h4 className="text-light">html</h4>
              <div className="py-2">
                <FaHtml5 style={{ fontSize: "40px", color: "orange" }} />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4 "
            >
              <h4 className="text-light">css</h4>
              <div className="py-2">
                <FaCss3 style={{ fontSize: "40px", color: "#3695cf" }} />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4"
            >
              <h4 className="text-light">Javascript</h4>
              <div className="py-2">
                <FaJs style={{ fontSize: "40px", color: "#f9f900" }} />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4 skill-card"
            >
              <h4 className="text-light">Bootstrap</h4>

              <div className="py-2">
                <FaBootstrap style={{ fontSize: "40px", color: "#7000df" }} />
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4"
            >
              <h4 className="text-light">Sass</h4>

              <div className="py-2">
                <FaSass style={{ fontSize: "40px", color: "#ff00ff" }} />
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4"
            >
              <h4 className="text-light">Laravel</h4>

              <div className="py-2">
                <FaLaravel style={{ fontSize: "40px", color: "#ff4a4a" }} />
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4"
            >
              <h4 className="text-light">Jquery</h4>

              <div className="py-2">
                <h4
                  className="m-0"
                  style={{ color: "#0066a1", fontWeight: "bolder" }}
                >
                  jQuery
                </h4>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4"
            >
              <h4 className="text-light">React js</h4>

              <div className="py-2">
                <FaReact
                  style={{
                    fontSize: "40px",
                    color: "#4ecfe6",
                    backgroundColor: "#292f34",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4"
            >
              <h4 className="text-light">Node js</h4>

              <div className="py-2">
                <FaNodeJs
                  style={{
                    fontSize: "38px",
                    color: "#409f39",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4"
            >
              <h4 className="text-light">Express js</h4>

              <div className="py-2">
                <h4
                  className="m-0"
                  style={{ color: "#409f39", fontWeight: "bolder" }}
                >
                  EXPRESS JS
                </h4>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4 "
            >
              <h4 className="text-light">Mongodb</h4>

              <div className="py-2">
                <img
                  src={mongodbImg}
                  style={{ width: "60px" }}
                  alt="mongo pic"
                />
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 p-4">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4"
            >
              <h4 className="text-light">wordpress</h4>

              <div className="py-2">
                <FaWordpress
                  style={{
                    fontSize: "40px",
                    color: "#5eb3ce",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 ">
        <div className=" mb-md-5 py-2 py-md-5 d-flex justify-content-center">
          <div className="text-center">
            <h1 data-aos="fade-up" className=" text-primary text-heading">
              My services
            </h1>
          </div>
        </div>

        <div data-aos="fade-up" className="row my-3 py-3">
          <div className="col-md-4 py-2 d-flex justify-content-center">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4 w-75"
            >
              <h3
                // style={{ color: "#3c92fb" }}
                className=" text-paragraph text-center text-light font-weight-bold mb-0"
              >
                Backend
              </h3>
              <div
                style={{ position: "relative", bottom: 7 }}
                className="text-center"
              >
                <p className="text-muted m-0 text-paragraph font-weight-bold">
                  Development
                </p>
              </div>

              <div className="">
                <div className="d-flex text-paragraph">
                  <div>
                    <FaStar className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 style={{ fontSize: "18px" }} className="text-light">
                      NodeJs-ExpressJs
                    </h5>
                  </div>
                </div>

                <div className="d-flex text-paragraph">
                  <div>
                    <FaStar className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 style={{ fontSize: "18px" }} className="text-light">
                      Laravel
                    </h5>
                  </div>
                </div>

                <div className="d-flex text-paragraph">
                  <div>
                    <FaStar className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 style={{ fontSize: "18px" }} className="text-light">
                      Mongodb & Mysql
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-2 d-flex justify-content-center">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4 w-75"
            >
              <h3
                // style={{ color: "#3c92fb" }}
                className=" text-paragraph text-center text-light font-weight-bold mb-0"
              >
                Frontend
              </h3>

              <div
                style={{ position: "relative", bottom: 7 }}
                className="text-center"
              >
                <p className="text-muted m-0 text-paragraph font-weight-bold">
                  Development
                </p>
              </div>

              <div className="mt-1">
                <div className="d-flex text-paragraph">
                  <div>
                    <FaStar className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 style={{ fontSize: "18px" }} className="text-light">
                      React Js
                    </h5>
                  </div>
                </div>

                <div className="d-flex text-paragraph">
                  <div>
                    <FaStar className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 style={{ fontSize: "18px" }} className="text-light">
                      Material UI
                    </h5>
                  </div>
                </div>

                <div className="d-flex text-paragraph">
                  <div>
                    <FaStar className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 style={{ fontSize: "18px" }} className="text-light">
                      Bootstrap
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-2 d-flex justify-content-center">
            <div
              style={{ backgroundColor: "#303131", borderRadius: 17 }}
              className="p-4 w-75"
            >
              <h3
                // style={{ color: "#3c92fb" }}
                className=" text-paragraph text-center text-light font-weight-bold mb-0"
              >
                APIs
              </h3>
              <div
                style={{ position: "relative", bottom: 7 }}
                className="text-center"
              >
                <p className="text-muted m-0 text-paragraph font-weight-bold">
                  Dev & integration
                </p>
              </div>

              <div className="mt-1">
                <div className="d-flex text-paragraph">
                  <div>
                    <FaStar className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 style={{ fontSize: "18px" }} className="text-light">
                      MERN Stack
                    </h5>
                  </div>
                </div>

                <div className="d-flex text-paragraph">
                  <div>
                    <FaStar className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 style={{ fontSize: "18px" }} className="text-light">
                      Laravel & jQuery & ajax
                    </h5>
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

export default Skills;
