import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export const Element = (props) => {
  return (
    <div id="workwithme">
      <div className="container">
        <div className="row">
          {props.data
            ? props.data.map(function (item, index) {
                return (
                  <div
                    key={"workwithme-element-" + index}
                    className="workwithme-elements"
                  >
                    <div className="flex col-md-6">
                      <img
                        src={item.image}
                        className="img-responsive workwithme-element-image mainImage"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="workwithme-element-id">{item.subtitle}</p>
                      <h2 className="workwithme-element-title">{item.title}</h2>
                      <p>{item.content}</p>
                      <h3 className="roundBtn">{item.button}</h3>
                    </div>
                  </div>
                );
              })
            : "Loading"}
        </div>
      </div>
    </div>
  );
};
