import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import img1 from "../../Assets/MY_MASTER_TRANSCRIPT.jpg";
/*import img2 from "../../Assets/DEGREE.jpg"; */
import img3 from "../../Assets/DEGREE.jpg";
import img4 from "../../Assets/TRANSCRIPT_PAGE_1.jpg";
import img5 from "../../Assets/TRANSCRIPT_PAGE_2.jpg";


function Degree_And_Transcript() {
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
                src={img1}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "1500px", marginRight: "50px", maxWidth: "1000px" }}
          />
        </Row>

        {/* 
        <Row className="resume">
          <img
                src={img2}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "700px", marginRight: "50px", maxWidth: "1000px" }}
          />
        </Row>
        */}

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

export default Degree_And_Transcript;
