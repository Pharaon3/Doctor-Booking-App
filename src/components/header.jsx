import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 intro-text">
                <h2 style={{ fontSize: 56 }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>{" "}
              </div>
            </div>
          </div>
          <div className="row col-md-8 col-md-offset-1">
            <div style={{ display: "flex" }}>
              <div className="hero-left col-md-3">
                <h3> {props.data ? props.data.leftTitle : "Loading"}</h3>
                <p className="leftContent" style={{ fontWeight: "normal" }}>
                  {" "}
                  {props.data ? props.data.leftContent : "Loading"}{" "}
                </p>
              </div>
              <img
                src={props.data ? props.data.largeImage : "none"}
                className="mainImage col-md-6 col-md-offset-1"
                alt={props.data ? props.data.title : "Loading"}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
