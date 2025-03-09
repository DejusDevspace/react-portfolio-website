import React, { useState } from "react";
import Resume from "./Resume";
import SideBar from "./SideBar";
import Icon from "./Icon";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  function renderPage() {
    switch (currentPage) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="hero-section">
      <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <Icon child={MenuIcon} size="large" />
      </div>
      <SideBar onPageChange={setCurrentPage} onOpen={isOpen} />
      <Resume />
      <div
        className={`overlay ${
          currentPage === "projects"
            ? "work-overlay"
            : currentPage === "contact"
            ? "contact-flex"
            : ""
        }`}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
