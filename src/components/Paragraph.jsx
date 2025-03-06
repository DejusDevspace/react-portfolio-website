import React from "react";

function Paragraph(props) {
  return <p className={props.className}>{props.content}</p>;
}

export default Paragraph;
