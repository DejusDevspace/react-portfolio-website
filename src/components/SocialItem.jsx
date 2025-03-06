import React from "react";
import Icon from "./Icon";
import ListItem from "./ListItem";

function SocialItem(props) {
  return (
    <div className="social-link">
      <a href={props.link} target="_blank">
        <Icon child={props.icon} size={props.size} />
        <ListItem content={props.name} />
      </a>
    </div>
  );
}

export default SocialItem;
