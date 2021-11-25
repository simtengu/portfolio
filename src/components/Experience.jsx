import React,{useEffect} from "react";
import AOS from "aos";
import { FaAngleDoubleRight } from "react-icons/fa";
import pc_bg from "../assets/backgrounds/bg4.png";
const Experience = () => {
  
  useEffect(() => {
  AOS.init({
    duration: 1000
  });
  return () => {  
  }
}, [])
  return (
    <>
      <div
        data-aos="slide-up"
        className="row justify-content-around align-items-center experience-container"
      >
        <div className="col-md-4">
          <div id="experience" className=" my-5 pt-5">
            <div className="pl-1 text-center">
              <p className="text-primary font-30 text-serif  ">Experience</p>
              <img
                style={{ maxWidth: "100%" }}
                src={pc_bg}
                alt="pc bg"
                className="img-block"
              />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="d-flex justify-content-start align-items-start">
            <div>
              <FaAngleDoubleRight className="text-primary" />
            </div>
            <div>
              <h3 className=" ml-2 text-muted p-0 m-0 font-20 text-mincho">
                Six months of Industrial Practical training counducted at
                Singida municipal council's ICT department in 2019.
              </h3>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start mt-2 mb-5">
            <div>
              <FaAngleDoubleRight className="text-primary" />
            </div>
            <div>
              <h3 className=" ml-2 text-muted p-0  m-0 font-20 text-mincho">
                Freelancing in web development since jan 2021 till now.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
