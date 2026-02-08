import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/HOME/Home";
import About_My_Self from "./components/ABOUT/About_My_Self";
import Degree_And_Transcript from "./components/DEGREE AND TRANSCRIPT/Degree_And_Transcript";
import My_Projects from "./components/PROJECTS/My_Projects";
import My_Resume from "./components/RESUME/My_Resume";
import My_Certificates from "./components/CERTIFICATES/My_Certificates";
import My_Experiences from "./components/EXPERIENCES/My_Experiences";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCertificate } from "react-icons/fa";

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
          <Route path="/About_My_Self" element={<About_My_Self />} />
          <Route path="/Degree_And_Transcript" element={<Degree_And_Transcript />} />
          <Route path="/My_Projects" element={<My_Projects />} />
          <Route path="/My_Resume" element={<My_Resume />} />
          <Route path="/My_Certificates" element={<My_Certificates />} />
          <Route path="/My_Experiences" element={<My_Experiences />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
