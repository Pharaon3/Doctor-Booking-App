import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";

export const About = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <h1 style={{marginTop: 100}}> about </h1>
    </div>
  );
};

