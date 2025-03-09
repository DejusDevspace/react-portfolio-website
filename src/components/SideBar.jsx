import React, { useState, useEffect } from "react";
import NavIcon from "./NavIcon";
import Icon from "./Icon";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import MenuIcon from "@mui/icons-material/Menu";

function SideBar({ onPageChange }) {
  const [isselected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  }

  return (
    <div className="hero-section">
      <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <Icon child={MenuIcon} size={iconSize} />
      </div>
      <nav className={`sidebar ${isOpen ? "active" : ""}`}>
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
      </nav>
    </div>
  );
}

export default SideBar;
