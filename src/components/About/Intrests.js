import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import mlImg from "../../Assets/ml.jpg";
import data_analysis from "../../Assets/data_analysis.jpeg";
import data_gov from "../../Assets/data_gov.jpg";


function Intrests() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <h3><span className="purple">Data Engineering </span></h3><br/>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Col
              md={12}
              style={{
                justifyContent: "center",
              }}
            >  
            
            I like data engineering because it's such a fascinating and huge field to work in. You get to construct and design data pipelines, develop efficient data models, and facilitate data-informed decisions. It's challenging, but in a good way - you get to cope with large data sets and explore innovative technologies, which keeps things interesting, rewarding and satisfying.
            </Col>
          </Row>
          <h3><span className="purple">Deep Learning and Machine Learning </span></h3><br/>
          <Row style={{ justifyContent: "center", paddingBottom: "30px"  }}>
            <Col
              md={8}
              style={{
                justifyContent: "center",
              }}
            >  
            
            I find Machine Learning and Deep Learning to be fascinating topics. It's almost like magic when a model produces an inference, regardless of whether it's overfitted or perfect. The mathematics behind the algorithms is intriguing and captivating, particularly the optimization techniques.            
            </Col>
            <Col
              md={4}
              className="about-img"
            >
              <img src={mlImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h3><span className="purple">Data Analytics </span></h3><br/>
          <Row style={{ justifyContent: "center", paddingBottom: "30px"  }}>
            <Col
              md={8}
              style={{
                justifyContent: "center",
              }}
            > 
            
            I absolutely love data analysis! It's amazing how it can reveal hidden patterns and insights within massive amounts of data. It's like discovering fascinating stories that help me make better decisions and achieve positive outcomes. The possibilities are endless...
            </Col>
            <Col
              md={4}
              className="about-img"
            >
              <img src={data_analysis} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h3><span className="purple">Data Quality and Governance </span></h3><br/>
            <Row style={{ justifyContent: "center", paddingBottom: "30px"  }}>
            <Col
              md={8}
              style={{
                justifyContent: "center",
              }}
            > 
             
             I really enjoy making sure that data is accurate, consistent, and reliable. That's why I'm so passionate about data quality and governance. It feels great to create procedures that keep data in top shape. Data governance involves organizing and securing data, making sure it meets all the rules, and making sure it's trustworthy for decision-making.
            </Col>
            <Col
              md={4}
              className="about-img"
            >
              <img src={data_gov} alt="about" className="img-fluid" />
            </Col>
            </Row>
            
           
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Intrests;
