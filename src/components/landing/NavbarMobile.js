import React, { useState } from "react";
import "./Navbar.css";

function NavbarMobile() {
  return (
    <nav class="nav-mobile">
      <ul className="nav__links-mobile">
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
    </nav>
  );
}

export default NavbarMobile;
