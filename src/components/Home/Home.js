import React from "react";
import "./Home.css";
import profileimage from "../../images/divya-pic.png";

const Home = () => {
  const emailAddress = "divyabharathi1881@gmail.com";
  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
    setTimeout(() => {
      if (!document.hasFocus()) {
        alert("Your email client is not signed in or not configured properly.");
      }
    }, 500);
  };
  return (
    <section className="main-container" id="home-section">
      {/* <img src={profileimage} alt="divya's profile" className="main__img" /> */}
      <div className="profile-info">
        <h3 className="profile__title">
          Hello! I'm <span className="profile-name">Divya</span>
        </h3>
        <h2 className="profile__subtitle">I'm a Front-end Developer</h2>
        <p className="profile__description">
          A detail-oriented professional with a background in QA testing and a
          keen interest in crafting responsive and user-friendly websites. My
          journey into web development started with learning the basics of HTML,
          CSS, and JavaScript, which sparked my fascination with how these
          languages come together to form beautiful websites.
        </p>
        <p className="profile__description">
          I've recently graduated from TripleTen's web developement bootcamp
          with a focus on React, Node.js. During my time there, I collaborated
          on projects that not only enhanced my technical proficiency but also
          emphasized the significance of delivering top-notch solutions that
          surpass user expectations
        </p>
        <p className="profile__description">
          I am eager to apply my diverse skills and passion for web development
          to contribute to innovative projects and thrive within a dynamic team
          environment. Let’s connect and explore how my unique background can
          bring value to your team!
        </p>
        <button className="contact-btn" onClick={handleClick}>
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
};

export default Home;
