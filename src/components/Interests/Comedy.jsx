import React from "react";
import { FaCheckDouble } from "react-icons/fa";
const Comedy = ({ picture }) => {
  return (
    <>
      <div className="container">
        <div className="row my-3 py-3">
          <div className="col-md-6 py-2 px-3 px-md-5 d-flex justify-content-center justify-content-md-end">
            <div className="interestInfo p-2 p-md-4 w-80 ">
              <h2
                // style={{ color: "#3c92fb" }}
                className=" text-heading text-center text-light interest-div-title font-weight-bold mb-0"
              >
                Comedy
              </h2>

              <div className="mt-1">
                <div className="d-flex text-paragraph ">
                  <div>
                    <FaCheckDouble className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5
                      className="text-light
interest-p"
                    >
                      Favorite performances: Voodoo Child (Eddie Griffin) , One
                      Man (steve harvey) & It's Pimpin (Katt Williams)
                    </h5>
                  </div>
                </div>

                <div className="d-flex text-paragraph ">
                  <div>
                    <FaCheckDouble className="text-primary font-weight-bold" />
                  </div>
                  <div className="px-2">
                    <h5 className="text-light interest-p">
                      Favorite comedians: Dave Chappele, Chris Rock, Martin
                      Lawrence, Eddie Griffin & Katt Williams
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2 d-flex justify-content-center justify-content-md-start">
            <div className="interestImgDiv ">
              <img src={picture} alt="aos" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comedy;
