import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Projects,
  Feedbacks,
  Contact,
  StarsCanvas,
  Slider,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-y-hidden">
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
             <Hero />
              </div>
            }
          />

          <Route path="/about" element={<About  />} />

          <Route
            path="/work"
            element={
              <div>
                <Tech />
                <Experience />
              </div>
            }
          />

          <Route path="/projects" element={<Projects />} />

          <Route
            path="/contact"
            element={
              <div className="top-0 right-0 relative z-22">
                <Contact />
                <StarsCanvas />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
