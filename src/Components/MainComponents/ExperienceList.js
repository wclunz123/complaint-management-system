import React from "react";

import "./ExperienceList.css";

const ExperienceList = props => {
  return (
    <React.Fragment>
      <div className="experience-grid__image">
        <img src={props.logo} alt={props.company} />
      </div>
      <div className="experience-content__item">
        <ul>
          <li>{props.company}</li>
          <li>{props.title}</li>
          <li>{props.period}</li>
          <br />
          <li>{props.jobdesc}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ExperienceList;
