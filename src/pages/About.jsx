import React,{useEffect} from "react";
import chelsea from "../assets/chelsea1.jpg";
import rabi from "../assets/aboutPic.png";
import chrisrock from "../assets/chrisrock.jpg";
import jwrld from "../assets/jwrld.jpg";
import tmaster from "../assets/tmaster.png";
import {
  FaCaretRight,
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
} from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="about-hero">
        <div className="w-100 about-div d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-center text-capitalize">more about me</h1>
        </div>
      </div>
      <div className="container">
        <div className=" my-5 pt-5 pb-3">
          <div className="pl-1">
            <h1
              style={{ textDecoration: "underline" }}
              className="text-project font-arial text-capitalize font-weight-bold"
            >
              about me
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <img
              src={rabi}
              className="img-fluid rounded-circle"
              alt="aos img"
            />
          </div>
          <div className="col-md-8 col-lg-8 pt-4 pt-lg-0 pl-lg-5 content">
            <h3 className="text-project font-arial font-weight-bold">
              Albert Oscar Simtengu
            </h3>
            <p className="font-italic fontSize">
              Iam a mid-level fullstack developer with one year of experience.
              My favorite development stack is laravel for backend and
              vuejs/reactjs for frontend as well as bootstrap and sass for
              styling frontend components.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <p className=" pb-0 mb-0 ">
                  <FaCaretRight className="text-project" />
                  <strong>Birthday:</strong> 28 Jan 1997
                </p>
                <p className=" pb-0 mb-0 ">
                  <FaCaretRight className="text-project" />
                  <strong>Website:</strong> www.chuobusiness.com
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
              <div className="col-lg-6">
                <p className=" pb-0 mb-0 ">
                  <FaCaretRight className="text-project" />
                  <strong>Age:</strong> 24
                </p>
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
            <div className="py-3">
              <h3 className="text-project font-weight-bold font-arial">
                Fullstack web developer
              </h3>
              <p className="font-italic fontSize">
                I started coding at college when i was studying for my Computer
                Science Degree from 2017-2020, during that period i learnt all
                basic technologies for web development then after i took my
                carrier to the next level by learning some of the latest modern
                frameworks like laravel,vuejs and reactjs. My goal is to be most
                efficient with all technologies that i have learnt so far and in
                the future i would like to do mobile development as well.
              </p>
            </div>
          </div>
        </div>
        <div className="section-title py-5 mt-5">
          <h2
            style={{ textDecoration: "underline" }}
            className="text-project font-arial  font-weight-bold"
          >
            Skills
          </h2>
        </div>

        <div className="row skills-row">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaHtml5 style={{ fontSize: "40px", color: "orange" }} />
            <p>advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaCss3 style={{ fontSize: "40px", color: "#3695cf" }} />
            <p>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaJs style={{ fontSize: "40px", color: "#f9f900" }} />
            <p>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaBootstrap style={{ fontSize: "40px", color: "indigo" }} />
            <p>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaSass style={{ fontSize: "40px", color: "#ff00ff" }} />
            <p>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaLaravel style={{ fontSize: "40px", color: "#ff4a4a" }} />
            <p>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaVuejs style={{ fontSize: "40px", color: "darkgreen" }} />
            <p>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaPhp style={{ fontSize: "40px", color: "#0066a1" }} />
            <p>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaReact
              style={{
                fontSize: "40px",
                color: "#4ecfe6",
                backgroundColor: "#292f34",
              }}
            />
            <p>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <h2 style={{ color: "#0066a1", fontWeight: "bolder" }}>jQuery</h2>
            <p>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaWordpress style={{ fontSize: "40px", color: "#5eb3ce" }} />
            <p>Mid level</p>
          </div>
        </div>
        {/* Interests section .................................................... */}
        <div className="section-title py-5 mt-5">
          <h2
            style={{ textDecoration: "underline" }}
            className="text-project font-arial  font-weight-bold"
          >
            Interests
          </h2>
        </div>

        <div className="row py-4">
          <div className="col-xl-3 col-md-6">
            <div className=" p-2 shadow interest-card">
              <img
                src={chelsea}
                alt="aos"
                className="card-img-top img-thumbnail"
              />
              <div className="mt-2">
                <h4 className="card-title">Football</h4>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">
                    Favorite clubs: Chelsea fc & Azam fc
                  </p>
                </div>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">
                    Favorite league: English premier league
                  </p>
                </div>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">Favorite Player: Lionel Messi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mt-2">
            <div className=" p-2 shadow interest-card">
              <img
                src={tmaster}
                alt="aos"
                className="card-img-top img-thumbnail"
              />
              <div className="mt-2">
                <h4 className="card-title">Typing</h4>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">Average speed: 46 WPM</p>
                </div>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">
                    Favorite typing program: Typing Master
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mt-2">
            <div className=" p-2 shadow interest-card">
              <img
                src={chrisrock}
                alt="aos"
                className="card-img-top img-thumbnail"
              />
              <div className="mt-2">
                <h4 className="card-title">Comedy</h4>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">
                    Favorite comedians: Dave Chappele, Chris Rock, Martin
                    Lawrence, Eddie Griffin & Katt Williams
                  </p>
                </div>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">
                    Favorite performance: Voodoo Child(Eddie Griffin) & One Man
                    (steve harvey)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 mt-2">
            <div className=" p-2 shadow interest-card">
              <img
                src={jwrld}
                alt="aos"
                className="card-img-top img-thumbnail"
              />
              <div className="mt-2">
                <h4 className="card-title">Music</h4>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">
                    Favorite musicians: Christopher Martin, Runtown, Asap Rocky,
                    Quando Rondo, Juice Wrld
                  </p>
                </div>
                <div className="d-flex">
                  <p>
                    <FaCaretRight className="text-project" />
                  </p>
                  <p className=" pb-0 mb-0 ">
                    Favorite Songs: life's s holiday(Christopher Martin) , The
                    gambler(Kenny Rodgers), SnowChild(The weeknd)
                    <span className="d-sm-none">
                      , Execuse me(Asap Rocky) , Get down(Quando Rondo) ,Gone
                      till November(Rod wave), Make believe(Juice Wrld)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Interests section............................................................... */}
      </div>
    </>
  );
};
export default About;
