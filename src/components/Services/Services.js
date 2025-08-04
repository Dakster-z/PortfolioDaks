import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { servicePackages } from '../../data/services.js';
import Particle from "../Particle";
import './Services.css';

function Services() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Services </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the service packages I offer to help businesses grow with AI and web development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {servicePackages.map((service) => (
            <Col md={4} className="project-card" key={service.id}>
              <Card className="project-card-view">
                <Card.Body>
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "flex-start", 
                    marginBottom: "15px" 
                  }}>
                    <Card.Title style={{ color: "#c770f0", fontSize: "1.4em" }}>
                      {service.title}
                    </Card.Title>
                    {service.popular && (
                      <Badge bg="warning" text="dark">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  
                  <div style={{ marginBottom: "15px" }}>
                    <span style={{ 
                      fontSize: "2em", 
                      color: "#c770f0", 
                      fontWeight: "bold" 
                    }}>
                      ${service.price}
                    </span>
                    {service.originalPrice && (
                      <span style={{ 
                        textDecoration: "line-through", 
                        color: "#888", 
                        marginLeft: "10px",
                        fontSize: "1.2em"
                      }}>
                        ${service.originalPrice}
                      </span>
                    )}
                  </div>

                  <p style={{ 
                    color: "#c770f0", 
                    fontWeight: "500",
                    marginBottom: "10px" 
                  }}>
                    ⏱️ Timeline: {service.timeline}
                  </p>

                  <Card.Text style={{ textAlign: "justify", marginBottom: "15px" }}>
                    {service.description}
                  </Card.Text>

                  <div style={{ marginBottom: "15px" }}>
                    <h6 style={{ color: "#c770f0", marginBottom: "8px" }}>
                      ✨ What's Included:
                    </h6>
                    <ul style={{ paddingLeft: "20px", fontSize: "0.9em" }}>
                      {service.features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: "4px" }}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    <h6 style={{ color: "#c770f0", marginBottom: "8px" }}>
                      🛠️ Tech Stack:
                    </h6>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {service.techStack.map((tech, index) => (
                        <Badge 
                          key={index}
                          style={{ 
                            backgroundColor: "rgba(199, 112, 240, 0.2)",
                            color: "#c770f0",
                            border: "1px solid #c770f0"
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <a
  href={`mailto:zaid.dakengineer@gmail.com?subject=Interested in ${service.title}`}
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#c770f0",
                        border: "none",
                        padding: "10px 25px",
                        fontSize: "1em",
                        borderRadius: "25px",
                        textDecoration: "none"
                      }}
                    >
                      Get Started
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <h3 style={{ color: "#c770f0", marginBottom: "15px" }}>
              Need Something Custom?
            </h3>
            <p style={{ color: "white", marginBottom: "20px" }}>
              Every business is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <a
              href="mailto:zaid.dakengineer@gmail.com?subject=Custom Project Inquiry"
              className="btn btn-outline-primary"
              style={{
                borderColor: "#c770f0",
                color: "#c770f0",
                padding: "12px 30px",
                fontSize: "1.1em",
                borderRadius: "25px",
                textDecoration: "none"
              }}
            >
              Discuss Your Project
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;