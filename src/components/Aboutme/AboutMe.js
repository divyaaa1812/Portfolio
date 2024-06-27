import React from "react";
import "./AboutMe.css";
import profileimage from "../../images/1717652771884.jpg";

const AboutMe = () => {
  return (
    <section className="about" id="about-section">
      <div className="about__info">
        <h2 className="about__info-title">Let's get know about me closer</h2>
        <p className="about__info-description">
          I'm an aspiring Frontend Developer with a strong foundation in Quality
          Assurance (QA). With a passion for creating visually appealing and
          highly functional web applications, I combine my keen eye for detail
          from my QA background with my love for innovative design and seamless
          user experiences.
        </p>
        <p className="about__info-description">
          My journey into the world of web development began with my work in QA,
          where I honed my skills in identifying bugs, ensuring software
          quality, and understanding the user’s perspective. This experience has
          given me a unique insight into the importance of delivering flawless
          and user-friendly applications.
        </p>
        {/* button to commenyt out */}
        {/* <button className="about__info-workwithme-btn">WORK WITH ME</button> */}
      </div>
      <img src={profileimage} className="about__image" alt = "Divya's profile"></img>
    </section>
  );
};

export default AboutMe;
