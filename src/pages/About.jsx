import React, { useEffect } from "react";
import AOS from "aos";
import rabi from "../assets/rabi_.jpg";
import pc_bg from "../assets/backgrounds/bg3C.png";

import {
  FaCaretRight,
} from "react-icons/fa";
import Interests from "../components/Interests";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    return () => {};
  }, []);

  return (
    <>
      <div id="about" className="container-fluid bgDark1 pb-3 pb-md-5">
        <div className="container">
          <div className=" mb-md-5 py-5 py-md-5 d-flex justify-content-center">
            <div className="text-center">
              <h1 data-aos="fade-up" className=" text-primary text-heading">
                About me
              </h1>
            </div>
          </div>
          <div className="row align-items-center pb-4">
            <div id="carrier-info-divv" className="col-md-4 col-lg-4">
              <img
                data-aos="zoom-in-up"
                src={rabi}
                className="img-fluid rounded-circle"
                alt="aos img"
              />
            </div>
            <div
              data-aos="slide-up"
              className="col-md-8 col-lg-8 pt-4 pt-lg-0 pl-lg-5 content"
            >
              <h3 className="text-primary font-weight-bold">
                Albert Oscar Simtengu
              </h3>
              <p className=" fontSize text-dark-white text-paragraph">
                Iam a mobile app and fullstack web developer from Tanzania. My favorite development
                stack is flutter(Dart) for mobile development, laravel/nodejs for backend and reactjs for frontend as
                well as bootstrap,material ui and sass for styling frontend
                components.
              </p>
              <div className="row text-paragraph">
                <div className="col-lg-6 text-dark-white">
                  <p className=" pb-0 mb-0 ">
                    <FaCaretRight className="text-project" />
                    <strong>Birthday:</strong> 28 Jan 1997
                  </p>
                  <p className=" pb-0 mb-0 ">
                    <FaCaretRight className="text-project" />
                    <strong>Website:</strong>{" "}
                    https://simtenguportfolio.netlify.app/
                  </p>
                  <p className=" pb-0 mb-0 ">
                    <FaCaretRight className="text-project" />
                    <strong>Phone:</strong> +255 710162838
                  </p>
                  <p className=" pb-0 mb-0 ">
                    <FaCaretRight className="text-project" />
                    <strong>City:</strong> Arusha, Tanzania
                  </p>
                </div>
                <div className="col-lg-6 text-dark-white">
              
                  <p className=" pb-0 mb-0 ">
                    <FaCaretRight className="text-project" />
                    <strong>Degree:</strong> Computer science
                  </p>
                  <p className=" pb-0 mb-0 ">
                    <FaCaretRight className="text-project" />
                    <strong>Email:</strong> albertsimtengu@gmail.com
                  </p>
                  <p className=" pb-0 mb-0 ">
                    <FaCaretRight className="text-project" />
                    <strong>Freelance:</strong> Available
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="slide-up"
            className="row px-md-5 mt-3 mt-md-5 py-4 align-items-center"
          >
            <div className="col-md-6 text-center mt-md-5">
              <h3 className="text-primary font-weight-bold ">
                Fullstack web developer
              </h3>

              <div className="p-2">
                <img src={pc_bg} className="img-fluid" alt="aos img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="py-2 mt-5">
                <p className="fontSize text-paragraph text-dark-white">
                  I started coding at college when i was studying for my
                  Computer Science Degree from 2017-2020, during that period i
                  learnt all basic technologies for web development. After my
                  time at College I took my carrier to the next level by
                  learning some of the latest modern frameworks like laravel,
                  expressJs and reactJs and flutter. My goal is to be as much efficient as i can possibly be with
                  all technologies that i have learnt so far.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Interests />
      </div>
    </>
  );
};
export default About;
