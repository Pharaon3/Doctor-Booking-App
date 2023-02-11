import React from "react";
import { Link } from "react-router-dom";

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
            <div className="col-md-5">
              <img
                src="img/portfolio/about.jpg"
                className="img-responsive workwithme-image mainImage"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <p className="workwithme-element-id">01</p>
              <h2 className="workwithme-element-title">
                {props.data ? props.data.element01Title : "Loading"}
              </h2>
              <p>{props.data ? props.data.element01Content : "Loading"}</p>
              <Link to="/book">
                {" "}
                <h3 className="roundBtn">Book a session</h3>
              </Link>
            </div>
          </div>
          <div id="workwithme-02" className="workwithme-elements">
            <div className="col-md-5">
              <p className="workwithme-element-id">02</p>
              <h2 className="workwithme-element-title">
                {props.data ? props.data.element02Title : "Loading"}
              </h2>
              <p>{props.data ? props.data.element02Content : "Loading"}</p>
              <h3 className="roundBtn">Shop Hidrate</h3>
            </div>
            <div className="col-md-5">
              <img
                src="img/portfolio/about.jpg"
                className="img-responsive workwithme-image mainImage"
                alt=""
              />
            </div>
          </div>
          <div id="workwithme-03" className="workwithme-elements">
            <div className="col-md-5">
              <img
                src="img/portfolio/about.jpg"
                className="img-responsive workwithme-image mainImage"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <p className="workwithme-element-id">03</p>
              <h2 className="workwithme-element-title">
                {props.data ? props.data.element03Title : "Loading"}
              </h2>
              <p>{props.data ? props.data.element03Content : "Loading"}</p>
              <Link to="/contact">
                <h3 className="roundBtn">Contact me</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
