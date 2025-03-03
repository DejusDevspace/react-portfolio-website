import React from "react";

function Icon({ child: Child, ...rest }) {
  return <Child fontSize={rest.size} />;
}

export default Icon;
