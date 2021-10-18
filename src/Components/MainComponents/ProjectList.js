import React from 'react';

import './ProjectList.css';

const ProjectList = props => {
    return (
      <div className="project-list-items">
        <img className="project-list__image" src={props.image} alt={props.title}></img>
        <div className="project-list__image-overlay overlay--blur">
          <div className="project-list__image-overlay-title">{props.title}</div>
          <p className="project-list__image-overlay-desc">
            {props.description}
          </p>
          <form>
          <button className="project-list__image-overlay-button">
            <a href={props.url} target="_blank" rel="noreferrer" >Visit Website</a>
          </button>
          </form>
        </div>
      </div>
    );
}

export default ProjectList;