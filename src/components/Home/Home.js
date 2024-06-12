import React from "react";
import "./Home.css";
import profileimage from "../../images/divya-pic.png";

const Home = () => {
  return (
    <section className="main-container" id="home-section">
      <img src={profileimage} alt="divya's profile" className="main__img" />
      <div className="profile-info">
        <h3 className="profile__title">
          Hello! I Am <span className="profile-name">Divya</span>
        </h3>
        <h2 className="profile__subtitle">I'm a Software Engineer</h2>
        <p className="profile__description">
          I'm an accomplished React frontend developer with more than 3 years of
          professional experience. My expertise contains back-end and front-end
          development using React.js, express.js, MongoDb. I'm seeking to help
          company develop their product, as well as grow and improve my skills.
        </p>
        <button className="contact-btn">GET IN TOUCH</button>
      </div>
    </section>
  );
};

export default Home;
