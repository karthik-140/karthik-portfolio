import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
//import CodingImg from "../assets/Coding.png";

import "./Home.css";
//import ProfileImg from "../assets/ProfileImg.jpg";

const Home = () => {
  const history = useHistory();

  // const recipientEmail = 'saif@gmail.com';

  // const mailHandler = () => {
  //   window.location.href = `mailto:${recipientEmail}`;
  // };
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        position: "absolute",
        height: "100vh",
      }}
    >
      <h1 style={{ fontWeight: "900", color: "#6E07F3" }}>
        Welcome to My Portfolio
      </h1>
      <h1 className="p-sm-5 mx-3 mt-3">
        <b>
          I am a skilled Frontend Developer with a talent for creating
          beautiful, intuitive user interfaces using React Js.
        </b>
      </h1>
      {/* <img
        src={ProfileImg}
        alt="profile"
        width="150px"
        style={{ borderRadius: "10%" }}
      /> */}
      <ul className="social_icons">
        <li>
          <a
            href="https://instagram.com/karthik_sk.14?igshid=ZGUzMzM3NWJiOQ=="
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/karthik.akv.94?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
        </li>
        <li>
          <a
            href=" https://twitter.com/Karthik11140?t=wCbzWL087MUDURF0nydeAQ&s=08"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/karthik-shanigaram-259064203/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/karthik-140"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </li>
        <li >
        <a
            href= "mailto:shanigaramkarthik@gmail.com"
            // target="_blank"
            // rel="noreferrer"
            // onClick={mailHandler}
          >
            <MdEmail />
          </a>
        </li>
        <li>
          <a href= "https://wa.me/9700043841" >
            <AiOutlineWhatsApp />
          </a>
        </li>
      </ul>
      <Button
        variant="secondary"
        onClick={() => history.push("/projects")}
        className="p-2 px-4 projects_btn"
      >
        <b>Projects</b>
      </Button>
    </section>
  );
};

export default Home;
