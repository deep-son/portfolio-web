import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import remind_me from "../../Assets/Projects/remind_me.png";
import cdd from "../../Assets/Projects/cdd.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import hey_gpt from "../../Assets/Projects/hey_gpt.png";
import voice_cloner from "../../Assets/Projects/voice_cloner.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few <strong className="purple">personal projects </strong> I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remind_me}
              isBlog={false}
              title="Remind Me"
              description="The Data Collection and Reminder System is a project that collects data from users through a Google Form, processes it using AWS Lambda, and securely stores it in AWS databases. It also includes a reminder service for upcoming events. Leveraging AWS infrastructure for efficiency."
              ghLink="https://github.com/deep-son/RemindMe"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hey_gpt}
              isBlog={false}
              title="Hey GPT!"
              description="Your Intelligent Conversational AI:
              The Chatbot Lambda Function is an AWS-powered serverless app that interacts with users via Telegram. Utilizing GPT-3.5-turbo from OpenAI, it generates contextually relevant responses, ensuring seamless conversations. Stored in an S3 bucket for continuity, this AI-driven chatbot offers user-friendly interactions and easy deployment."
              ghLink="https://github.com/deep-son/gpt_bot"
              demoLink="https://t.me/DragonEliBot" 
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice_cloner}
              isBlog={false}
              title="Voice Cloner"
              description="
              The voice cloner uses Tensorflow's TTS model with short voice clips (<20s) and transcripts. A mapper file associates parts of speech with the transcripts for generating mel-spectrograms, converted to audible waveforms using a vocoder. This recreates realistic and natural-sounding voices from the input data"
              ghLink="https://github.com/deep-son/Voice_Cloner"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cdd}
              isBlog={true}
              title="Crop Disease Detection AI"
              description="Our project enhances crop health monitoring by identifying diseases through image classification models. Farmers can easily upload images via a user-friendly web interface and receive tailored remedies for effective disease management, resulting in healthier and more productive crops."
              ghLink="https://www.irjet.net/archives/V7/i5/IRJET-V7I5621.pdf"
              // demoLink="https://www.irjet.net/archives/V7/i5/IRJET-V7I5621.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Amazon.de Customer Sentiment Analysis"
              description="Our project involved analyzing Amazon.de product reviews for the top-selling mobile phones. We summarized sentiments and ratings to uncover valuable insights into customers' opinions and satisfaction levels. This analysis assisted potential buyers in making informed decisions about the best mobile phones that met their needs and preferences."
              ghLink="https://github.com/deep-son/Sentiment-German"
              // demoLink="https://www.irjet.net/archives/V7/i5/IRJET-V7I5621.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
