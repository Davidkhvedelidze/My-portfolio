import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";

const App = () => {
  return (
    <>
      <ScrollProgressBar />
      {/* <a className="skip-link" href="#main-content">
        Skip to main content
      </a> */}
      <Header />
      <main className="mx-auto w-full max-w-5xl px-4 pb-24" id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
