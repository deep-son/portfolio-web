import React from "react";
import Card from "react-bootstrap/Card";
import { ImPlay3 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Deepanshu Sonparote </span>
            originally from <span className="purple"> Mumbai, India </span>, but currently in Stuttgart
            Germany from past 2.5 years
            <br />I am a Computer Science Master's student at University of Stuttgart with a major in Autonomous Systems, also did my bachelors in Computer Science from University of Mumbai.
            <br />
            <br />
            Apart from technical stuff, I also do
          </p>
          <ul>
            <li className="about-activity">
              <ImPlay3 /> Freelance Graphic Designer
            </li>
            <li className="about-activity">
              <ImPlay3 /> I play chess - pretty novice
            </li>
            <li className="about-activity">
              <ImPlay3 /> Muai Thai Boxing
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
