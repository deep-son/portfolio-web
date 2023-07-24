import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpeg";
import Tilt from "react-parallax-tilt";
// import Button from "react-bootstrap/Button";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Me </span> 
            </h1>
          <Col md={8} className="home-about-description">
            {/* <p className="home-about-body">
            <strong>Ahoy! 🌟</strong>
            <br /><br />
            Hey fellow knowledge seeker!
            <br /><br />
            I'm a <strong>🖥️ computer science master's student</strong> at the University of Stuttgart, trying to bridge the gap between academia and industry. It's like herding caffeinated kittens 🐱 on a unicycle!
            <br /><br />
            Initially, I fancied myself a <strong>machine learning and deep learning wizard 🧙</strong>, ready to conquer the world. But, lo and behold, the real villain was lurking in the shadows—the data itself!
            <br /><br />
            <em>Cue dramatic music 🎶</em>
            <br /><br />
            Now, I've become a <strong>fearless ⚔️ data warrior, 🛡️</strong> armed with humor and a thirst for knowledge. Join me on this journey as we tame wild datasets and unleash their hidden potential! Just remember, laughter is the secret sauce to debugging the quirks of coding. Let's embark on this hilarious adventure together!
            <br /><br />
            <strong>Note: No language model was harmed while generating this prompt: Chat-GPT maybe 🙃</strong>
          </p> */}
          {/* className="home-about-body" */}
          <p >
          
          <br></br>
          <p>
          Hello there! 🌟 I'm a Computer Science Masters student at <em>University of Stuttgart 📚</em><br></br>
          My passion lies in the world of data, where I love diving into its depths, uncovering valuable insights that can make a real impact on businesses and tasks at hand💡
          </p>
          <p>
            Initially, I was all about <em>Machine Learning</em> and <em>Deep Learning</em>, but as I ventured into the industry, I realized the real challenge lies in handling data. From data quality to governance and input sources, everyone's wrestling with it💻📊
          </p>
          <p>
            That's precisely where my interest lies - in working with the unhinged data. I'm fascinated by the art of refining and shaping it before it transforms into something meaningful and powerful.
            Optimizing data pipelines, enhancing data quality, and establishing robust governance strategies - that's where the magic happens🔍✨
          </p>
          <p>
            My journey in the realm of data is nothing short of thrilling, and I'm on a mission to unlock the full potential of data-driven solutions🚀
            I invite you to join me on this exciting adventure as we explore the boundless possibilities of data. 
          </p>
          <p>
            Here, I share my experiences, achievements, and passion for the world of data🌐💼
          </p>
            </p>
          </Col>
          <Col md={4} >
            <Tilt className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <div className="home-about-contact">
            {/* <Button
            variant="primary"
            href="tel:+49 1512 4865082"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >📱 Phone
          </Button>
          <Button
            variant="primary"
            href="mailto:deepanshusonparote@gmail.com"
            target="_blank"
            style={{ marginLeft: "10px" }}
          > 📧 Email
          </Button> */}
          <p>
            <a href="tel:+4915124865082" style={{ textDecoration: 'none', color: '#66FCF1' }}>Phone: +49 1512 4865082 | </a>
          <br></br>
          <a href="mailto:deepanshusonparote@gmail.com" style={{ textDecoration: 'none', color: '#66FCF1' }}>Mail: deepanshusonparote@gmail.com</a>
          </p>
          
          </div>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;



