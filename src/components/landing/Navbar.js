// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";

function Navbar() {
  return (
    <nav class="nav-desktop">
      <ul className="nav__links">
        <li>
          <a className="nav__link" href="#home-section">
            HOME
          </a>
        </li>
        <li>
          <a className="nav__link" href="#about-section">
            ABOUT ME
          </a>
        </li>
        <li>
          <a className="nav__link" href="#experience-section">
            MY EXPERIENCE
          </a>
        </li>
        <li>
          <a className="nav__link" href="#project-section">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="nav__link" href="#contactme-section">
            CONTACT ME
          </a>
        </li>
      </ul>
      <ul className="social_links">
        <a className="social__link" href="https://github.com/divyaaa1812">
          <img
            className="github-image"
            src={githubIcon}
            alt="click to navigate Github profile"
          />
        </a>
        <a
          className="social__link"
          href="https://www.linkedin.com/in/divyabharathi-badugu/"
        >
          <img
            className="linkedin-image"
            src={linkedinIcon}
            alt="click to navigate linkedin profile"
          />
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
