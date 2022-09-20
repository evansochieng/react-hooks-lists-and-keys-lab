import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projects.map( (project) => {
          const {id, name, about, technologies} = project;
          return <ProjectItem key={id} name={name} about={about} technologies={technologies}/>
        })}
      </div>
    </div>
  );
}

export default ProjectList;
