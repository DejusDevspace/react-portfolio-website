import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

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
    <div>
      <Header />
      <SideBar onPageChange={setCurrentPage} />
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
