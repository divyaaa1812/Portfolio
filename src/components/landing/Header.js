import React, { useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Avatar from "./Avatar";
import NavbarMobile from "./NavbarMobile";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="App-header">
      <a className="App-header-name" href="#">
        Divya Bharathi
      </a>
      <div className="social-link-container">
        <ul className="social_links-mobile">
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
        <div className="social-link-image">
          <img
            className="hamburger"
            src={isMenuOpen ? close : menu}
            alt="click to open menu"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <Navbar />
      {isMenuOpen && <NavbarMobile />}
    </header>
  );
}

export default Header;
