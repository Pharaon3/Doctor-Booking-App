import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
