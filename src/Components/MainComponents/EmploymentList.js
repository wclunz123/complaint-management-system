import React from "react";

import "./EmploymentList.css";

const EmploymentList = (props) => {
  return (
    <React.Fragment>
      <div className="employment-content__item">
        <ul>
          <li>{props.company}</li>
          <li>{props.jobtitle}</li>
          <li>{props.period}</li>
          <li>{props.description}</li>
          <br />
          <li>
            <b>Achievement: </b>
            {props.achievement}
          </li>
          <br />

          <li>
            <b>Technologies: </b>
            <span style={{ fontStyle: "italic" }}>{props.technology}</span>
          </li>
          {/* {props.description.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })} */}
        </ul>
      </div>
      <div className="" style={{ margin: "auto" }}>
        <img src={props.image} alt={props.company} />
      </div>
    </React.Fragment>
  );
};

export default EmploymentList;
