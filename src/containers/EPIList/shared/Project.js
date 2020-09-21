import React from "react";

const Project = ({ project, onPress }) => {
  return (
    <li className="project">
      <button onClick={onPress}>
        <div>
          <b>Name:</b> {project.name}
        </div>
        <div>
          <b>ID:</b> {project.id}
        </div>
        <div>
          <img src={project.img} alt={project.name} width="100" height="100" />
        </div>
      </button>
    </li>
  );
};

export default Project;