import React, { useState, useEffect } from "react";

export const Hero = (props) => {
  return (
    <div className="workwithme-hero contact-hero-background flex">
      <div>
      <div className="row nomargin">
        <div className=" col-md-12">
          <div className="workwithme-hero-title">
            {" "}
            {props.data ? props.data.title : "Loading"}
          </div>
        </div>
      </div>
      <div className="row nomargin">
        <div className="col-md-10 col-md-offset-1">
          <div className="workwithme-hero-content">
            {" "}
            {props.data ? props.data.content : "Loading"}
          </div>
        </div>
      </div></div>
    </div>
  );
};
