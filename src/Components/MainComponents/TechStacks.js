import React from "react";

import TechStacksList from "./TechStacksList";

import "./TechStacks.css";

const TechStacks = props => {
  return (
    <section className="techstacks" id="techstacks">
      <div className="techstacks-content">
        <h2>
          <span>Techstacks</span>
        </h2>
        <div className="techstacks-list">
          {props.data.techstacks.map((item) => {
            return (
              <TechStacksList
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
