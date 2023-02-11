import React, { useState, useEffect } from "react";

export const Hero = (props) => {
  return (
    <div className="workwithme-hero">
      <div className="row nomargin">
        <div className=" col-md-8 col-md-offset-2">
          <div className="workwithme-hero-title">
            {" "}
            {props.data ? props.data.title : "Loading"}
          </div>
        </div>
      </div>
      <div className="row nomargin">
        <div className="col-md-4 col-md-offset-4">
          <div className="workwithme-hero-content">
            {" "}
            {props.data ? props.data.content : "Loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
