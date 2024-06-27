import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const projectItems = [
    {
      title: "News Explorer",
      weblink: "https://github.com/divyaaa1812/news-explorer-app-frontend",
      description:
        "The News Explorer web application revolutionizes the way users stay informed by providing a sophisticated platform for discovering, saving, and exploring news articles from around the globe.With an intuitive user interface and powerful search capabilities, users can effortlessly browse through a vast array of news sources, topics, and trends.",
      techStack: [],
    },
    {
      title: "What To Wear",
      weblink: "https://github.com/divyaaa1812/se_project_react",
      description:
        "The idea behind implementing this is, to make use of weather API which responds with the daily weather forecast. Collect the weather data, process it, and then based on the forecast and recommend suitable clothing to the user.",
      techStack: [],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectItems.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectItems.length) % projectItems.length
    );
  };

  const isProjects = currentIndex < projectItems.length;

  return (
    <section className="carousel" id="project-section">
      <div className="carousel-items">
        {isProjects ? (
          <>
            <h1 className="carousel-text">My Projects</h1>
            <h3>{projectItems[currentIndex].title}</h3>
            <p>
              Github Repo -{" "}
              <a
                href={projectItems[currentIndex].weblink}
                className="here-text"
              >
                {projectItems[currentIndex].title}
              </a>
            </p>
            <p>{projectItems[currentIndex].description}</p>
            <p>{projectItems[currentIndex].techStack}</p>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="arrow-buttons">
        <button onClick={goToPreviousSlide} className="arrow prev">
          &lt;
        </button>
        <div className="dots-container">
          {projectItems.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button onClick={goToNextSlide} className="arrow next">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Projects;
