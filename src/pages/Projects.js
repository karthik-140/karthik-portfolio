import { Card } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import "./Projects.css";

import EcommerceImg from "../assets/e-commerce.png";
import ExpenseTrackerImg from "../assets/expense-tracker.png";
import MailBoxClientImg from "../assets/mail-box-client.png";
import ExpenseTrackerImg2 from "../assets/expense-tracker-2.png";
import ChatApplicationImg from "../assets/chat-app.png";

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
    {
      id: "4",
      title: "Expense Tracker",
      img: `${ExpenseTrackerImg2}`,
      url: "https://expensetracker140.netlify.app/",
      git: "https://github.com/karthik-140/Expense_Tracker_Frontend",
    },
    {
      id: "5",
      title: "Chat Application",
      img: `${ChatApplicationImg}`,
      url: "https://chat-app140.netlify.app/",
      git: "https://github.com/karthik-140/Chat_App_Frontend",
    },
  ];

  const sortedProjects = arrImg.sort((a, b) => b.id - a.id);

  const DisplayProjects = sortedProjects.map((project) => (
    <li key={project.id} className="">
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
        <Card.Body className="text-center mt-4 pb-0 bg-light rounded shadow-md">
          <h5 className="text-sm">{project.title}</h5>
        </Card.Body>
      </Card>
    </li>
  ));

  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <div className="project_description">
        <p>
          These are the projects which i have built using React Js, Node Js and other libraries.
        </p>
        <p>
          Visit the Website and Github repository of the project using the link
          displayed on the project.
        </p>
      </div>
      <ul
        className="card_section"
        style={{ listStyleType: "none", padding: 0, margin: 0 }}
      >
        {DisplayProjects}
      </ul>
    </section>
  );
};

export default Projects;
