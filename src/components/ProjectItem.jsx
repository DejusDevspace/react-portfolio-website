import React from "react";
import Icon from "./Icon";
import Paragraph from "./Paragraph";

function ProjectItem(props) {
  return (
    <div className="project-item">
      <i>
        <Icon child={props.icon} size={props.size} />
      </i>
      <li>
        <div className="project-content">
          <p className="project-title">
            <a
              href={props.link ? props.link : "https://example.com"}
              target="_blank"
            >
              {props.title}
            </a>
          </p>
          <Paragraph
            className="project-description"
            content={props.description}
          />
        </div>
      </li>
    </div>
  );
}

export default ProjectItem;
