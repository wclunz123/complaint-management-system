import React from "react";

import EducationList from "./EducationList";

import "./Education.css";

const Education = props => {
  return (
    <section className="education" id="education">
      <div className="education-content">
        <h2>
          <span>Education</span>
        </h2>
        <div className="education-grid-container">
          {props.data.education.map((item) => {
            return (
              <EducationList
                key={item.university}
                logo={item.logo}
                university={item.university}
                qualification={item.qualification}
                period={item.period}
                comment={item.comment}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
