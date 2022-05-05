import React from "react";
import EmploymentList from "./EmploymentList";

import "./Employment.css";

const Employment = (props) => {
  return (
    <section className="employment" id="employment">
      <div className="education-content">
        <h2>
          <span>Employment</span>
        </h2>
        <div className="employment-grid-container">
          {props.data.employment.map((item, idx) => {
            return (
              //   <div
              //     className="d-flex flex-row justify-content-between"
              //     style={{ widht: "80%", marginLeft: "10%" }}
              //   >
              <EmploymentList
                key={idx}
                company={item.company}
                jobtitle={item.jobtitle}
                period={item.period}
                description={item.description}
                image={item.image}
                technology={item.technology}
                achievement={item.achievement}
              />
              //   </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Employment;
