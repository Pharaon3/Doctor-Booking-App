import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";

export const Footer = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData.Footer);
    }, []);
  return (
    <div id="footer">
      <div className="container text-center footer-element">
        <p>&copy; 2021 DR ALEX CHAN </p>
        <div>
          <a
            href="https://github.com/Pharaon3/Doctor-Booking-App"
            rel="nofollow"
            style={{ marginLeft: "50px", marginRight: "50px" }}
          >
            PRIVACY POLICY
          </a>
          <a
            href="https://github.com/Pharaon3/Doctor-Booking-App"
            rel="nofollow"
          >
            TERMS & CONDITIONS
          </a>
        </div>
      </div>
      <div className="footer-content">
        {landingPageData ? landingPageData.content : "Loading"}
      </div>
    </div>
  );
};
