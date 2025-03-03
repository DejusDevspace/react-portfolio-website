import React from "react";
import ProjectItem from "./ProjectItem";
import projects from "./projects";

function Projects() {
  return (
    <div className="work-overlay">
      <div className="work-heading">
        <h1>Projects</h1>
        <hr />
      </div>
      <div className="experience-list">
        <ul className="project-list">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              icon={project.icon}
              size="large"
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
