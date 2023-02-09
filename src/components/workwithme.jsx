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

          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/portfolio/about.jpg"
              className="img-responsive about-image mainImage"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
