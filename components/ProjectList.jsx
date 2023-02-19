import React from "react";

const ProjectList = ({ onProjectHover, projects }) => {
  const handleProjectHover = (projectId) => {
    onProjectHover(projectId);
  };

  return (
    <div className="project-list">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            onMouseEnter={() => handleProjectHover(project.id)}
            onMouseLeave={() => handleProjectHover(null)}
          >
            <a href={project.linkTo}>
              <div className="project-item">
                <div className="project-title-wrapper">
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-year">{project.year}</h4>
                </div>
                <div className="project-tag">
                  <ul>
                    <li>{project.tag1}</li>
                    <li>{project.tag2}</li>
                    <li>{project.tag3}</li>
                  </ul>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
