import React,{useEffect} from "react";
import AOS from "aos";
import chelsea from "../assets/chelsea1.jpg";
 import chrisrock from "../assets/chrisrock.jpg";
 import jwrld from "../assets/jwrld.jpg";

 import tmaster from "../assets/tmaster.png";
// import { FaCaretRight, FaCheckDouble } from "react-icons/fa";
import Music from "./Interests/Music";
import Flickity from "react-flickity-component";
import Football from "./Interests/Football";
import TMaster from "./Interests/TMaster";
import Comedy from "./Interests/Comedy";


const flickityOptions = {
  autoPlay: 5000,
  draggable: true,
  freeScroll: true,
  contain: true,
  wrapAround: true,
  prevNextButtons: true,
  adaptiveHeight: true,
  friction: 0.8,
};
const Interests = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
      return () => {};
    }, []);
  return (
    <>
      <div className=" mt-5 p-3 container interests-container d-none d-md-block">
        <div className="interests pb-3">
          {/* Interests section .................................................... */}
          <div className="container">
            <div className=" mb-md-5 py-2 py-md-5 d-flex justify-content-center">
              <div className="text-center">
                <h1 data-aos="fade-up" className=" text-primary text-heading">
                  Interests
                </h1>
              </div>
            </div>

            <Flickity
              className={"carousel"} // default ''
              elementType={"div"} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static // default false
            >
              <Comedy picture={chrisrock} />
              <Football picture={chelsea} />
              <TMaster picture={tmaster} />
              <Music picture={jwrld} />
            </Flickity>
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div className="section-title py-1  text-center w-100">
          <div className=" mb-md-5 py-2 py-md-5 d-flex justify-content-center">
            <div className="text-center">
              <h1 data-aos="fade-up" className=" text-primary text-heading">
                Interests
              </h1>
            </div>
          </div>
        </div>

        <Comedy picture={chrisrock} />
        <hr className="bg-secondary"></hr>
        <Football picture={chelsea} />
        <hr className="bg-secondary"></hr>
        <TMaster picture={tmaster} />
        <hr className="bg-secondary"></hr>
        <Music picture={jwrld} />
      </div>
    </>
  );
};

export default Interests;
