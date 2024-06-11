// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";

function Navbar() {
  return (
    <nav class="nav">
      <ul className="nav__links">
        <li>
          <a className="nav__link" href="/">
            HOME
          </a>
        </li>
        <li>
          <a className="nav__link" href="/aboutme">
            ABOUT ME
          </a>
        </li>
        <li>
          <a className="nav__link" href="/experience">
            EXPERIENCE
          </a>
        </li>
        <li>
          <a className="nav__link" href="/projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="nav__link" href="/contact">
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
