import Header from "./landing/Header";
import Home from "./Home/Home";
import AboutMe from "./Aboutme/AboutMe";
import "./App.css";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
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
        <Experience />
        <Education />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
