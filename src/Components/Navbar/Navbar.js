import React from "react";

const navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
      id="main-nav"
    >
      <div className="container">
        <a href="index.html" className="navbar-brand">
          COLOR PICKER
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button
                href="#home-section"
                className="nav-link btn"
                data-toggle="modal"
                data-target="#myModal"
              >
                Add a Color
              </button>
            </li>
            <li className="nav-item">
              <a href="#explore-head-section" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
