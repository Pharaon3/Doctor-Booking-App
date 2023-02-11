import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import { Hero } from "./hero";
// import "./about.css";

export const Workwithme = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData.Workwithme);
  }, []);

  return (
    <div>
      <Hero data={landingPageData.Hero} />
    </div>
  );
};
