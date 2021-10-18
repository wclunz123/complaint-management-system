import React from "react";

import "./EducationList.css";

const EducationList = (props) => {
  return (
    <React.Fragment>
      <div className="education-grid__image">
        <img src={props.logo} alt={props.university} />
      </div>
      <div className="education-content__item">
        <ul>
          <li>{props.university}</li>
          <li>{props.qualification}</li>
          <li>{props.period}</li>
          <li>{props.comment}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default EducationList;
