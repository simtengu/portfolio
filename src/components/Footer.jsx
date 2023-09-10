import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaQuoteLeft, FaQuoteRight, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
      <>
        <footer id="footer" className=" pb-1 pt-5 text-center">
          {/* #2d2f30 */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-9 text-center">
                <h3
                  className="text-primary"
                  style={{
                    fontSize: "23px",
                    fontFamily: "times new roman",
                    fontWeight: "bolder",
                  }}
                >
                  ALBERT OSCAR SIMTENGU
                </h3>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "'Lobster', cursive",
                    color: "#2fafe6",
                  }}
                >
                  <sup>
                    <FaQuoteLeft />
                  </sup>{" "}
                  With the new day comes new strength and new thoughts.{" "}
                  <sup>
                    <FaQuoteRight />
                  </sup>
                </p>
                <div className="d-flex my-1 w-100 justify-content-center">
                  <a
                    href="https://web.facebook.com/albert.oscar.963"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaFacebook
                      style={{ fontSize: "30px", color: "#0062c4" }}
                      className="mr-1"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/albertsimtengu/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaInstagram
                      style={{ fontSize: "30px", color: "pink" }}
                      className="mx-2"
                    />
                  </a>
                  <button className="btn">
                    <FaTwitter
                      style={{ fontSize: "30px", color: "#2fafe6" }}
                      className="mx-2"
                    />
                  </button>
                  <a
                    href="https://www.linkedin.com/in/albert-simtengu-5a93a01b8/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaLinkedin
                      style={{ fontSize: "30px" }}
                      className="mx-2 text-primary"
                    />
                  </a>
                </div>


              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
 
export default Footer;