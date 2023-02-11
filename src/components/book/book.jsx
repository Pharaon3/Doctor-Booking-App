import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import { Hero } from "./hero";
import { Element } from "./element";
// import "./about.css";

export const Book = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData.Book);
  }, []);

  return (
    <div>
      <Hero data={landingPageData.Hero} />
      <div className="divide-line"/>
      <Element data={landingPageData.Element} />
    </div>
  );
};
