import React, { useState, useEffect } from "react";
import Preloader from "./shared/effects/Pre";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Footer from "./layouts/Footer";
// import Resume from "./pages/Resume/ResumeNew"; // Temporarily hidden
import Skills from "./pages/Skills/Skills";
import CaseStudy from "./pages/Projects/CaseStudy";
import BackToTop from "./shared/ui/BackToTop";
import WhatsAppPopup from "./shared/ui/WhatsAppPopup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./shared/ui/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/** Resume route temporarily disabled */}
          {/** <Route path="/resume" element={<Resume />} /> */}
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <WhatsAppPopup />
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
