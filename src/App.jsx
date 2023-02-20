import React from "react";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Learn } from "./components/learn/learn";
import { Workwithme } from "./components/workwithme/workwithme";
import { Contact } from "./components/contact/contact";
import { Book } from "./components/book/book";
import Blog from "./components/blog";
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
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/workwithme" element={<Workwithme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
