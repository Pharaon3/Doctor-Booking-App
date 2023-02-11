import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row flex">
              <div className="col-md-10 intro-text">
                <h2 style={{ fontSize: 56 }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>{" "}
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: 100}}>
            <div className="col-md-8 col-md-offset-2">
              <div className="home-header">
                <div className="hero-left col-md-3">
                  <h3> {props.data ? props.data.leftTitle : "Loading"}</h3>
                  <p className="leftContent" style={{ fontWeight: "normal" }}>
                    {" "}
                    {props.data ? props.data.leftContent : "Loading"}{" "}
                  </p>
                </div>
                <img
                  src={props.data ? props.data.largeImage : "none"}
                  className="mainImage col-md-6 header-image"
                  alt={props.data ? props.data.title : "Loading"}
                />
                {/* <div className="flex letstalkParent">
                  <p className="letstalk">lets talk</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
