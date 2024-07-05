import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {item.type === "experience" && (
              <>
                <h3>
                  {item.title}
                  <span className="company-text"> at {item.company}</span>
                </h3>
                <p>{item.period}</p>
                <p className="description">{item.description}</p>
              </>
            )}
            {item.type === "education" && (
              <>
                <h3>{item.degree}</h3>
                <p className="description">{item.institution}</p>
                <p>{item.graduated}</p>
              </>
            )}
            {item.type === "project" && (
              <>
                <h3>{item.title}</h3>
                <p>
                  Github Repo -{" "}
                  <a href={item.weblink} className="here-text">
                    {item.title}
                  </a>
                </p>
                <p className="description">{item.description}</p>
                <p>Tech stack: {item.technologies.join(", ")}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="arrow-buttons">
        <button onClick={goToPreviousSlide} className="arrow prev">
          &lt;
        </button>
        <button onClick={goToNextSlide} className="arrow next">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
