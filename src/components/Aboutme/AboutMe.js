import React from "react";
import "./AboutMe.css";
import profileimage from "../../images/divyaprofile.png";

const AboutMe = () => {
  return (
    <section className="about" id="about-section">
      <div className="about__info">
        <h2 className="about__info-title">Let's get know about me closer</h2>
        <p className="about__info-description">
          My journey into the world of web development began with my work in QA,
          where I honed my skills in identifying bugs, ensuring software
          quality, and understanding the user’s perspective. This experience has
          given me a unique insight into the importance of delivering flawless
          and user-friendly applications.
        </p>
        <p className="about__info-description">
          What sets me apart is my commitment to continuous learning and
          improvement. I always explore new technologies and techniques to stay
          current in this rapidly evolving field.
        </p>
        <p className="about__info-description">
          Outside of coding, I enjoy playing boardgames, baking cakes and
          cookies, working on DIY projects with my kid. These experiences not
          only enrich my life but also inspire my creativity and problem-solving
          skills.
        </p>
        {/* button to commenyt out */}
        {/* <button className="about__info-workwithme-btn">WORK WITH ME</button> */}
      </div>
      <img
        src={profileimage}
        className="about__image"
        alt="Divya's profile"
      ></img>
    </section>
  );
};

export default AboutMe;
