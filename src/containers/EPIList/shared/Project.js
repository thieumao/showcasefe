import React from "react";

const Project = ({ project, onPress }) => {
  const baseUrl = 'https://raw.githubusercontent.com/thieumao/ShowCaseNodeJS/master/data/list';
  const src = `${baseUrl}/${project.id}.png`
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
          <img src={src} alt={project.name} width="100" height="100" />
        </div>
      </button>
    </li>
  );
};

export default Project;