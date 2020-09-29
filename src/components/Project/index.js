import React from "react";
import "./styles.scss";

const Project = ({ project, onPress }) => {
  const baseUrl = 'https://raw.githubusercontent.com/thieumao/ShowCaseNodeJS/master/data/list';
  const src = `${baseUrl}/${project.id}.png`
  return (
    <button className="project" onClick={onPress}>
        <div>
          <h3>{project.name}</h3>
        </div>
        <div>
          <img src={src} alt={project.name} width="100" height="100" />
        </div>
    </button>
  );
};

export default Project;