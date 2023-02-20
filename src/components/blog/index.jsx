import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Blog() {
  const currentBlogData = useSelector(
    (state) => state.currentData.currentBlogData
  );

  return (
    <div
      className="page-padding"
      style={{ paddingTop: 170, marginBottom: 100 }}
    >
      <div className="row nomargin">
        <div className="col-md-9">
          <div style={{ padding: "10 0 20 0" }}>
            <Link to="/learn">
              <div className="d-flex align-items-center">
                <div style={{ color: "#000", marginRight: 5 }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 13L6 8L11 3"
                      stroke="CurrentColor"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                <span className="subtitle" style={{ fontWeight: 600 }}>
                  ALL POSTS
                </span>
              </div>
            </Link>
          </div>
          <div className="blog-page-title">
            {currentBlogData ? currentBlogData.title : "Loading"}
          </div>
        </div>
      </div>
      <div className="row nomargin">
        <div
          className="blog-page-img"
          style={{ backgroundImage: `url(${currentBlogData.image})` }}
        ></div>
      </div>
      <div className="row nomargin" style={{ marginTop: 30 }}>
        <div className="blog-content-top">
          <div className="blog-author-wrapper">
            <div className="margin-right">
              <div className="blog-author-text">Written by</div>
              <div className="text-weight-medium">Dr. Alex Chan</div>
            </div>
            <div className="margin-right">
              <div className="blog-author-text">Published on</div>
              <div className="text-weight-medium">{currentBlogData.date}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-md-offset-4">
          <div className="learn-hero-content">
            {currentBlogData ? currentBlogData.content : "Loading"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
