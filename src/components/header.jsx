import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>{" "}
              </div>
            </div>
              <div style={{ display: "flex" }}>
                <div className="hero-left">
                  <h3> {props.data ? props.data.leftTitle : "Loading"}</h3>
                  <p className="leftContent">
                    {" "}
                    {props.data ? props.data.leftContent : "Loading"}{" "}
                  </p>
                </div>
                <img
                  src={props.data ? props.data.largeImage : "none"}
                  className="mainImage"
                  alt={props.data ? props.data.title : "Loading"}
                />
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
