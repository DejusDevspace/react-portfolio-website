import React from "react";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import Icon from "./Icon";

function DownloadButton() {
  return (
    <div className="download-button">
      <a href="../assets/docs/CV-Deju-Adejo.pdf" download="CV-Deju-Adejo.pdf">
        <li>
          <Icon child={CloudDownloadRoundedIcon} size="large" />
        </li>
      </a>
    </div>
  );
}

export default DownloadButton;
