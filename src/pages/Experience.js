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
          date={<span style={{ color: "#cdcdff" }}>2023 - 2025</span>}
          iconStyle={{ background: "#23283e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Wisconsin-Madison
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
             Wisconsin, USA 
          </h4>

          <p> Master of Science - Information Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: "#cdcdff" }}>2021 - 2023</span>}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - Meesho
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, Karnataka
          </h4>
          <p>Developed frontend solutions for Meesho</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={{ color: "#cdcdff" }}>2019 - 2021</span>}
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer (Frontend) - Blemacion Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, Delhi
          </h4>
          <p>
          Implemented front-end projects for diverse clients, utilizing HTML, CSS, JavaScript, and React components.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={<span style={{ color: "#cdcdff" }}>2014 - 2018</span>}
          iconStyle={{ background: "#23283e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Delhi Technological University
          </h3>
          
          <h4 className="vertical-timeline-element-subtitle">
             New Delhi, Delhi
          </h4>

          <p> Bachelor of Technology, Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
