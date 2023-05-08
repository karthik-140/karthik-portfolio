import React from "react";

import ResumeImg from "../assets/S.Karthik_Resume_frontend _page-0001.jpg";

const Resume = () => {
  return (
    <div
      className="d-flex justify-content-center resume"
      style={{
        marginTop: "4.5rem",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      }}
    >
      <img src={ResumeImg} alt="Resume" />
    </div>
  );
};

export default Resume;
