import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { About } from "./about";
import { Review } from "./review";
import { Blog } from "./blog";
import { Capability } from "./capability";
import { Workwithme } from "./workwithme";
import { Contact } from "./contact";
import JsonData from "../../data/data.json";

export const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData.Home);
  }, []);

  return (
    <div>
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

// export default Home;
