import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pizzaden from "./components/Pizzaden";
import Musiclib from "./components/Musiclib";
import "./App.css";

function MainPage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project_pizzaden" element={<Pizzaden />} />
        <Route path="/project_music" element={<Musiclib />} />
      </Routes>
    </Router>
  );
}

export default App;
