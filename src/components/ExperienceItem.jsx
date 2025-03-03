import React from "react";
import ListItem from "./ListItem";

function ExperienceItem(props) {
  const tasks = props.tasks;
  return (
    <div className="experience-item">
      <h3>{props.title}</h3>
      <em>{props.duration}</em>
      <ul>
        {tasks.map((task, index) => {
          return <ListItem key={index} content={task} />;
        })}
      </ul>
    </div>
  );
}

export default ExperienceItem;
