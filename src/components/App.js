import Header from "./landing/Header";
import Home from "./Home/Home";
import AboutMe from "./Aboutme/AboutMe";
import "./App.css";
import ExperienceEducationCarousel from "./Experience/ExperienceEducationCarousel";
import Projects from "./Projects/Projects";
import ContactMe from "./Contactme/ContactMe";
import Footer from "./Footer/Footer";

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
        <Footer />
      </main>
    </div>
  );
}

export default App;
