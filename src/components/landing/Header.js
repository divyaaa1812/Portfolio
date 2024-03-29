import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Avatar from "./Avatar";

function Header() {
  return (
    <header className="App-header">
      <Avatar />
      <Navbar />
    </header>
  );
}

export default Header;
