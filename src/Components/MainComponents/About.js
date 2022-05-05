import React from "react";

import Button from "../FormElements/Button";
import resume from "../../Resume 2021 - Wong Chung Lun (Updated).pdf";
import "./About.css";

const About = (props) => {
  return (
    <section id="about">
      <div className="about-content">
        <div className="d-flex flex-row">
          <div className="d-flex flex-column">
            <h3>{props.data.about.title}</h3>
            <div className="about-content__content-item">
              <p>{props.data.about.description}</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <img src={props.data.about.image} alt={props.data.about.title} />
            <div className="about-resume mt-4">
              <Button href={resume} download>
                Leonard's Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
