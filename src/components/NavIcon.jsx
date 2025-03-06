import React from "react";

function NavIcon({ child: Child, ...rest }) {
  return (
    <li style={rest.onActive} onClick={() => rest.setActive(rest.id)}>
      <Child fontSize={rest.size} />
    </li>
  );
}

export default NavIcon;
