import React from "react";

import ResumeImg from "../assets/S.Karthik_Resume_frontend.pdf";
import ResumeImgJpg from "../assets/S.Karthik_Resume_frontend.jpg";

const Resume = () => {
  return (
    <>
    <div
      className="d-flex justify-content-center resume"
      style={{
        marginTop: "4.5rem",
        width: "100%",
        height: "100%",
      }}
    >
      <img src={ResumeImgJpg} alt="Resume" />
      <a href={ResumeImg} download="S.Karthik_Resume_frontend.pdf">Download Resume</a>
    </div>
    </>
  );
};

export default Resume;
