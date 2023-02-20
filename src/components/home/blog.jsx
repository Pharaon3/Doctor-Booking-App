import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentBlogData } from "../../features/currentData/currentData";

export const Blog = (props) => {
  const dispatch = useDispatch();

  return (
    <div id="blog">
      <div className="container">
        <div className="row">
          <h4 className="blog-subtitle"> BLOG </h4>
          <h2 className="blog-title"> Insights, research, and news </h2>
          <Link to="/blog">
            <h3 className="blog-roundBtn" style={{ marginBottom: "100px" }}>
              {" "}
              READ MORE{" "}
            </h3>
          </Link>
          <MDBRow>
            <MDBCol md="6">
              <div className="blogRoundDiv">
                <img
                  src={props.data ? props.data.leftImage : "none"}
                  className="blog-image"
                  alt="left img"
                />
                <div className="blog-contentDiv">
                  <h3 className="blogDate">
                    {props.data ? props.data.leftDate : "none"}
                  </h3>
                  <h3>{props.data ? props.data.leftTitle : "none"}</h3>
                  <p>{props.data ? props.data.leftContent : "none"}</p>
                  <Link
                    to="/blog"
                    onClick={() => {
                      dispatch(
                        setCurrentBlogData({
                          date: props.data.leftDate,
                          image: props.data.leftImage,
                          title: props.data.leftTitle,
                          content: props.data.leftContent,
                        })
                      );
                    }}
                  >
                    <p className="link">Read more</p>
                  </Link>
                </div>
              </div>
            </MDBCol>
            <MDBCol md="6" className="margin-down">
              <div className="blogRoundDiv">
                <img
                  src={props.data ? props.data.rightImage : "none"}
                  className="blog-image"
                  alt="right img"
                />
                <div className="blog-contentDiv">
                  <h3 className="blogDate">
                    {props.data ? props.data.rightDate : "none"}
                  </h3>
                  <h3>{props.data ? props.data.rightTitle : "none"}</h3>
                  <p>{props.data ? props.data.rightContent : "none"}</p>
                  <Link
                    to="/blog"
                    onClick={() => {
                      dispatch(
                        setCurrentBlogData({
                          date: props.data.rightDate,
                          image: props.data.rightImage,
                          title: props.data.rightTitle,
                          content: props.data.rightContent,
                        })
                      );
                    }}
                  >
                    <p className="link">Read More</p>
                  </Link>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
};
