import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

          Hi everyone, my name is <span className="purple"> SAAD ALAM SHAIKH. </span> 
          I am 29 years old. Originally from <span className="purple"> KARACHI, PAKISTAN </span> 
          , and currently residing in <span className="purple"> FÜRSTENWALDE/SPREE, BRANDENBURG, GERMANY. </span> 
          I am a results-driven IT professional with over 3 years of hands-on experience in <span className="purple"> WEB DEVELOPER, </span>
          <span className="purple"> MOBILE APPLICATION DELEVOPMENT, </span> <span className="purple"> DATA VISULIZATION, </span> and 
          <span className="purple"> IT MANAGEMENT </span> 
          I hold a <span className="purple"> BACHELOR OF SCIENCE IN COMPUTER SCIENCE </span> degree and a 
          <span className="purple"> MASTER OF SCIENCE IN INFORMATION TECHNOLOGY MANAGEMENT </span> degree,
          enabling me to combine strong technical expertise with strategic and managerial insight.
          I have proven ability to design and develop scalable web and mobile solutions, transform complex data into actionable visual insights, and contribute effectively to IT projects through structured planning, coordination, and risk-aware decision-making. 
          My career goal is to advance within a dynamic organization where I can leverage my technical skills, data-driven mindset, and leadership capabilities to drive digital innovation, optimize IT operations, and support sustainable organizational growth.

            <br/>
            <br/>
            APART FROM CODING, SOME OTHER ACTIVITIES THAT I LOVE TO DO!
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> PLAYING GAMES.
            </li>
            <li className="about-activity">
              <ImPointRight /> WATCHING MOVIES OR COMEDY SHOWS FOR RELAXATION. 
            </li>
            <li className="about-activity">
              <ImPointRight /> TRAVELLING AND DRIVE A ON LONG ROUTE. 
            </li>
          </ul>

          <p> <span className="purple">
            "I STRIVE TO BUILD THINGS THAT MAKE A DIFFERENCE!"{" "} </span>
          </p>
          <h1>
          <footer className="blockquote-footer"> <span className="purple"> SAAD ALAM SHAIKH </span> </footer>
          </h1>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
