import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import birthdayApp from "../../Assets/Projects/BirthdayApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          I have worked on projects mostly in the industry but here are some of my recent personal projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birthdayApp}
              isBlog={false}
              title="Remind Me!"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/deep-son/BirthdayApp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birthdayApp}
              isBlog={false}
              title="ChatGPT personal AI"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/deep-son/BirthdayApp/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
