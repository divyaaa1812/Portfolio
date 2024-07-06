import React from "react";
import Carousel from "../Carousel/Carousel";

const Experience = () => {
  const experienceItems = [
    {
      type: "experience",
      title: "Software Development Engineer in Test",
      company: "Walmart Labs",
      period: "Feb 2024 - Current",
      description: [
        "Developed automated test scripts using typescript to test web applications, resulting in a 30% reduction in testing time",
        "Collaborate closely with developers and product managers in an Agile environment to ensure comprehensive test coverage for new features",
      ],
    },
    {
      type: "experience",
      title: "Front-end Developer",
      company: "Drops care",
      period: "May 2023 - June 2024",
      description: [
        "Designed and built a sophisticated numeric input field component using TypeScript and React, featuring integrated increase and decrease buttons for intuitive data manipulation.",
        "Created a flexible button component with TypeScript enums for improved UI consistency and maintenance",
      ],
    },
    {
      type: "experience",
      title: "QA Automation Engineer",
      company: "Plume Design,Inc",
      period: "May 2021 - Jan 2024",
      description: [
        "Worked on android mobile app testing using Espresso with Kotlin which significantly boosted test coverage and expedited release cycles",
        "Led API endpoint testing on iOS and Android, improving integration and backend understanding for front-end work",
      ],
    },
    {
      type: "experience",
      title: "Sr. Software QA Engineer",
      company: "Fujitsu Inc",
      period: "July 2018 - Dec 2018",
      description: [
        "Contributed to automation testing using Selenium WebDriver and JavaScript with focus on functionality and performance across diverse browsers and platforms",
        "Collaborated with frontend developers for responsive design testing which ensured optimal user experience across various devices and screen sizes",
      ],
    },
    {
      type: "experience",
      title: "QA Analyst",
      company: "Infosys",
      period: "Sep 2015 - July 2017",
      description: [
        "With a strong background in software testing methodologies and techniques, I excel at designing and executing comprehensive test plans",
        "Contributed to Agile development processes by participating in sprint planning, daily stand-ups, and retrospective meetings, fostering continuous improvement of development workflows and practice",
      ],
    },
    {
      type: "experience",
      title: "Software Test Engineer",
      company: "Tech Mahindra",
      period: "July 2012 - Sep 2015",
      description: [
        "Collaborated with developers and stakeholders to prioritize and resolve issues, ensuring timely verification of bug fixes and alignment with project goals",
        "Proficiency in software testing methodologies such as black-box testing, white-box testing, and regression testing",
      ],
    },
  ];

  return (
    <section className="carousel-section" id="experience-section">
      <h1 className="carousel-text">Professional Experience</h1>
      <Carousel items={experienceItems} />
    </section>
  );
};

export default Experience;
