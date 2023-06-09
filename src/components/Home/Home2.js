import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Me </span> 
            </h1>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Ahoy :)
              <br />
              <br />Hey fellow knowledge seeker!
              <br/>
              <br />
              I'm a 🖥️ computer science master's student at the University of Stuttgart, trying to bridge the gap between academia and industry. It's like herding caffeinated kittens🐱 on a unicycle!
              <br /><br />
              Initially, I fancied myself a machine learning and deep learning wizard 🧙, ready to conquer the world. But, lo and behold, the real villain was lurking in the shadows—the data itself!
              <br />
              <br />
              Cue dramatic music🎶
              <br />
              <br />
              Now, I've become a fearless ⚔️ data warrior, 🛡️ armed with humor and a thirst for knowledge. Join me on this journey as we tame wild datasets and unleash their hidden potential! Just remember, laughter is the secret sauce to debugging the quirks of coding. Let's embark on this hilarious adventure together!
              <br />
              <br />
              <b>Note: No language model was harmed while generating this prompt: Chat-GPT maybe 🙃</b>
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
