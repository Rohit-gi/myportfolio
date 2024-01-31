import React from 'react';

const Resume = () => {

    const pdfLink = require('../assets/Rohit_resume.pdf');

  return (
    <div>
      <iframe
        title="Resume"
        src={pdfLink}
        width="100%"
        height="900px"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
