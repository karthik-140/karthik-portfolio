import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ProfileImg from "../assets/ProfileImg.jpg";

import "./Navbar.css";

const HeaderNavbar = () => {
  const [showToggleLinks, setShowToggleLinks] = useState(false);
  const [showProfileImg, setShowProfileImg] = useState(false);

  const NavToggleHandler = () => {
    setShowToggleLinks(!showToggleLinks);
  };
  return (
    <Navbar bg="dark" variant="dark" className="p-3 mb-5" fixed="top">
      <Container>
        <div className="nav_profile">
          <img
            className="me-3 nav_profile_img"
            src={ProfileImg}
            alt="Profile"
            width="40px"
            style={{ borderRadius: "50%" }}
            onClick={() => setShowProfileImg(!showProfileImg)}
          />
          {showProfileImg && (
            <img
              className="profile_img_display"
              src={ProfileImg}
              alt="Profile"
              width="150px"
              style={{
                borderRadius: "1rem",
                position: "absolute",
                top: "5rem",
                left: "5rem",
              }}
            />
          )}
          <Navbar.Brand className="me-auto">SHANIGARAM KARTHIK</Navbar.Brand>
        </div>
        <button className="nav_toggle_btn" onClick={NavToggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {showToggleLinks && (
          <ul className="nav_toggle_links">
            <li onClick={() => setShowToggleLinks(false)}>
              <NavLink to="/home" activeclassName="navlink">
                Home
              </NavLink>
            </li>
            <li onClick={() => setShowToggleLinks(false)}>
              <NavLink to="/projects" activeclassName="navlink">
                Projects
              </NavLink>
            </li>
            <li onClick={() => setShowToggleLinks(false)}>
              <NavLink to="/resume" activeclassName="navlink">
                Resume
              </NavLink>
            </li>
            <li onClick={() => setShowToggleLinks(false)}>
              <a
                href="https://www.linkedin.com/in/karthik-shanigaram-259064203/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BUI7bS%2BlvRiuNB2eOjcaeew%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        )}
        <Nav className="nav_links">
          <NavLink to="/home" activeclassName="navlink">
            Home
          </NavLink>
          <NavLink to="/projects" activeclassName="navlink">
            Projects
          </NavLink>
          {/* <NavLink to="/contact" activeclassName="navlink">
            Contact
          </NavLink> */}
          <NavLink to="/resume" activeclassName="navlink">
            {/* <a
            href="https://drive.google.com/drive/folders/1a87h5_llXxCuOXl3IqXTTm0ktTwX4EcP"
            target="_blank"
            rel="noreferrer"
          > */}
            Resume
            {/* </a> */}
          </NavLink>
          <a
            href="https://www.linkedin.com/in/karthik-shanigaram-259064203/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BUI7bS%2BlvRiuNB2eOjcaeew%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
