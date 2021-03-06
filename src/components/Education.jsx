import React,{useEffect,useState} from 'react';
import {gradu_images} from "../data";
import { FaCheckDouble } from "react-icons/fa";
const Education = () => {
    const [imgIndex,setImgIndex] = useState(0);
   useEffect(()=>{
     let imgInterval = setInterval(() => {
         if (imgIndex > 4) {
             return setImgIndex(0);
         }
         setImgIndex(imgIndex + 1);
     }, 5000);
     return ()=>{ clearInterval(imgInterval)};
   },[imgIndex]);
   


    return (
      <>
        <div
          id="education"
          className=" my-5 py-5 d-flex justify-content-center"
        >
          <div data-aos="slide-up" className="text-center">
            <h2 className="education text-mincho">Education</h2>
            <div
              style={{
                width: "200px",
                height: "6px",
              
              }}
              className="mx-auto bg-warning"
            ></div>
          </div>
        </div>

        <div
          data-aos="slide-up"
          className="row pt-5 pb-5 mt-5 justify-content-center"
        >
          <div className="col-md-6 text-center">
            <div
              className="w-100 "
              style={{ position: "relative", minHeight: "430px" }}
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
                    key={index}
                    src={img}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="px-3 py-4">
              <div className="w-100 education-div">
                <div className="w-100  py-3 px-4 education-div-one">
                  <h3 className="text-dark">Education qualifications</h3>
                  <div className="mt-4 px-2">
                    <div className="d-flex">
                      <div>
                        <FaCheckDouble className="text-primary" />
                      </div>
                      <div className="px-2">
                        <h5 style={{ fontSize: "22px" }} className="text-dark">
                          Bachelor degree in computer science
                        </h5>
                        <p
                          style={{ fontFamily: "times", fontSize: "20px" }}
                          className="text-muted text-lead"
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
                        <h5 style={{ fontSize: "22px" }} className="text-dark">
                          High level school certificate
                        </h5>
                        <p
                          style={{ fontFamily: "times", fontSize: "20px" }}
                          className="text-muted text-lead"
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
                        <h5 style={{ fontSize: "22px" }} className="text-dark">
                          Ordinary level school certificate
                        </h5>
                        <p
                          style={{ fontFamily: "times", fontSize: "20px" }}
                          className="text-muted text-lead"
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
      </>
    );
}
 
export default Education;