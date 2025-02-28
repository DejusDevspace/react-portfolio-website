import React, { useState } from "react";
import NavIcon from "./NavIcon";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";

function SideBar({ onPageChange }) {
  const [isselected, setSelected] = useState(0);
  const icons = [
    { icon: CottageRoundedIcon, page: "home" },
    { icon: PersonRoundedIcon, page: "about" },
    { icon: BusinessCenterRoundedIcon, page: "projects" },
    { icon: MarkunreadRoundedIcon, page: "contact" },
  ];
  const iconSize = "large";

  function toggleActive(id) {
    setSelected(id);
    onPageChange(icons[id].page);
  }

  return (
    <div className="sidebar">
      <ul>
        {icons.map((item, index) => (
          <NavIcon
            key={index}
            id={index}
            child={item.icon}
            size={iconSize}
            onActive={isselected === index ? { opacity: 1 } : null}
            setActive={toggleActive}
          />
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
