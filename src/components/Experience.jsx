import React, { useEffect } from "react";
import AOS from "aos";
import { FaAngleDoubleRight } from "react-icons/fa";
import pc_bg from "../assets/backgrounds/bg4.png";
const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    return () => {};
  }, []);
  return (
    <>
      <div id="experience">
        <div
          data-aos="slide-up"
          className="row justify-content-around align-items-center experience-container"
        >
          <div className="col-12 mb-md-5 py-3 py-md-4 d-flex justify-content-center">
            <div className="text-center">
              <h1 className=" text-primary text-heading">Experience</h1>
            </div>
          </div>

          <div className="col-md-5 text-paragraph">
            <div className="d-flex justify-content-start align-items-start">
              <div>
                <FaAngleDoubleRight className="text-primary" />
              </div>
              <div>
                <p className=" ml-2 fontSize text-dark-white p-0 m-0  text-paragraph">
                  Six months of Industrial Practical training counducted at
                  Singida municipal council's ICT department in 2019.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-start mt-2">
              <div>
                <FaAngleDoubleRight className="text-primary" />
              </div>
              <div>
                <p className=" ml-2 fontSize text-dark-white p-0 m-0 text-paragraph ">
                  Five months at mbeyamilk company working as a system developer
                  and a system administrator in 2021.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-start mt-2 mb-5">
              <div>
                <FaAngleDoubleRight className="text-primary" />
              </div>
              <div>
                <p className=" ml-2 fontSize text-dark-white p-0 m-0 text-paragraph ">
                  Working as Mobile and Frontend developer at 2value.ro  between 2022 - 2023.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" my-4">
              <div className="pl-1 text-center">
                <img
                  style={{ maxWidth: "100%" }}
                  src={pc_bg}
                  alt="pc bg"
                  className="img-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
