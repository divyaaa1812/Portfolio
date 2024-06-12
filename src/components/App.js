import Header from "./landing/Header";
import Home from "./Home/Home";
import AboutMe from "./Aboutme/AboutMe";
import "./App.css";
import ExperienceEducationCarousel from "./Experience/ExperienceEducationCarousel";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <ExperienceEducationCarousel />
      </main>
    </div>
  );
}

export default App;
