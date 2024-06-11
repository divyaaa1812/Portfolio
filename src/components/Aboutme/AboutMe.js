import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <main className="about">
      <img src={profileimage} alt="divya's profile" className="about_img" />
      <div className="about-info">
        <h3 className="about__title">
          Hello! I Am <span className="about-name">Divya</span>
        </h3>
        <h2 className="about__subtitle">I'm a Software Engineer</h2>
        <p className="about__description">
          I'm an accomplished React frontend developer with more than 3 years of
          professional experience. My expertise contains back-end and front-end
          development using React.js, express.js, MongoDb. I'm seeking to help
          company develop their product, as well as grow and improve my skills.
        </p>
        <button className="contact-btn">GET IN TOUCH</button>
      </div>
    </main>
  );
};

export default AboutMe;
