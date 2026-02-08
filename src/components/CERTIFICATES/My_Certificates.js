import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import img from "../../Assets/Data analysis certificate.jpg";
import img2 from "../../Assets/React Native certificate.jpg";
import img3 from "../../Assets/WORDPRESS DEVELOPER CERTIFICATE.jpeg";
import img4 from "../../Assets/JAVA PROGRAMMING CERTIFICATE.jpg";
import img5 from "../../Assets/ANDROID APP DEVELOPER.jpeg";


function My_Certificates() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <img
                src={img}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "700px", marginRight: "50px", maxWidth: "1000px" }}
          />
        </Row>

        <Row className="resume">
          <img
                src={img2}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "700px", marginRight: "50px", maxWidth: "1000px" }}
          />
        </Row>

        <Row className="resume">
          <img
                src={img3}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "700px", marginRight: "50px", maxWidth: "1000px" }}
          />
        </Row>
        
         <Row className="resume">
          <img
                src={img4}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "700px", marginRight: "50px", maxWidth: "1000px" }}
          />
        </Row>

        <Row className="resume">
          <img
                src={img5}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "700px", marginRight: "50px", maxWidth: "1000px" }}
          />
        </Row> 
        
      </Container>
    </div>
  );
}

export default My_Certificates;
