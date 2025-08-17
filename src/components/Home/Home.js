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
                "Boostez votre business avec 
                <strong className="main-name"> des solutions web & IA sur-mesure"</strong>
              </h1>

              <h2 className="heading-subtitle" style={{ fontSize: "1.8em", color: "#c770f0", marginBottom: 30 }}>
Création d’applications intelligentes qui automatisent, prédisent et font gagner du temps.              </h2>

              <p className="home-description" style={{ 
                fontSize: "1.2em", 
                lineHeight: "1.6", 
                marginBottom: 40,
                textAlign: "left"
              }}>
                +5 ans d’expertise en développement full-stack & intégration IA de pointe.
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
                  <h3 style={{ color: "#c770f0", marginBottom: 10 }}>IA sur mesure</h3>
                  <p>Chatbots intelligents, analyse prédictive, assistants automatisés.</p>
                </div>
                
                <div className="skill" style={{ 
                  padding: "15px", 
                  border: "1px solid #c770f0", 
                  borderRadius: "10px",
                  textAlign: "center"
                }}>
                  <span className="icon" style={{ fontSize: "2em" }}>💻</span>
                  <h3 style={{ color: "#c770f0", marginBottom: 10 }}>Développement Web Premium</h3>
                  <p>Sites ultra-rapides et personnalisés pour vos objectifs.</p>
                </div>
                
                <div className="skill" style={{ 
                  padding: "15px", 
                  border: "1px solid #c770f0", 
                  borderRadius: "10px",
                  textAlign: "center"
                }}>
                  <span className="icon" style={{ fontSize: "2em" }}>🚀</span>
                  <h3 style={{ color: "#c770f0", marginBottom: 10 }}>Automatisation Business</h3>
                  <p>Gagnez du temps avec des workflows intelligents et API connectées.</p>
                </div>
              </div>
<div
  style={{
    textAlign: "center",
    padding: "24px",
    backgroundColor: "rgba(199, 112, 240, 0.08)",
    borderRadius: "12px",
    marginBottom: "32px",
    boxShadow: "0 2px 8px rgba(199,112,240,0.07)"
  }}
>
  <h2 style={{ color: "#c770f0", marginBottom: 10 }}>
    🎯 AI Automation & Web Development Specialist
  </h2>
  <h4 style={{ marginBottom: 22 }}>
    Helping businesses save <span style={{ color: "#c770f0" }}>$10K+</span> annually through custom automation
  </h4>
  <div
    style={{
      background: "#fff",
      border: "1px solid #c770f0",
      borderRadius: "10px",
      display: "inline-block",
      textAlign: "left",
      padding: "20px 30px",
      marginBottom: "15px",
      boxShadow: "0 2px 8px rgba(199,112,240,0.07)"
    }}
  >
    <h5 style={{ color: "#c770f0", marginBottom: 12 }}>💼 Service Packages</h5>
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      <li style={{ marginBottom: 8 }}>
        <strong>IA sur mesure</strong> <span style={{ color: "#888" }}>($2,000–$5,000)</span>
      </li>
      <li style={{ marginBottom: 8 }}>
        <strong>Business Process Automation</strong> <span style={{ color: "#888" }}>($3,000–$8,000)</span>
      </li>
      <li style={{ marginBottom: 8 }}>
        <strong>Développement Web Premium</strong> <span style={{ color: "#888" }}>($5,000–$15,000)</span>
      </li>
      <li>
        <strong>E-commerce Solutions</strong> <span style={{ color: "#888" }}>($4,000–$12,000)</span>
      </li>
    </ul>
  </div>
</div>
              <div className="cta" style={{ 
                textAlign: "center", 
                padding: "20px", 
                backgroundColor: "rgba(199, 112, 240, 0.1)", 
                borderRadius: "10px" 
              }}>
                <h3 style={{ color: "#c770f0", marginBottom: 15 }}>Ready to build intelligent web applications?</h3>
                <p style={{ marginBottom: 20 }}>📧zaid.dakengineer@gmail.com | 🌍 Based in Morocco, serving global clients</p>
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
