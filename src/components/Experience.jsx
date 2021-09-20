import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const Experience = () => {
    return ( 
        <>
        <div id="experience" className=" my-5 pt-5">
            <div className="pl-1 text-md-left text-center">
                 <h2 className="education">Experience</h2>
                <div  className="d-none d-md-block" style={{width:"260px",height:"6px",backgroundImage:"linear-gradient(to right,#fff,#000,#fff)" }} 
                >
                </div>
            </div>
        </div>
        <div className="d-flex">
           <div><FaAngleDoubleRight className="mt-2 text-primary" style={{ fontSize:"22px" }} /></div>
           <div><h3 className="text-dark ml-2 text-muted experience-h3" style={{ fontSize:"29px",fontFamily:"times" }}>Six months of  Industrial Practical training  counducted at Singida municipal council's ICT department in 2019.</h3></div> 
        </div>
        <div className="d-flex">
           <div><FaAngleDoubleRight className="mt-2 text-primary" style={{ fontSize:"22px" }} /></div>
           <div><h3 className="text-dark ml-2 text-muted experience-h3" style={{ fontSize:"29px",fontFamily:"times" }}>Freelancing in web development since jan 2021 till now.</h3></div> 
        </div>

        </>
     );
}
 
export default Experience;