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
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center text-white font-montserrat">
      <Header />
      <SideBar onPageChange={setCurrentPage} />
      <div className="overlay bg-black/80 p-12 flex flex-col items-center justify-center h-screen w-screen">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
