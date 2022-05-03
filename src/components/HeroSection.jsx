import React from 'react';
import albertPic from "../assets/rabi.png";
import { Link } from "react-router-dom";
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter } from "react-icons/fa";
const  HeroSection= () => {
    return (
      <>
      <div id="home">
        <div id="hero" className="">
          <div className="hero-dark-div d-flex flex-wrap pb-5">
            <div className="col-md-6 hero-left-flex-div mb-2">
              <div className=" about-home-div text-left">
                <h2
                  style={{
                    color: "#e1e6ea",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <span className="text-primary text-serif">Hi</span> I'm Albert Oscar
                  Simtengu
                </h2>
                <p className="text-mincho" style={{ color: "#e1e6ea" }}>
                  I'm a mid-level fullstack web developer from Tanzania and a
                  holder of bachelor degree in computer science . 
                  My favorite development stack is laravel/nodejs + reactjs(bootstrap,material ui) and sass.
                </p>
                <div className="d-flex my-1">
                  <a
                    href="https://web.facebook.com/albert.oscar.963"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FaFacebook
                      style={{ fontSize: "30px", color: "#3a589b" }}
                      className="mr-1"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/albertsimtengu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FaInstagram
                      style={{ fontSize: "30px", color: "pink" }}
                      className="mx-2"
                    />
                  </a>
                  <button
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    {" "}
                    <FaTwitter
                      style={{ fontSize: "30px", color: "#2fafe6" }}
                      className="mx-2"
                    />
                  </button>
                  <a
                    href="https://www.linkedin.com/in/albert-simtengu-5a93a01b8/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FaLinkedin
                      style={{ fontSize: "30px" }}
                      className="mx-2 text-info"
                    />
                  </a>
                </div>
     
                <Link
                  style={{
                    fontSize: "18px",
                    fontFamily: "'Libre Baskerville', serif",
                  }}
                  className="text-capitalize contact-me-btn btn btn-primary mt-3"
                  to="/about"
                >
                  more about me
                </Link>
                
              </div>
            </div>
            <div className="col-md-6 hero-right-flex-div pt-5">
              <img alt="aos" src={albertPic} />
            </div>
          </div>
        </div>

      </div>
      </>
    );
}
 
export default HeroSection;