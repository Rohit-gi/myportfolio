import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Rohit</h2>
        <div className="prompt">
          <p>A software developer with a keen focus in development using latest web technologies</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h2> Skills</h2>
        <ol className="list">
          <li className="item">
            <h4> Front-End</h4>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, Material UI, Tailwind CSS, Styled-Components
            </span>
          </li>
          <li className="item">
            <h4>Back-End</h4>
            <span>
            MySQL, NodeJS          
            </span>
          </li>
          <li className="item">
            <h4>Languages</h4>
            <span>JavaScript, TypeScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
