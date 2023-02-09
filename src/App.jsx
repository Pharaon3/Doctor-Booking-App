import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Review } from "./components/review";
import { Blog } from "./components/blog";
import { Capability } from "./components/capability";
import { Workwithme } from "./components/workwithme";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Capability data={landingPageData.Capability} />
      <Workwithme data={landingPageData.Workwithme} />
      <Review data={landingPageData.Review} />
      <Blog data={landingPageData.Blog} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
