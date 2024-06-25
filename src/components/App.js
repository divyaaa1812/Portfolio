import Header from "./landing/Header";
import Home from "./Home/Home";
import AboutMe from "./Aboutme/AboutMe";
import "./App.css";
import ExperienceEducationCarousel from "./Experience/ExperienceEducationCarousel";
import Projects from "./Projects/Projects";
import ContactMe from "./Contactme/ContactMe";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <ExperienceEducationCarousel />
        <Projects />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;
