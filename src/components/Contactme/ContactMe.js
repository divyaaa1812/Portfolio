import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
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
    <section className="contactme" id="contactme-section">
      <div className="contactme__info">
        <h1 className="contactme__info-title">
          Interested in working with me?
        </h1>
        <button className="contact-btn" onClick={handleClick}>
          <a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="email-link"
          >
            GET IN TOUCH
          </a>
        </button>
      </div>
    </section>
  );
};

export default ContactMe;
