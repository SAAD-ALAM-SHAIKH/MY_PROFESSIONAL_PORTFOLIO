import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/saad.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { ImNewspaper } from "react-icons/im";

import { ImEnvelop } from "react-icons/im";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { CgGitHub, CgInstagram, CgLinear, CgLinkedIn } from "react-icons/cg";
import { CgGift } from "react-icons/cg";
import { CgGitBranch } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ margin_Bottom: "me-1" }} /> HOME
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                rel="noreferrer"
                target="_blank"
                to="/About_My_Self"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ margin_Bottom: "me-1" }} /> MY SELF
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Degree_And_Transcript"
                onClick={() => updateExpanded(false)}
                rel="noreferrer"
                target="_blank"
              >
                <CgFileDocument style={{ margin_Bottom: "me-1" }} /> DEGREE-AND-TRANSCRIPT 
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/My_Projects"
                rel="noreferrer"
                target="_blank"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ margin_Bottom: "me-1" }}
                />{" "}
                PROJECTS
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                rel="noreferrer"
                target="_blank"
                to="/My_Resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ margin_Bottom: "me-1" }} /> RESUME
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/My_Certificates"
                onClick={() => updateExpanded(false)}
                rel="noreferrer"
                target="_blank"
              >
                <CgFileDocument style={{ margin_Bottom: "me-1" }} /> CERTIFICATES
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/My_Experiences"
                onClick={() => updateExpanded(false)}
                rel="noreferrer"
                target="_blank"
              >
                <CgFileDocument style={{ margin_Bottom: "100px" }} /> EXPERIENCES
              </Nav.Link>
            </Nav.Item>
 
            <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/saad-alam-shaikh"
                target="_blank"
                className="fork-btn-inner"
              >
                
                <FaLinkedin style={{ fontSize: "2rem" , marginBottom: "10px" }} />
                <AiFillStar style={{ fontSize: "2rem" }} /> 
             </Button>
            </Nav.Item>

          <AiOutlineHome style={{ margin_Bottom: "me-4" }} />

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/SAAD-ALAM-SHAIKH"
                target="_blank"
                className="fork-btn-inner"
              >
                <FaGithub style={{ fontSize: "2rem" , marginBottom: "10px" }} />
                <AiFillStar style={{ fontSize: "2rem" }} />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
