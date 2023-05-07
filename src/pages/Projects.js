import { Card } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import "./Projects.css";

import EcommerceImg from "../assets/e-commerce.png";
import ExpenseTrackerImg from "../assets/expense-tracker.png";
import MailBoxClientImg from "../assets/mail-box-client.png";

const Projects = () => {
  const arrImg = [
    {
      id: "1",
      title: "E - Commerce Website",
      img: `${EcommerceImg}`,
      url: "https://e-commerce-site-2c82f.web.app",
      git: "https://github.com/karthik-140/e-commerce-website",
    },
    {
      id: "2",
      title: "Expense Tracker",
      img: `${ExpenseTrackerImg}`,
      url: "https://expense-tracker-aa33e.web.app",
      git: "https://github.com/karthik-140/Expense-Tracker",
    },
    {
      id: "3",
      title: "Mail Box Client",
      img: `${MailBoxClientImg}`,
      url: "https://mail-box-client-8f262.web.app",
      git: "https://github.com/karthik-140/mail-box-client",
    },
  ];

  const DisplayProjects = arrImg.map((project) => (
    <li key={project.id} className="m-2">
      <Card className="ms-5 p-3 card">
        <Card.Img src={project.img} variant="top" className="card_img" />
        <div className="external_links">
          <div className="external_link_git">
            <AiFillGithub />{" "}
            <a href={`${project.git}`} target="_blank" rel="noreferrer">
              {project.git}
            </a>
          </div>
          <div className="external_link_site">
            <FiExternalLink />{" "}
            <a href={`${project.url}`} target="_blank" rel="noreferrer">
              {project.url}
            </a>
          </div>
        </div>
        <Card.Body className="mx-auto mt-4 pb-0">
          <h5>{project.title}</h5>
        </Card.Body>
      </Card>
    </li>
  ));

  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <div className="project_description">
        <p>
          These are the projects which i have build using React Js, HTML, CSS3
          and other librabries like Redux, React Router, Bootstrap5.
        </p>
        <p>
          Visit the Website and Github repository of the project using
          the link displayed on the project.
        </p>
      </div>
      <ul
        className="d-flex flex-wrap g-5 mt-5 card_section"
        style={{ listStyleType: "none" }}
      >
        {DisplayProjects}
      </ul>
    </section>
  );
};

export default Projects;
