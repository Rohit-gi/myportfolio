import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="Project screenshot"/>
      <h4>
        <b>Skills:</b> {project.skills}
      </h4>
      <a
            href={project.projLink}
            target="_blank"
            rel="noopener noreferrer"
          >
      <OpenInNewIcon/>
      </a>
      <p className="desc">{project.description}</p>
    </div>
  );
}

export default ProjectDisplay;
