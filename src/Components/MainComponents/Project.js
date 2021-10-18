import React from "react";

import ProjectList from "./ProjectList";

import "./Project.css";

const Project = props => {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>
          <span>Here are some of my recent works.</span>
        </h2>
        <div className="project-list">
          {props.data.projects.map((item) => {
            return (
              <ProjectList
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                url={item.url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
