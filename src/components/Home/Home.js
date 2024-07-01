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
      <img src={profileimage} alt="divya's profile" className="main__img" />
      <div className="profile-info">
        <h3 className="profile__title">
          Hello! I Am <span className="profile-name">Divya</span>
        </h3>
        <h2 className="profile__subtitle">I'm a Frontend Developer</h2>
        <p className="profile__description">
          I'm an accomplished React frontend developer with more than 3 years of
          professional experience. My expertise contains back-end and front-end
          development using React.js, express.js, MongoDb. I'm seeking to help
          company develop their product, as well as grow and improve my skills.
        </p>
        <button className="contact-btn" onClick={handleClick}>
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
};

export default Home;
