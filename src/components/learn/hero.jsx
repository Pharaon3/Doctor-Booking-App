import React, { useState, useEffect } from "react";

export const Hero = (props) => {
  return (
    <div style={{ marginTop: 300 }}>
      <div className="row nomargin">
        <div className="col-md-6 col-md-offset-3">
          <div className="learn-hero-title">
            {" "}
            {props.data ? props.data.title : "Loading"}
          </div>
        </div>
      </div>
      <div className="row nomargin">
        <div className="col-md-4 col-md-offset-4">
          <div className="learn-hero-content">
            {" "}
            {props.data ? props.data.content : "Loading"}
          </div>
        </div>
      </div>
      <div className="row nomargin">
        <div className="learn-hero-img"></div>
      </div>
    </div>
  );
};
