import React from "react";
import Carousel from "../Carousel/Carousel";

const Experience = () => {
  const experienceItems = [
    {
      type: "experience",
      title: "UI Developer",
      company: "Drops care",
      period: "May 2023 - Current",
      description:
        "Having recently completed an intensive software web development bootcamp, I've acquired a diverse skill set and am eager to apply my knowledge to real-world projects. With a background in Software quality assurance, I've found my true passion in web development and am dedicated to growing my skills and creating engaging user experiences.In addition to bootcamp studies, I've gained practical experience through externship.",
    },
    {
      type: "experience",
      title: "Software Development Engineer in Test",
      company: "Walmart labs",
      period: "Feb 2024 - Current",
      description:
        "Skilled and dedicated Software Development Engineer in Test (SDET) with a passion for ensuring the quality and reliability of software products. With a strong background in software engineering and a focus on testing methodologies and automation, I excel at designing and implementing effective testing strategies to deliver high-quality software solutions.",
    },
    {
      type: "experience",
      title: "QA Automation Engineer",
      company: "Plume Design,Inc",
      period: "May 2021 - Jan 2024",
      description:
        "Proficiency in programming languages such as Java, Kotlin(for Android), Swift (for iOS).Expertise in mobile test automation frameworks like Appium, Espresso (for Android), XCUITest (for iOS).",
    },
    {
      type: "experience",
      title: "Sr. Software QA Engineer",
      company: "Fujitsu Inc",
      period: "July 2018 - Dec 2018",
      description:
        "Extensive experience in utilizing Selenium WebDriver to automate testing processes and ensure the quality and reliability of software applications. Expertise in test automation tools and frameworks, with a focus on Selenium WebDriver",
    },
    {
      type: "experience",
      title: "QA Analyst",
      company: "Infosys",
      period: "Sep 2015 - July 2017",
      description:
        "With a strong background in software testing methodologies and techniques, I excel at designing and executing comprehensive test plans, identifying and documenting defects, and collaborating with cross-functional teams to deliver high-quality products on time",
    },
    {
      type: "experience",
      title: "Software Test Engineer",
      company: "Tech Mahindra",
      period: "July 2012 - Sep 2015",
      description:
        "Proficiency in software testing methodologies such as black-box testing, white-box testing, and regression testing. Experience with test management tools like HP ALM, Jira, or TestRail",
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
