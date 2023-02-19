import React, { useState } from "react";
import ProjectList from "./ProjectList";

const Work = ({ setCursorStyle }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);
  };

  const projects = [
    {
      id: "chooeicha",
      title: "Chooeicha",
      year: "2022",
      tag1: "UI/UX",
      tag2: "Web Dev",
      tag3: "Typescript",
      linkTo: "https://chooeicha.netlify.app/",
    },
    {
      id: "stopify",
      title: "Stopify",
      year: "2022",
      tag1: "Spotify API",
      tag2: "Web Dev",
      tag3: "React",
      linkTo: "https://stopify-ted.netlify.app/",
    },
    {
      id: "pokedex",
      title: "Pokédex",
      year: "2022",
      tag1: "Javascript",
      tag2: "Web Dev",
      tag3: "PokéAPI",
      linkTo: "https://pokedex-ted.netlify.app/",
    },
    {
      id: "aile-noire-culture",
      title: "Aile Noire Culture",
      year: "2021",
      tag1: "Python",
      tag2: "Quiz Game",
      tag3: "Pygame",
      linkTo: "",
    },
    {
      id: "pythomon",
      title: "Pythomon",
      year: "2021",
      tag1: "Python",
      tag2: "Game Dev",
      tag3: "Pygame",
      linkTo: "",
    },
  ];

  return (
    <div id="work" className="work">
      <div className="work-left">
        <div className="work-img">
          <img
            src="/static/chooeicha.png"
            alt="chooeicha-preview"
            className={`${
              hoveredProject === "chooeicha" ? "fade-in" : "fade-out"
            }`}
          />
          <img
            src="/static/stopify.png"
            alt="stopify-preview"
            className={`${
              hoveredProject === "stopify" ? "fade-in" : "fade-out"
            }`}
          />
          <img
            src="/static/pokedex.png"
            alt="pokedex-preview"
            className={`${
              hoveredProject === "pokedex" ? "fade-in" : "fade-out"
            }`}
          />
          <img
            src="/static/aile-noire-culture.png"
            alt="aile-noire-culture-preview"
            className={`${
              hoveredProject === "aile-noire-culture" ? "fade-in" : "fade-out"
            }`}
          />
          <img
            src="/static/pythomon.png"
            alt="pythomon-preview"
            className={`${
              hoveredProject === "pythomon" ? "fade-in" : "fade-out"
            }`}
          />
        </div>
      </div>
      <div className="work-right">
        <h2 className="section-header">
          <span>Projets</span>
          <span className="projects-nb">{projects.length}</span>
        </h2>
        <div
          onMouseEnter={() => setCursorStyle("pointer")}
          onMouseLeave={() => setCursorStyle("default")}
          className="project-list-wrapper"
        >
          <ProjectList
            onProjectHover={handleProjectHover}
            projects={projects}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
