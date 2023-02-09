import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export const Workwithme = (props) => {
  return (
    <div id="workwithme">
      <div className="container">
        <div className="row">
          <div className="workwithme-header">
            <h4 style={{ textAlign: "center" }}> WORK WITH ME </h4>
            <h2 style={{ textAlign: "center" }}>
              {" "}
              {props.data ? props.data.headerTitle : "Loading"}{" "}
            </h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              {props.data ? props.data.headerContent : "Loading"}{" "}
            </p>
          </div>
          <div id="workwithme-01" className="workwithme-elements">
            {" "}
            <img
              src="img/portfolio/about.jpg"
              className="img-responsive workwithme-image mainImage"
              alt=""
            />{" "}
            <div className="margin100">
              <p className="workwithme-element-id">01</p>
              <h2 className="workwithme-element-title">{props.data ? props.data.element01Title : "Loading"}</h2>
              <p>{props.data ? props.data.element01Content : "Loading"}</p>
              <h3 className="roundBtn">Book a session</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
