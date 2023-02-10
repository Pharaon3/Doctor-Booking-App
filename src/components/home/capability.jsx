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
              <div className="roundDiv margin-down">
                <img
                  src={props.data ? props.data.leftImage : "none"}
                  className="capability-image"
                  alt="left image"
                />
                <div className="flex">
                  <div className="capability-iconDiv">
                    <img
                      src={props.data ? props.data.leftIcon : "none"}
                      className="capability-icon"
                      alt="left icon"
                    />
                  </div>
                </div>
                <div className="capability-contentDiv">
                  <h3>{props.data ? props.data.leftTitle : "none"}</h3>
                  <p>{props.data ? props.data.leftContent : "none"}</p>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="roundDiv">
                <img
                  src={props.data ? props.data.middleImage : "none"}
                  className="capability-image"
                  alt="middle image"
                />
                <div className="flex">
                  <div className="capability-iconDiv">
                    <img
                      src={props.data ? props.data.middleIcon : "none"}
                      className="capability-icon"
                      alt="left icon"
                    />
                  </div>
                </div>
                <div className="capability-contentDiv">
                  <h3>{props.data ? props.data.middleTitle : "none"}</h3>
                  <p>{props.data ? props.data.middleContent : "none"}</p>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="roundDiv margin-down">
                <img
                  src={props.data ? props.data.rightImage : "none"}
                  className="capability-image"
                  alt="right image"
                />
                <div className="flex">
                  <div className="capability-iconDiv">
                    <img
                      src={props.data ? props.data.rightIcon : "none"}
                      className="capability-icon"
                      alt="left icon"
                    />
                  </div>
                </div>
                <div className="capability-contentDiv">
                  <h3>{props.data ? props.data.rightTitle : "none"}</h3>
                  <p>{props.data ? props.data.rightContent : "none"}</p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
};
