import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import { Hero } from "./hero";
import { Blog } from "./blog";

export const Learn = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData.Learn);
  }, []);

  return (
    <div>
      <Hero data={landingPageData.Hero} />
      <Blog data={landingPageData.Blog} />
    </div>
  );
};
