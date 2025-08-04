import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Full-Stack Developer{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🤖
                </span>
              </h1>

              <h1 className="heading-name">
                Specializing in
                <strong className="main-name"> AI Integration</strong>
              </h1>

              <h2 className="heading-subtitle" style={{ fontSize: "1.8em", color: "#c770f0", marginBottom: 30 }}>
                Building Intelligent Web Applications with Modern Technology
              </h2>

              <p className="home-description" style={{ 
                fontSize: "1.2em", 
                lineHeight: "1.6", 
                marginBottom: 40,
                textAlign: "left"
              }}>
                I create web applications that leverage AI capabilities to solve real business problems. 
                Combining 5+ years of development experience with cutting-edge AI integration.
              </p>

              <div className="skills-grid" style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr", 
                gap: "20px",
                marginBottom: 40 
              }}>
                <div className="skill" style={{ 
                  padding: "15px", 
                  border: "1px solid #c770f0", 
                  borderRadius: "10px",
                  textAlign: "center"
                }}>
                  <span className="icon" style={{ fontSize: "2em" }}>🤖</span>
                  <h3 style={{ color: "#c770f0", marginBottom: 10 }}>AI Integration</h3>
                  <p>OpenAI API, ChatGPT, Claude, Custom AI Solutions</p>
                </div>
                
                <div className="skill" style={{ 
                  padding: "15px", 
                  border: "1px solid #c770f0", 
                  borderRadius: "10px",
                  textAlign: "center"
                }}>
                  <span className="icon" style={{ fontSize: "2em" }}>💻</span>
                  <h3 style={{ color: "#c770f0", marginBottom: 10 }}>Full-Stack Development</h3>
                  <p>React, Node.js, Python, MongoDB, PostgreSQL</p>
                </div>
                
                <div className="skill" style={{ 
                  padding: "15px", 
                  border: "1px solid #c770f0", 
                  borderRadius: "10px",
                  textAlign: "center"
                }}>
                  <span className="icon" style={{ fontSize: "2em" }}>🚀</span>
                  <h3 style={{ color: "#c770f0", marginBottom: 10 }}>Business Automation</h3>
                  <p>Workflow optimization, API integrations, Process automation</p>
                </div>
              </div>

              <div className="cta" style={{ 
                textAlign: "center", 
                padding: "20px", 
                backgroundColor: "rgba(199, 112, 240, 0.1)", 
                borderRadius: "10px" 
              }}>
                <h3 style={{ color: "#c770f0", marginBottom: 15 }}>Ready to build intelligent web applications?</h3>
                <p style={{ marginBottom: 20 }}>📧 dakir.zaid@example.com | 🌍 Based in Morocco, serving global clients</p>
                <button 
                  className="btn btn-primary"
                  style={{ 
                    backgroundColor: "#c770f0", 
                    border: "none", 
                    padding: "12px 30px",
                    fontSize: "1.1em",
                    borderRadius: "25px"
                  }}
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </button>
              </div>

              <div style={{ padding: 30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="AI Developer"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
