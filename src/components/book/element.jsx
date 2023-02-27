import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { Radio, Input, Space } from 'antd';
import { Select, DatePicker } from 'antd';

const initialState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  message: "",
};
export const Element = (props) => {

  // const location = props.Location;
  // console.log("location", location)

  const [location, setLocation] = useState();
  useEffect(() => {
    // setLocation(props.data.Location);
  }, []);

  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const dateChange = (date, dateString) => {
    console.log("date: ", date);
    console.log("Year: ", date["$y"])
    console.log("Month: ", date["$M"] + 1)
    console.log("Day: ", date["$D"])
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
  const onChange4 = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };
  const [value4, setValue4] = useState('Apple');
  const onLocationChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onLocationSearch = (value) => {
    console.log('search:', value);
  };

  console.log("props.data.year", props.data.year[0].month)
  useEffect(() => {
    // setLocation(props.data.Location);
    props.data.year.map((year, yearIndex) => {
      year.month.map((month, monthIndex) => {
        month.day.map((day, dayIndex) => {
          // return(
          //   <div key={"date_datay" + yearIndex + "m" + monthIndex + "d" + dayIndex}>
          //     <Radio value={dayIndex}>{day.date}</Radio>
          //   </div>
          // )
          console.log(day);
        })
      })
    })
  }, []);
  

  return (
    <div>
      <form name="sentMessage" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="form-group contact-form-group">
                  <DatePicker onChange={dateChange} className="contact-element-input" />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <div className="form-group contact-form-group">
                  <Select
                    showSearch
                    placeholder="Select location"
                    optionFilterProp="children"
                    onChange={onLocationChange}
                    onSearch={onLocationSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={props.data.Location}
                    className='dropdown'
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group contact-form-group">
                  <Radio.Group onChange={onChange4} value={value4} optionType="button" buttonStyle="solid">
                    <Space direction="vertical">
                      {
                        // console.log(props.data.year)
                        // props.data.year.map((year, yearIndex) => {
                        //   if(yearIndex == 0)
                        //     year.map((month, monthIndex) => {
                        //       if(monthIndex == 1)
                        //         month.map((day, dayIndex) => {
                        //           return(
                        //             <div key={"date_datay" + yearIndex + "m" + monthIndex + "d" + dayIndex}>
                        //               <Radio value={dayIndex}>{day.date}</Radio>
                        //             </div>
                        //           )
                        //         })
                        //     })
                        // })
                       
                      }
                      <Radio value={1}>Option A</Radio>
                      <Radio value={2}>Option B</Radio>
                      <Radio value={3} disabled>Option C</Radio>
                    </Space>
                  </Radio.Group>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
          <div id="rightSide" className="col-md-6">
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
                    type="text"
                    id="surname"
                    name="surname"
                    className="contact-element-input"
                    placeholder="Surname"
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
                    placeholder="Mobile Number"
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
                    type="number"
                    id="acn"
                    name="acn"
                    className="contact-element-input"
                    placeholder="Assurance Card Number"
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
                  <Select
                    showSearch
                    placeholder="Select location"
                    optionFilterProp="children"
                    onChange={onLocationChange}
                    onSearch={onLocationSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: 'jack',
                        label: 'Jack',
                      },
                      {
                        value: 'lucy',
                        label: 'Lucy',
                      },
                      {
                        value: 'tom',
                        label: 'Tom',
                      },
                    ]}
                    className='dropdown'
                  />
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
