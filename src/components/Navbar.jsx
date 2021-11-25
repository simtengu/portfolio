import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCode, FaGraduationCap, FaHome, FaLaptop, FaPersonBooth, FaPhone, FaUser } from "react-icons/fa";
import { useGlobalData } from "../AppContext";
const Navbar = () => {
  const { isHomePage, isSidebarOpen, openSidebar, closeSidebar } =
    useGlobalData();

  let sidebarLinks = (
    <div
      className={isSidebarOpen ? "sidebar sidebar-in" : "sidebar sidebar-out"}
    >
      <Link to="/"><FaHome className="mr-1" /> Home</Link>
      <a href="#education"><FaGraduationCap className="mr-1" /> Education</a>
      <a href="#skills"><FaCode className="mr-1" /> Skills</a>
      <a href="#experience"><FaPersonBooth className="mr-1" /> Experience</a>
      <a href="#projects"><FaLaptop className="mr-1" /> Projects</a>
      <Link to="/about"><FaUser className="mr-1" /> about</Link>
      <Link to="/contact"><FaPhone className="mr-1" /> contacts</Link>
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
        <Link to="/about" className="nav-link">
          about
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">
          contacts
        </Link>
      </li>
    </ul>
  );

  if (!isHomePage) {
    links = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            contacts
          </Link>
        </li>
      </ul>
    );

    sidebarLinks = (
      <div
        className={isSidebarOpen ? "sidebar sidebar-in" : "sidebar sidebar-out"}
      >
        <Link to="/">
          <FaHome className="mr-2" />
          Home
        </Link>
        <Link to="/about">
          <FaUser className="mr-2" />
          about
        </Link>
        <Link to="/contact">
          <FaPhone className="mr-2" />
          contacts
        </Link>
      </div>
    );
  }

  return (
    <React.Fragment>
      {isSidebarOpen && (
        <div onClick={closeSidebar} className="sidebarContainer">
          {sidebarLinks}
        </div>
      )}
      <div className=" navbar-container   container-fluid">
        <div className="row fixed-top navbar-row">
          <div className="col-lg-4 col-xl-5">
            <div className="d-flex w-100  justify-content-between">
              <div>
                <Link
                  className="navbar-brand ml-3 "
                  to="/"
                >
                  <span className="font-weight-bold text-light">AO</span>
                  <span className="text-primary">Simtengu</span>
                </Link>
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
