import React, { useState, useEffect } from "react";

export const Workproduct = (props) => {
  return (
    <div style={{ marginTop: 200 }}>
      <div className="row">
        <div className="col-md-5">
          <div style={{ paddingLeft: 50 }}>
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
            <div className="roundBtn">CONTACT ME</div>
          </div>
        </div>
        <div className="col-md-5">
          <img
            style={{ width: "100%" }}
            src={props.data ? props.data.image : "none"}
          />
        </div>
      </div>
      <div className="divide-line"></div>
    </div>
  );
};
