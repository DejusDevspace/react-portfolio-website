import React from "react";
import Paragraph from "./Paragraph";

function Home() {
  return (
    <div className="home">
      <h1>Hi, I'm Deju {"\u{1F44B}"}</h1>
      <Paragraph content="Full Stack Data Scientist | Generative AI | MLOps | Backend Developer" />
      <Paragraph content="Welcome to my portfolio!" />
    </div>
  );
}

export default Home;
