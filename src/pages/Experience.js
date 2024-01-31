import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Delhi Technological University
          </h3>
          
          <h4 className="vertical-timeline-element-subtitle">
             New Delhi, Delhi
          </h4>

          <p> Bachelor of Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Wisconsin-Madison
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
             Wisconsin, USA 
          </h4>

          <p> Master of Science - Information Sciences</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - Meesho
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, Karnataka
          </h4>
          <p>Executed front-end development projects aligned with the growth team's marketing experiments</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer - Blemacion Tech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, Delhi
          </h4>
          <p>
          Implemented front-end projects for diverse clients, utilizing HTML, CSS, JavaScript, and React components.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
