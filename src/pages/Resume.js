import React from "react";

import ResumeImg from "../assets/ResumeKarthik.pdf";

const Resume = () => {
  return (
    <>
      {/* <div
        className="d-flex justify-content-center resume"
        style={{
          marginTop: "4.5rem",
          width: "100%",
          height: "100%",
        }}
      >
        <img src={ResumeImgJpg} alt="Resume" />
        <a href={ResumeImg} download="Resume_karthik140_frontend_1722830077.pdf">Download Resume</a>
      </div> */}
      <div
        style={{
          marginTop: "4.5rem",
          width: "100%",
        }}
      >
        <iframe title="Resume" src={ResumeImg} width='100%' height='700px' />
      </div>
    </>
  );
};

export default Resume;
