import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/SAAD-ALAM-NEW-RESUME-IT-2026.pdf";
import pdf1 from "../../Assets/../Assets/SAAD_ALAM_RESUME_IT_2025.pdf";
import pdf2 from "../../Assets/../Assets/SAAD-ALAM-NEW-LEBENSLAUF-IT-2026.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    
  "http://localhost:3000/PROFESSIONAL_DETAILS/static/media/SAAD-ALAM-NEW-RESUME-IT-2026.1154a38d968956b95548.pdf";

const resumeLink1 =

    "http://localhost:3000/PROFESSIONAL_DETAILS/static/media/SAAD_ALAM_RESUME_IT_2025.126eb668995c5650a546.pdf";

const resumeLink2 =

    "http://localhost:3000/PROFESSIONAL_DETAILS/static/media/SAAD-ALAM-NEW-LEBENSLAUF-IT-2026.7da84d21efd1430c2cee.pdf";


function My_Resume() {
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
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; DOWNLOAD MY IT RESUME 
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "50px" }}>
          <Button
            variant="primary"
            href={pdf1}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; DOWNLOAD MY ROUGHE CV 
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink1} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>


        <Row style={{ justifyContent: "center", position: "relative", marginTop: "50px" }}>
          <Button
            variant="primary"
            href={pdf2}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; DOWNLOAD MY IT LEBENSLAUF 
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink2} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

      </Container>
    </div>
  );
}
/*
function My_Resume1() {
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
            &nbsp; DOWNLOAD MY IT RESUME 
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink1} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

                <Row style={{ justifyContent: "center", position: "relative", marginTop: "50px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; DOWNLOAD MY IT RESUME 
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink1} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

      </Container>
    </div>
  );
}*/

export default My_Resume;