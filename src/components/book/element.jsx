import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  message: "",
};
export const Element = (props) => {
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
      <form name="sentMessage" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="form-group contact-form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="contact-element-input"
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
            <div className="form-group contact-form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="contact-element-input"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="form-group contact-form-group">
              <input
                type="phone"
                id="phone"
                name="phone"
                className="contact-element-input"
                placeholder="Phone"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="form-group contact-form-group">
              <input
                type="date"
                id="date"
                name="date"
                className="contact-element-input"
                placeholder="Date"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="form-group contact-form-group">
              <input
                type="time"
                id="time"
                name="time"
                className="contact-element-input"
                placeholder="Time"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="form-group contact-form-group">
              <textarea
                type="message"
                id="message"
                name="message"
                className="contact-element-input"
                placeholder="Message"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div id="success"></div>
        <div className="row flex">
          <button type="submit" className="btn btn-custom btn-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
