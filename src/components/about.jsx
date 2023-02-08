import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/portfolio/about.jpg" className="img-responsive about-image mainImage" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Hi, I'm Dr Alex</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3 className="roundBtn">Learn about me</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
