import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export const Capability = (props) => {
  return (
    <div id="capability">
      <div className="container">
        <div className="row">
          <h4 style={{ textAlign: "center" }}> CORE CAPABILITIES </h4>
          <h2 style={{ textAlign: "center" }}> I forcus on </h2>
          <MDBRow>
            <MDBCol md="4">
              <div className="roundDiv">
                <img
                  src={props.data ? props.data.leftImage : "none"}
                  className=""
                  alt="left image"
                />
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="roundDiv">
                <img
                  src={props.data ? props.data.leftImage : "none"}
                  className=""
                  alt="left image"
                />
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="roundDiv">
                <img
                  src={props.data ? props.data.leftImage : "none"}
                  className=""
                  alt="left image"
                />
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
};
