import React from "react";

import Button from "../FormElements/Button";
import resume from "../../Resume 2021 - Wong Chung Lun (Updated).pdf";

import "./About.css";

const About = (props) => {
  return (
    <section id="about">
      <div className="about-content">
        <h3>{props.data.about.title}</h3>
        <div className="about-content__content-item">
          <p>{props.data.about.description}</p>
          <img src={props.data.about.image} alt={props.data.about.title} />
        </div>
        <div className="about-resume">
          <Button href={resume} download>
            Leonard's Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
