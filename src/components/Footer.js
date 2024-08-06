import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Contact:</h2>
      <div className="socialMedia">
        <EmailIcon/>
        <LinkedInIcon />
      </div>
      <p> &copy; 2024 Rohit's Portfolio </p>
    </div>
  );
}

export default Footer;
