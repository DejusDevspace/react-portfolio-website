import React from "react";
import ListItem from "./ListItem";
import ExperienceItem from "./ExperienceItem";
import skills from "./skills";
import experience from "./experience";

function About() {
  return (
    <div className="about-section">
      <div className="content-wrapper">
        <div className="content summary">
          <h2>About Me</h2>
          <p>
            I'm a full stack data scientist and undergraduate student of
            Mechatronics Engineering at Bowen University, currently in my 500
            level. My passion lies in leveraging cutting-edge AI technologies to
            solve real-world problems.
          </p>
          <p>
            My expertise spans machine learning, deep learning, natural language
            processing, Azure MLOps, backend development, and many others, with
            a particular fascination for generative AI and its potential to
            revolutionize various industries. I'm proficient in using LangChain
            to build powerful Large Language Model (LLM)-powered applications,
            constantly pushing the boundaries of what's possible with AI.
          </p>
        </div>
        <div className="content experience-box">
          <h2>Experience</h2>
          {experience.map((exp, index) => {
            return (
              <ExperienceItem
                key={index}
                title={exp.title}
                duration={exp.duration}
                tasks={exp.tasks}
              />
            );
          })}
        </div>
        <div className="content skills content-span">
          <h2>Skills & Technologies</h2>
          <ul>
            {skills.map((skill, index) => {
              return <ListItem key={index} content={skill} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
