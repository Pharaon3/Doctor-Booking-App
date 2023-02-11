import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Workproduct = (props) => {
  return (
    <div style={{ marginTop: 200 }}>
      <div className="row about-workproduct">
        <div className="col-md-5 workproduct-left">
          <div style={{ padding: 50 }}>
            <div className="subtitle">
              {" "}
              {props.data ? props.data.subtitle : "Loading"}
            </div>
            <div className="title">
              {" "}
              {props.data ? props.data.title : "Loading"}
            </div>
            <div className="content">
              {" "}
              {props.data ? props.data.content : "Loading"}
            </div>
            <Link to='/contact'><div className="roundBtn">CONTACT ME</div></Link>
          </div>
        </div>
        <div className="col-md-5 workproduct-image"></div>
      </div>
      <div className="divide-line"></div>
    </div>
  );
};
