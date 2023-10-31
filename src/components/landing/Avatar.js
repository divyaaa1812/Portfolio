import React from "react";
import "./Avatar.css";
import avatarImage from "../../images/avatar.png";

function Avatar() {
  return (
    <img
      className="avatar-logo"
      alt="divya's profile avatar"
      src={avatarImage}
    />
  );
}

export default Avatar;
