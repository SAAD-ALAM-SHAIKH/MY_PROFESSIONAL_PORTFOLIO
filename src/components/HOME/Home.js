import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import img from "../../Assets/SAAD_ALAM.jpg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                HI HERE {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I AM
                <strong className="main-name"> SAAD ALAM SHAIKH </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            
            <img
                src={img}
                alt="home pic"
                className="img-fluid"
                //style={{ maxHeight: '1px' }}
                style={{ border: '15px solid purple' }}
            />
            
            </Col>
          
         </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
