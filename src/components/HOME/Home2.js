import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              IT professional with over three years of experience in web development, mobile application development, data visualization, and IT management. 
              <br/><br/>Holds a Bachelor’s degree in Computer Science and a Master’s degree in IT Management, combining solid technical expertise with analytical and managerial capabilities.
              <br/><br/>Experienced in developing scalable web and mobile solutions, visualizing complex datasets to support decision-making, and contributing to IT project planning, coordination, and operational optimization.
              <br/><br/>Originally from Karachi, Pakistan, currently based in Banderburg, Germany, and seeking opportunities within Germany or the EU to contribute to digital transformation initiatives, enhance IT efficiency,
              and support data-driven business strategies in a professional, multicultural environment. 
                        
              <br/><br/> I AM FLUENT IN PROGRAMMING LIKE
              <i>
                <b className="purple"> WEB DEVELOPMENT, MOBILE APPLICATION, PYTHON, and MUCH MORE </b>
              </i>
              <br />
              <br /> MY FIELD OF INTEREST'S ARE BULID NEW SOFTWARES AND TESTING SOFTWARES &nbsp;
              <i>
                <b className="purple">WEB TECHNOLOGIES, IT MANAGEMENT SUPPOT, AND DATA VISULIZATION </b> AND
                ALSO IN AREAS RELATED TO{" "}
                <b className="purple">
                  DEEP LEARNING AND NATURAL LANGUAGE PROCESSING.
                </b>
              </i>
              <br />
              <br />
              WHENEVER POSSIBLE, I ALSO APPLY MY PASSION FOR DEVELOPING SOFTWARES AND APPLICATIONS
              WITH <b className="purple">HTML, CSS, JAVASCRIPT, PHP, ANDROID STUDIO, PYTHON, REACT JS, AND OTHER PLATFORMS</b> AND
              <i>
                <b className="purple">
                  {" "}
                  MODERN JAVASCRIPT LIBRARIES, AND FRAMEWORKS
                </b>
              </i>
              &nbsp; LIKE
              <i>
                <b className="purple"> REACT.JS, AND NEXT.JS</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              FEEL FREE TO <span className="purple"> CONNECT </span>WITH ME
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SAAD-ALAM-SHAIKH"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SAADALAM95"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saad-alam-shaikh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/alamsaadalam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/saadalam.alam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
