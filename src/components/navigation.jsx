import React from "react";

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
          <a className="navbar-brand page-scroll" href="#page-top">
            Dr. Alex Chan
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                LEARN
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Work with me
              </a>
            </li>
            <li>
            <a href="https://www.instagram.com/dralexchan/" target="_blank" className="social-icon small w-inline-block" style={{display: 'flex'}}>
              <img src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c5a234569c68_icons8-instagram.svg" loading="lazy" alt="" className="social-image" />
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/alex-chan-a12196214/?originalSubdomain=ca" target="_blank" className="social-icon small w-inline-block" style={{display: 'flex'}}>
              <img src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c54f9e569c66_icons8-linkedin-2.svg" loading="lazy" alt="" className="social-image" />
              </a>
            </li>
            <li>
            <a href="https://www.facebook.com/doctoralexchan/" target="_blank" className="social-icon small w-inline-block" style={{display: 'flex'}}>
              <img src="https://assets.website-files.com/616786a99cb0c574cc569c06/616786a99cb0c5bec3569c69_icons8-facebook-f.svg" loading="lazy" alt="" className="social-image" />
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
