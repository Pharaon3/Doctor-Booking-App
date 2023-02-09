import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-3"></div>
          <div class="stacked-title-2 col-md-6">
            <div class="color-white subtitle">join the converation</div>
            <h1 class="heading-3 text-white">
              Stay on the leading edge of functional health news, biohacking
              tips and learn with me each month.
            </h1>

            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center footer-element">
          <p>&copy; 2021 DR ALEX CHAN </p>
          <div>
            <a
              href="https://github.com/Pharaon3/Doctor-Booking-App"
              rel="nofollow"
              style={{ marginLeft: "50px", marginRight: "50px" }}
            >
              PRIVACY POLICY
            </a>
            <a
              href="https://github.com/Pharaon3/Doctor-Booking-App"
              rel="nofollow"
              style={{ marginLeft: "50px", marginRight: "50px" }}
            >
              TERMS & CONDITIONS
            </a>
          </div>
        </div>
        <div className="footer-content">
          {props.data ? props.data.content : "Loading"}
        </div>
      </div>
    </div>
  );
};
