import React from "react";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import NavIcon from "./NavIcon";

function Header() {
  return (
    <div className="resume">
      <ul>
        <NavIcon child={CloudDownloadRoundedIcon} size="large" />
      </ul>
    </div>
  );
}

export default Header;
