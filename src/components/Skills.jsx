import React,{useEffect} from 'react';
import AOS from "aos";
import { 
     FaBootstrap, FaCss3,
     FaHtml5, FaLaravel,
     FaPhp, FaReact,
     FaSass,FaVuejs,FaJs, FaWordpress } from 'react-icons/fa';
const Skills = () => {
       useEffect(() => {
         AOS.init({
           duration: 1000,
         });
         return () => {};
       }, []);
    return (
      <>
        <div data-aos="slide-up" id="skills" className=" my-5 py-5 d-flex justify-content-center">
          <div className="text-center">
            <h2 className="education text-mincho">Skills</h2>
            <div
              style={{
                width: "200px",
                height: "6px",
                backgroundImage: "linear-gradient(to right,#fff,#000,#fff)",
              }}
              className="mx-auto"
            ></div>
          </div>
        </div>
        <div data-aos="slide-up" className="row">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaHtml5 style={{ fontSize: "40px", color: "orange" }} />
            <p id="level" style={{ fontSize: '22px' }}>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaCss3 style={{ fontSize: "40px", color: "#3695cf" }} />
            <p id="level" style={{ fontSize: '22px' }}>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaJs style={{ fontSize: "40px", color: "#f9f900" }} />
            <p id="level" style={{ fontSize: '22px' }}>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaBootstrap style={{ fontSize: "40px", color: "indigo" }} />
            <p id="level" style={{ fontSize: '22px' }}>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaSass style={{ fontSize: "40px", color: "#ff00ff" }} />
            <p id="level" style={{ fontSize: '22px' }}>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaLaravel style={{ fontSize: "40px", color: "#ff4a4a" }} />
            <p id="level" style={{ fontSize: '22px' }}>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaVuejs style={{ fontSize: "40px", color: "darkgreen" }} />
            <p id="level" style={{ fontSize: '22px' }}>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaPhp style={{ fontSize: "40px", color: "#0066a1" }} />
            <p id="level" style={{ fontSize: '22px' }}>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaReact
              style={{
                fontSize: "40px",
                color: "#4ecfe6",
                backgroundColor: "#292f34",
              }}
            />
            <p id="level" style={{ fontSize: '22px' }}>Mid level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <h2 style={{ color: "#0066a1", fontWeight: "bolder" }}>jQuery</h2>
            <p id="level" style={{ fontSize: '22px' }}>Advanced level</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center my-2">
            <FaWordpress style={{ fontSize: "40px", color: "#5eb3ce" }} />
            <p id="level" style={{ fontSize: '22px' }}>Mid level</p>
          </div>
        </div>
      </>
    );
}
 
export default Skills;