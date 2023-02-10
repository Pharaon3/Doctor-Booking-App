import React, { useState, useEffect } from "react";

export const Story = (props) => {
  return (
    <div style={{ margin: 50, marginTop: 200 }}>
      <p className="subtitle">
        {props.data ? props.data.subtitle : "Loading"}
      </p>
      <p className="about-story-title">
        {props.data ? props.data.title : "Loading"}
      </p>
      <p className="about-story-content">
        {props.data ? props.data.content : "Loading"}
      </p>
    </div>
  );
};
