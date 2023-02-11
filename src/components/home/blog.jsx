import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export const Blog = (props) => {
  return (
    <div id="blog">
      <div className="container">
        <div className="row">
          <h4 className="blog-subtitle"> BLOG </h4>
          <h2 className="blog-title"> Insights, research, and news </h2>
          <h3 className="blog-roundBtn" style={{marginBottom: '100px'}}> READ MORE </h3>
          <MDBRow>
            <MDBCol md="6">
              <div className="blogRoundDiv">
                <img
                  src={props.data ? props.data.leftImage : "none"}
                  className="blog-image"
                  alt="left image"
                />
                <div className="blog-contentDiv">
                  <h3 className="blogDate">{props.data ? props.data.leftDate : "none"}</h3>
                  <h3>{props.data ? props.data.leftTitle : "none"}</h3>
                  <p>{props.data ? props.data.leftContent : "none"}</p>
                  <p className="link">Read more</p>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="6" className="margin-down" >
              <div className="blogRoundDiv">
                <img
                  src={props.data ? props.data.rightImage : "none"}
                  className="blog-image"
                  alt="right image"
                />
                <div className="blog-contentDiv">
                  <h3 className="blogDate">{props.data ? props.data.rightDate : "none"}</h3>
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
