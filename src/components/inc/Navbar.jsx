import React from "react";
import "./navbar.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar  navbar-expand-xl fixed-top navbar-light bg-light border-bottom ">
      <div class="container-fluid ">
        <Link to="/" class=" nav-brand logo ms-sm-5 nav-link">
          <img src={logo} alt="Logo" />
          <span class="gd">Google Developer Student Clubs</span>
          <br />
          <span class="school">University of San Agustin</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse me-5" id="navbarNavDropdown">
          <ul class="nav navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/about" class="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/event" class="nav-link">
                Events
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/project" class="nav-link">
                Project
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/team" class="nav-link">
                Team
              </Link>
            </li>
            <li class="nav-item register">
              <Link to="/" class="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
