import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I am Rohit</h2>
        <h3>A Front End Developer</h3>
        <div className="desc">
          <p>
            Experienced in creating intuitive user interfaces using JavaScript.
            Actively learning and applying the latest web technologies to
            enhance user experience and contribute to effective product
            development.
          </p>
        </div>
        <div className="prompt">
          <a href="/assets/Rohit_resume.pdf" target="_blank"
            rel="noopener noreferrer">
            <span type="button" class="btn btn--outline">
              Resume
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-k96/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Rohit-gi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="projects">
        <h1>LATEST PROJECTS</h1>
        <div className="projectList">
          {ProjectList.slice(0, 3).map((project, idx) => (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
            />
          ))}
        </div>
      </div>

      <div className="skills_section">
        <h1> Skills</h1>
        <ul className="skills_list">
          <li className="skills_list-item button">HTML</li>
          <li className="skills_list-item ">CSS</li>
          <li className="skills_list-item ">JavaScript</li>
          <li className="skills_list-item ">TypeScript</li>
          <li className="skills_list-item ">React.js</li>
          <li className="skills_list-item ">ContextAPI</li>
          <li className="skills_list-item ">Redux</li>
          <li className="skills_list-item ">SASS</li>
          <li className="skills_list-item ">BootStrap</li>
          <li className="skills_list-item ">Material UI</li>
          <li className="skills_list-item ">Styled-Components</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
