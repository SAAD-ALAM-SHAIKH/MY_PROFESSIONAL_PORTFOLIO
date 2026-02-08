import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import img from "../../Assets/EXPERIENCE CERTIFICATE.jpeg";
import pdf1 from "../../Assets/../Assets/Experience_Letter.pdf";
import pdf2 from "../../Assets/../Assets/FREELANCE_EXPERIENCE_LETTER.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const resumeLink =
    
  "http://localhost:3000/PROFESSIONAL_DETAILS/static/media/Experience_Letter.87c4c6433fcf988e2ad9.pdf";


function My_Experiences() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "50px" }}>
          <Button
            variant="primary"
            href={pdf1}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; DOWNLOAD MY EXPERIENCE LETTER
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

      </Container>
    </div>
  );
}

export default My_Experiences;
