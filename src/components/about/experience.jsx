import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

export const Experience = (props) => {
  return (
    <div style={{ marginTop: 200 }}>
      <div className="row">
        <div className="col-md-2 subtitle experience-title">
          {props.data ? props.data.title : "Loading"}
        </div>
        <div className="col-md-7 col-md-offset-1">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <div className="divide-line"></div>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="experience-header">
                <div>{props.data ? props.data.title0 : "Loading"}</div>
              </Accordion.Header>
              <Accordion.Body className="experience-body">
                {props.data
                  ? props.data.content0.map(function (item, i) {
                      return <p key={"content0" + i}>{item}</p>;
                    })
                  : "Loading"}
              </Accordion.Body>
            </Accordion.Item>
            <div className="divide-line"></div>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="experience-header">
                {props.data ? props.data.title1 : "Loading"}
              </Accordion.Header>
              <Accordion.Body className="experience-body">
                {props.data
                  ? props.data.content1.map(function (item, i) {
                      return <p key={"content0" + i}>{item}</p>;
                    })
                  : "Loading"}
              </Accordion.Body>
            </Accordion.Item>
            <div className="divide-line"></div>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="experience-header">
                {props.data ? props.data.title2 : "Loading"}
              </Accordion.Header>
              <Accordion.Body className="experience-body">
                {props.data
                  ? props.data.content2.map(function (item, i) {
                      return <p key={"content0" + i}>{item}</p>;
                    })
                  : "Loading"}
              </Accordion.Body>
            </Accordion.Item>
            <div className="divide-line"></div>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="experience-header">
                {props.data ? props.data.title3 : "Loading"}
              </Accordion.Header>
              <Accordion.Body className="experience-body">
                {props.data
                  ? props.data.content3.map(function (item, i) {
                      return <p key={"content0" + i}>{item}</p>;
                    })
                  : "Loading"}
              </Accordion.Body>
            </Accordion.Item>
            <div className="divide-line"></div>
          </Accordion>
        </div>
      </div>
      <div className="divide-line"></div>
    </div>
  );
};
