import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaHackerrank } from "react-icons/fa";
function Experience(props) {
    if (props.data) {
        var work = props.data.experience.map(function (work, i) {
          const technologies = work.technologies;
          const responsibilities = work.responsibilities
          const icon = work.icon;
  
          var responsibile = responsibilities.map((technology, i) => {
            return (
              
                <ul class="list-disc list-inside">
                  <li key={i}>{technology}</li>
                </ul>
                
            );
          });
          var tech = technologies.map((technology, i) => {
            return (
              <Badge pill className="experience-badge mr-2 mb-2 " key={i}>
                {technology}
              </Badge>
            );
          });
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{
                background: "#C5C6C7",
                color: "#000",
                textAlign: "center",
              }}
              icon={<i className={icon}></i>}
              key={i}
            >
  
              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                {work.company}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                {work.title}
                
              </h4>
              <h6
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                {work.years}
                
              </h6>
              <div style={{ textAlign: "left", marginTop: "15px", marginBottom: "15px"}}>{tech}</div>
              <h6
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                {responsibile}
              </h6>
              
            </VerticalTimelineElement>
          );
        });
      }
  return (
    <Container fluid id="experience">
      <Container>
        <Row>
            <Col md={1}></Col>
          <Col md={10} >
            <h1 className="purple">Experience</h1>
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#C5C6C7",
                color: "black",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple">FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="mailto:deepanshusonparote@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/deep-son"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/deepanshusonparote/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/deepanshusonpar1?hr_r=1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaHackerrank />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/deep_son_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Experience;
