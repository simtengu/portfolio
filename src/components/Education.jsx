import React, { useEffect, useState } from "react";
import { gradu_images } from "../data";
import { FaCheckDouble } from "react-icons/fa";
const Education = () => {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    let imgInterval = setInterval(() => {
      if (imgIndex > 4) {
        return setImgIndex(0);
      }
      setImgIndex(imgIndex + 1);
    }, 5000);
    return () => {
      clearInterval(imgInterval);
    };
  }, [imgIndex]);

  return (
    <>
      <div className="container py-5">
        <div
          id="education"
          className=" mb-md-5 py-2 py-md-5 d-flex justify-content-center"
        >
          <div className="text-center">
            <h1

              className=" text-primary text-heading"
            >
              Education
            </h1>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="row pt-5 pb-5 mt-3 justify-content-center"
        >
          <div className="col-md-6 text-center">
            <div
              className="w-100 "
              style={{ position: "relative", minHeight: "330px" }}
            >
              {gradu_images.map((img, index) => {
                return (
                  <img
                    alt="education_img"
                    className={
                      index === imgIndex
                        ? "img-style opacity-one"
                        : "img-style opacity-zero"
                    }
                    style={{borderRadius:20}}
                    key={index}
                    src={img}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="px-md-3 py-4">
              <div className="w-100 education-div">
                <div className="w-100  py-3 px-2 px-md-4 education-div-one">
                  {/* <h3 className="text-primary text-mincho font-weight-bold">Education qualifications</h3> */}
                  <div className="mt-4 px-2 text-paragraph">
                    <div className="d-flex">
                      <div>
                        <FaCheckDouble className="text-primary" />
                      </div>
                      <div className="px-2">
                        <h5
                          style={{ fontSize: "22px" }}
                          className="text-primary"
                        >
                          Bachelor degree in computer science
                        </h5>
                        <p
                          style={{ fontFamily: "times", fontSize: "20px" }}
                          className="text-dark-white text-lead"
                        >
                          Acquired between 2017 and 2020 at Arusha Technical
                          College located in Arusha city.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex">
                      <div>
                        <FaCheckDouble className="text-primary" />
                      </div>
                      <div className="px-2">
                        <h5
                          style={{ fontSize: "22px" }}
                          className="text-primary"
                        >
                          High level school certificate
                        </h5>
                        <p
                          style={{ fontFamily: "times", fontSize: "20px" }}
                          className="text-dark-white text-lead"
                        >
                          Acquired between 2015 and 2017 at Kahororo boys high
                          school located in Kagera region.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex">
                      <div>
                        <FaCheckDouble className="text-primary" />
                      </div>
                      <div className="px-2">
                        <h5
                          style={{ fontSize: "22px" }}
                          className="text-primary"
                        >
                          Ordinary level school certificate
                        </h5>
                        <p
                          style={{ fontFamily: "times", fontSize: "20px" }}
                          className="text-dark-white text-lead"
                        >
                          Acquired between 2011 and 2014 at Tabora boys
                          secondary school located within Tabora region.
                        </p>
                      </div>
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

export default Education;
