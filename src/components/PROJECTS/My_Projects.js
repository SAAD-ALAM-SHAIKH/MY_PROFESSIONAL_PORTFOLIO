import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="purple" style={{ fontStyle: "italic" }}> MY RECENT WORKS </strong>
        </h1>
        <h2 style={{ color: "white", fontSize: "bold" }}>
          HERE A FEW PROJECTS I HAVE WORKED ON RECENTLY.
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Basic Game which I made in class assiment."
              ghLink="https://github.com/SAAD-ALAM-SHAIKH/GamePlay"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My Final Year Project with HTML, PHP, CSS, MYSQL."
              ghLink="https://github.com/SAAD-ALAM-SHAIKH/FINAL_YEAR_PROJECT"
              demoLink="https://github.com/SAAD-ALAM-SHAIKH/FINAL_YEAR_PROJECT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
            
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
