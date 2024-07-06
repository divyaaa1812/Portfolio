import React, { useState } from "react";
import "./Projects.css";
import Carousel from "../Carousel/Carousel";

const Projects = () => {
  const projectItems = [
    {
      type: "project",
      title: "News Explorer",
      weblink: "https://github.com/divyaaa1812/news-explorer-app-frontend",
      description:
        "The News Explorer web application revolutionizes the way users stay informed by providing a sophisticated platform for discovering, saving, and exploring news articles from around the globe.With an intuitive user interface and powerful search capabilities, users can effortlessly browse through a vast array of news sources, topics, and trends.",
      technologies: ["React", "Node.js"],
    },
    {
      type: "project",
      title: "What To Wear",
      weblink: "https://github.com/divyaaa1812/se_project_react",
      description:
        "The idea behind implementing this is, to make use of weather API which responds with the daily weather forecast. Collect the weather data, process it, and then based on the forecast and recommend suitable clothing to the user.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section className="carousel-section" id="project-section">
      <h1 className="carousel-text">Projects</h1>
      <Carousel items={projectItems} />
    </section>
  );
};

export default Projects;
