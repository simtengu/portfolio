import React from 'react';
import albertPic from "../assets/albb.png";
const  HeroSection= () => {
    return (
      <>
        <div id="hero">
          <div id="home">
            <div className="w-100 hero-dark-div">
              <div className="d-flex justify-content-center">
                <div className="col-md-10">
                  <div className=" d-flex flex-wrap pb-5">
                    <div className="col-md-7 hero-left-flex-div mb-2">
                      <div className=" about-home-div text-left">
                        <h3 className="text-primary text-heading">Hello,</h3>
                        <h2
                          style={{
                            color: "#fff"
                          }}
                          className="font-weight-bold text-headingd name-title"
                        >
                          I'm Albert Oscar Simtengu
                        </h2>

                        <p
                          className="text-paragraph text-justify "
                          style={{ color: "#e1e6ea" }}
                        >
                          I'm a mobile & fullstack web developer from Tanzania and a
                          holder of bachelor degree in computer science.
                        </p>
                     
                        <div className="d-flex">
                          <a
                            style={{
                              fontSize: "14px",
                              fontFamily: "'Libre Baskerville', serif",
                            }}
                            className="text-capitalize  btn btn-md  btn-primary mt-3"
                            href="#about"
                          >
                            about me
                          </a>
                          <a
                            style={{
                              fontSize: "14px",
                              fontFamily: "'Libre Baskerville', serif",
                            }}
                            className="text-capitalize  btn btn-md btn-light mt-3 ml-2"
                            href="#contact"
                          >
                            contact me
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 hero-right-flex-div pt-5">
                      <div className="hero-pic-div p-3 mt-5">
                        <img alt="aos"  src={albertPic} />
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
}
 
export default HeroSection;
