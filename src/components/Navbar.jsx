import React from "react";
import {
  FaBars,
  FaCode,
  FaGraduationCap,
  FaHome,
  FaLaptop,
  FaPersonBooth,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { useGlobalData } from "../AppContext";
const Navbar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalData();

  let sidebarLinks = (
    <div
      className={isSidebarOpen ? "sidebar sidebar-in" : "sidebar sidebar-out"}
    >
      <a href="#home">
        <FaHome className="mr-1" /> Home
      </a>
      <a href="#education">
        <FaGraduationCap className="mr-1" /> Education
      </a>
      <a href="#skills">
        <FaCode className="mr-1" /> Skills
      </a>
      <a href="#experience">
        <FaPersonBooth className="mr-1" /> Experience
      </a>
      <a href="#projects">
        <FaLaptop className="mr-1" /> Projects
      </a>
      <a href="#about">
        <FaUser className="mr-1" /> about
      </a>
      <a href="#contact">
        <FaPhone className="mr-1" /> contacts
      </a>
    </div>
  );
  let links = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#education">
          Education
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">
          Experience
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link">
          about
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" className="nav-link">
          contacts
        </a>
      </li>
    </ul>
  );

  return (
    <React.Fragment>
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          style={{ zIndex: 112 }}
          className="sidebarContainer"
        >
          {sidebarLinks}
        </div>
      )}
      <div
        style={{ zIndex: 111 }}
        className=" navbar-container   container-fluid"
      >
        <div className="row fixed-top navbar-row">
          <div className="col-lg-4 col-xl-5">
            <div className="d-flex w-100  justify-content-between">
              <div>
                <a
                  style={{ fontFamily: "'Ubuntu', sans-serif" }}
                  className="navbar-brand ml-3  "
                  href="#home"
                >
                  <span className="font-weight-bold text-light">Albert-</span>
                  <span className="text-primary">Oscar</span>
                </a>
              </div>
              <div>
                <button onClick={openSidebar} className="btn d-lg-none mt-2">
                  <FaBars className="text-light" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-7 text-right">
            <nav className="navbar  navbar-expand-lg  justify-content-end d-none d-lg-inline-flex">
              {links}
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
