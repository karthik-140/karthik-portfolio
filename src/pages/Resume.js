import React from "react";

import ResumeImg from "../assets/S.Karthik_Resume_frontend _page-0001.jpg";

const Resume = () =>{
    return (
        <div className="d-flex justify-content-center" style={{marginTop: "4.5rem"}} >
            <img src={ResumeImg} alt="Resume" width="800px" height="1200px" />
        </div>
    )
}

export default Resume;