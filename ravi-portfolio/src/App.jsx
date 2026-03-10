import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Logbook from "./components/Logbook";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f4e4bc] min-h-screen font-body text-dark-navy overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Logbook />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
