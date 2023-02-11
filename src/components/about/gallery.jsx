import React, { useState, useEffect } from "react";

export const Gallery = (props) => {
  return (
    <div className="about-gallery">
      <marquee
        behavior="scroll"
        direction="left"
        className="about-gallery-marquee"
        scrollamount="12"
      >
        <img
          src={props.data ? props.data.image01 : "none"}
          className="about-gallery-img"
        />
        <img
          src={props.data ? props.data.image02 : "none"}
          className="about-gallery-img"
        />
        <img
          src={props.data ? props.data.image03 : "none"}
          className="about-gallery-img"
        />
        <img
          src={props.data ? props.data.image01 : "none"}
          className="about-gallery-img"
        />
        <img
          src={props.data ? props.data.image02 : "none"}
          className="about-gallery-img"
        />
        <img
          src={props.data ? props.data.image03 : "none"}
          className="about-gallery-img"
        />
      </marquee>
    </div>
  );
};
