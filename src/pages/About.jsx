import React, { useEffect } from "react";
import AOS from "aos";
import chelsea from "../assets/chelsea1.jpg";
import rabi from "../assets/rabi_.jpg";
import pc_bg from "../assets/backgrounds/bg3.png";
import chrisrock from "../assets/chrisrock.jpg";
import jwrld from "../assets/jwrld.jpg";
import tmaster from "../assets/tmaster.png";
import {
  FaCaretRight,
} from "react-icons/fa";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    return () => {};
  }, []);

  return (
    <>
      <div id="about" className="about-hero">
        <div className="w-100 about-div d-flex flex-column align-items-center justify-content-center">
          <h1
            className="text-center text-capitalize"
            style={{ fontFamily: "Open Sans, Arial, Helvetica, sans-serif" }}
          >
            more about me
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-12">
            <div className=" my-4 pt-5 pb-3">
              <div className="pl-1"></div>
            </div>
          </div>

          <div id="carrier-info-divv" className="col-md-4 col-lg-4">
            <img
              src={rabi}
              className="img-fluid rounded-circle"
              alt="aos img"
            />
          </div>
          <div
            data-aos="slide-up"
            className="col-md-8 col-lg-8 pt-4 pt-lg-0 pl-lg-5 content"
          >
            <h3
              style={{ fontFamily: "Open Sans, Arial, Helvetica, sans-serif" }}
              className="text-project font-weight-bold"
            >
              Albert Oscar Simtengu
            </h3>
            <p
              style={{ fontFamily: "Open Sans, Arial, Helvetica, sans-serif" }}
              className=" fontSize"
            >
              Iam a mid-level fullstack developer from Tanzania. My favorite
              development stack is laravel/nodejs for backend and reactjs for
              frontend as well as bootstrap,material ui and sass for styling
              frontend components.
            </p>
            <div
              style={{ fontFamily: "Open Sans, Arial, Helvetica, sans-serif" }}
              className="row"
            >
              <div className="col-lg-6">
                <p className=" pb-0 mb-0 ">
                  <FaCaretRight className="text-project" />
                  <strong>Birthday:</strong> 28 Jan 1997
                </p>
                <p className=" pb-0 mb-0 ">
                  <FaCaretRight className="text-project" />
                  <strong>Website:</strong>{" "}
                  https://simtengu.github.io/portfolio/
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
                  <strong>Age:</strong> 25
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
          </div>
        </div>
        <div
          data-aos="slide-up"
          className="row px-md-5 mt-3 mt-md-5 py-4 align-items-center"
        >
          <div className="col-md-6 text-center">
            <h3 className="text-project font-weight-bold font-arial">
              Fullstack web developer
            </h3>
            <div className="p-2">
              <img src={pc_bg} className="img-fluid" alt="aos img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="py-2 mt-5">
              <p
                style={{
                  fontFamily: "Open Sans, Arial, Helvetica, sans-serif",
                }}
                className="fontSize"
              >
                I started coding at college when i was studying for my Computer
                Science Degree from 2017-2020, during that period i learnt all
                basic technologies for web development then after i took my
                carrier to the next level by learning some of the latest modern
                frameworks like laravel,expressjs and reactjs. My goal is to be
                most efficient with all technologies that i have learnt so far
                and in the future i would like to do mobile development as well.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="interests pb-3">
        {/* Interests section .................................................... */}
        <div className="container">
          <div className="section-title py-5 mt-5">
            <h2
              style={{ textDecoration: "underline" }}
              className="text-project font-arial  font-weight-bold"
            >
              Interests
            </h2>
          </div>

          <div className="row py-4">
            <div className="col-xl-3 col-md-6 mt-3">
              <div className=" p-3 border shadow interest-card">
                <img src={chelsea} alt="aos" className="card-img-top rounded" />
                <div className="mt-2">
                  <h4
                    className="card-title"
                    style={{
                      fontFamily: "Open Sans, Arial, Helvetica, sans-serif",
                    }}
                  >
                    Football
                  </h4>
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
            <div className="col-xl-3 col-md-6 mt-3">
              <div className=" p-3 border shadow interest-card">
                <img src={tmaster} alt="aos" className="card-img-top rounded" />
                <div className="mt-2">
                  <h4
                    className="card-title"
                    style={{
                      fontFamily: "Open Sans, Arial, Helvetica, sans-serif",
                    }}
                  >
                    Typing
                  </h4>
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

            <div className="col-xl-3 col-md-6 mt-3">
              <div className=" p-3 border shadow interest-card">
                <img
                  src={chrisrock}
                  alt="aos"
                  className="card-img-top rounded"
                />
                <div className="mt-2">
                  <h4
                    className="card-title"
                    style={{
                      fontFamily: "Open Sans, Arial, Helvetica, sans-serif",
                    }}
                  >
                    Comedy
                  </h4>
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
                      Favorite performance: Voodoo Child(Eddie Griffin) & One
                      Man (steve harvey)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mt-3">
              <div className="p-3 border shadow interest-card">
                <img src={jwrld} alt="aos" className="card-img-top rounded" />
                <div className="mt-2">
                  <h4
                    className="card-title"
                    style={{
                      fontFamily: "Open Sans, Arial, Helvetica, sans-serif",
                    }}
                  >
                    Music
                  </h4>
                  <div className="d-flex">
                    <p>
                      <FaCaretRight className="text-project" />
                    </p>
                    <p className=" pb-0 mb-0 ">
                      Favorite musicians: Christopher Martin, Runtown, Asap
                      Rocky, Quando Rondo, Juice Wrld
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
        </div>

        {/* End of Interests section............................................................... */}
      </div>
    </>
  );
};
export default About;
