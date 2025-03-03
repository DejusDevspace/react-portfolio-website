import React from "react";
import Icon from "./Icon";

function ProjectItem(props) {
  return (
    <div className="project-item">
      <li>
        <i>
          <Icon child={props.icon} size={props.size} />
        </i>
        <div className="project-content">
          <p className="project-title">
            <a
              href={props.link ? props.link : "https://example.com"}
              target="_blank"
            >
              {props.title}
            </a>
          </p>
          <p className="project-description">{props.description}</p>
        </div>
      </li>
    </div>
  );
}

export default ProjectItem;
