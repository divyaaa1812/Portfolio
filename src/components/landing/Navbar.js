// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import githubIcon from "../../images/github.png";

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
        <li>
          <a className="social__link" href="">
            <img className="github-image" src={githubIcon} alt="Github Icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
