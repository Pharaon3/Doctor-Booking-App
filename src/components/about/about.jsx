import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import { Hero } from "./hero";
import "./about.css";

export const About = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Hero data={landingPageData.Header} />
    </div>
  );
};

