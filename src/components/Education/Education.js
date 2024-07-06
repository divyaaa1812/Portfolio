import React from "react";
import Carousel from "../Carousel/Carousel";

const Education = () => {
  const educationItems = [
    {
      type: "education",
      degree: "Software Web development Bootcamp",
      institution: "TripleTen, USA",
      graduated: "2023 - 2024",
    },
    {
      type: "education",
      degree: "Bachelor of Technology, Computer Science",
      institution: "Jawaharlal Nehru Technological University, India",
      graduated: "2007 - 2011",
    },
  ];

  return (
    <section className="carousel-section" id="education-section">
      <h1 className="carousel-text">Education</h1>
      <Carousel items={educationItems} />
    </section>
  );
};

export default Education;
