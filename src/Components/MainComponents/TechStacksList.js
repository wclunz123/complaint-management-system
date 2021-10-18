import React from "react";

import "./TechStacksList.css";

const TechStacksList = (props) => {
  return (
    <div className="techstacks-list-items">
      <img
        className="techstacks-list__image"
        src={props.image}
        alt={props.title}
      ></img>
      <div className="techstacks-list__image-overlay-title">{props.title}</div>
      <p className="techstacks-list__image-overlay-desc">{props.description}</p>
    </div>
  );
};

export default TechStacksList;
