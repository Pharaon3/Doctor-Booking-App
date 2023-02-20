import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
            <Link to="/">
              <span className="logo">Dr. Alex Chan</span>
            </Link>
          {" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
                <Link to="/about">
                  <span className="navMenu">About</span>
                </Link>
            </li>
            <li>
                <Link to="/learn">
                  <span className="navMenu">LEARN</span>
                </Link>
            </li>
            <li>
                <Link to="/workwithme">
                  <span className="navMenu">Work with me</span>
                </Link>
            </li>
            <li>
                <Link to="/blog">
                  <span className="navMenu">Blog</span>
                </Link>
            </li>
            <li className="flex" style={{ display: "flex", height: 45 }}>
              <div id="socialImages" className="flex">
                <div className="social-roundBtn">
                  <a
                    href="https://www.instagram.com/dralexchan/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon small w-inline-block"
                    style={{ display: "flex" }}
                  >
                    <img
                      src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c5a234569c68_icons8-instagram.svg"
                      loading="lazy"
                      alt=""
                      className="social-image"
                    />
                  </a>
                </div>
                <div className="social-roundBtn">
                  <a
                    href="https://www.linkedin.com/in/alex-chan-a12196214/?originalSubdomain=ca"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon small w-inline-block"
                    style={{ display: "flex" }}
                  >
                    <img
                      src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c54f9e569c66_icons8-linkedin-2.svg"
                      loading="lazy"
                      alt=""
                      className="social-image"
                    />
                  </a>
                </div>
                <div className="social-roundBtn">
                  <a
                    href="https://www.facebook.com/doctoralexchan/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon small w-inline-block"
                    style={{ display: "flex" }}
                  >
                    <img
                      src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c5bec3569c69_icons8-facebook-f.svg"
                      loading="lazy"
                      alt=""
                      className="social-image"
                    />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <Link to='/contact'>
                <span className="contact-roundBtn">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
