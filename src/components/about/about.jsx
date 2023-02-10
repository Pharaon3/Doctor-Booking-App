import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import { Hero } from "./hero";
import { Story } from "./story";
import { Experience } from "./experience";
import { Workproduct } from "./workproduct";
import { Gallery } from "./gallery";
// import "./about.css";

export const About = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData.About);
  }, []);

  return (
    <div>
      <Hero data={landingPageData.Hero} />
      <Story data={landingPageData.Story} />
      <Gallery data={landingPageData.Gallery} />
      <Experience data={landingPageData.Experience} />
      <Workproduct data={landingPageData.Workproduct} />
    </div>
  );
};
