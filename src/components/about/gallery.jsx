import React, { useState, useEffect } from "react";

export const Gallery = (props) => {
  return (
    <div style={{ margin: 50, marginTop: 200 }}>
      <marquee
        behavior="scroll"
        direction="left"
        className="about-gallery"
        scrollamount="12"
        style={{marginLeft: '-1000px'}}
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
