import React, { useState } from "react";
// import axios from "axios";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   if (name && email && subject && message) {
  //     let data = { name, email, subject, message };
  //     axios
  //       .post("http://chuobusiness.mbeyamilk.com/api/portfolio_message", data)
  //       .then((rs) => {
  //         alert("Your message has been sent. Thank your!");
  //         setName("");
  //         setEmail("");
  //         setSubject("");
  //         setMessage("");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         alert("something went wrong while sending your message");
  //       });
  //     return;
  //   }
  //   alert("make sure you fill all required fields before sending your email");
  // };
  return (
    <>
      <div
        id="contact"
        style={{ backgroundColor: "white" }}
        className="fluid-container "
      >
        <div className="container mb-5">
          <div className=" my-5 pt-5">
            <div className="pl-1">
              <h1
                style={{ textDecoration: "underline" }}
                className="text-project font-arial text-capitalize font-weight-bold"
              >
                Find me
              </h1>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="container-fluid">
                  <div className="row text-left py-2 mt-md-5">
                    <div className="col-md-6  ">
                      <div className="card contact-card">
                        <a
                          href="https://web.facebook.com/albert.oscar.963"
                          className="btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookSquare
                            style={{ fontSize: "30px", color: "#0062c4" }}
                            className="mr-2"
                          />
                          Albert oscar simtengu
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="card contact-card">
                        <a
                          href="https://www.instagram.com/albertsimtengu/"
                          className="btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaInstagramSquare
                            style={{ fontSize: "30px", color: "pink" }}
                            className="mr-2"
                          />
                          Albert oscar simtengu
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="card contact-card">
                        <button className="btn">
                          <FaTwitterSquare
                            style={{ fontSize: "30px", color: "#2fafe6" }}
                            className="mr-2"
                          />
                          Albert oscar simtengu
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="card contact-card">
                        <a
                          href="https://www.linkedin.com/in/albert-simtengu-5a93a01b8/"
                          className="btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedin
                            style={{ fontSize: "30px" }}
                            className="mr-2 text-info"
                          />
                          Albert oscar simtengu
                        </a>
                      </div>
                    </div>

                    <div className="col-md-6 ">
                      <div className="card contact-card">
                        <a
                          href="https://github.com/simtengu"
                          className="btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub
                            style={{ fontSize: "30px" }}
                            className="mr-2"
                          />
                          Albert oscar simtengu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <div className="p-4   py-2 mt-md-5 card mb-2">
                <div className="">
                  <h4 style={{ color: "#0066a1" }}> Location:</h4>
                  <p className="my-0">Misuna, nearby bus stand, Singida Municipality </p>
                </div>
                <div className="">
                  <h4 style={{ color: "#0066a1" }}> Email:</h4>
                  <p className="my-0">albertsimtengu@gmail.com</p>
                  <p className="my-0">rabiasoscar@gmail.com</p>
                </div>
                <div className="">
                  <h4 style={{ color: "#0066a1" }}> Call:</h4>
                  <div className="d-flex">
                  <p>+255 710162838 , </p>
                  <p>+255 769873401 , </p>
                  <p>+255 625772838 , </p>

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

export default Contact;
