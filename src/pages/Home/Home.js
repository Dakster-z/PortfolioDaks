import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../../shared/effects/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import styles from "./Home.module.css";

function Home() {

  return (
    <section>
      <Container fluid className={styles.homeSection} id="home">
        <Particle />
        <Container className={`home-content ${styles.homeContent}`}>
          <Row className="align-items-center" style={{ minHeight: "80vh" }}>
            <Col md={7} className={styles.homeHeader} style={{ 
              paddingRight: "30px",
              paddingLeft: "20px"
            }}>
              <div style={{ maxWidth: "100%", margin: "0 auto" }}>
                <h1 style={{ paddingBottom: 15 }} className={styles.heading}>
                  Full-Stack Developer{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    🤖
                  </span>
                </h1>

                <h1 className={styles.headingName}>
                  "Boostez votre business avec 
                  <strong className={styles.mainName}> des solutions web & IA sur-mesure"</strong>
                </h1>

                <h2 className="heading-subtitle" style={{ 
                  fontSize: "1.8em", 
                  color: "var(--accent)", 
                  marginBottom: "30px",
                  marginTop: "20px"
                }}>
                  Création d'applications intelligentes qui automatisent, prédisent et font gagner du temps.
                </h2>

                <p className={styles.homeDescription} style={{ 
                  fontSize: "1.2em", 
                  lineHeight: "1.6", 
                  marginBottom: "40px",
                  textAlign: "left"
                }}>
                  +5 ans d'expertise en développement full-stack & intégration IA de pointe.
                </p>

                <div className="skills-grid" style={{ 
                  display: "grid", 
                  gridTemplateColumns: "2fr", 
                  gap: "50px",
                  marginBottom: "50px",
                  width: "100%"
                }}>
                  <div className="skill" style={{ 
                    padding: "15px", 
                    border: "1px solid var(--accent)", 
                    borderRadius: "10px",
                    textAlign: "center",
                    backgroundColor: "rgba(199, 112, 240, 0.05)"
                  }}>
                    <span className="icon" style={{ fontSize: "2em" }}>🤖</span>
                    <h3 style={{ color: "var(--accent)", marginBottom: 10, fontSize: "1.2em" }}>IA sur mesure</h3>
                    <p style={{ margin: 0, fontSize: "0.95em" }}>Chatbots intelligents, analyse prédictive, assistants automatisés.</p>
                  </div>
                  
                  <div className="skill" style={{ 
                    padding: "15px", 
                    border: "1px solid var(--accent)", 
                    borderRadius: "10px",
                    textAlign: "center",
                    backgroundColor: "rgba(199, 112, 240, 0.05)"
                  }}>
                    <span className="icon" style={{ fontSize: "2em" }}>💻</span>
                    <h3 style={{ color: "var(--accent)", marginBottom: 10, fontSize: "1.2em" }}>Développement Web Premium</h3>
                    <p style={{ margin: 0, fontSize: "0.95em" }}>Sites ultra-rapides et personnalisés pour vos objectifs.</p>
                  </div>
                  
                  <div className="skill" style={{ 
                    padding: "50px", 
                    border: "1px solid var(--accent)", 
                    borderRadius: "10px",
                    textAlign: "center",
                    backgroundColor: "rgba(199, 112, 240, 0.05)"
                  }}>
                    <span className="icon" style={{ fontSize: "2em" }}>🚀</span>
                    <h3 style={{ color: "var(--accent)", marginBottom: 10, fontSize: "1.2em" }}>Automatisation Business</h3>
                    <p style={{ margin: 0, fontSize: "0.95em" }}>Gagnez du temps avec des workflows intelligents et API connectées.</p>
                  </div>
                </div>


                <div style={{ paddingTop: "20px", textAlign: "left" }}>
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} className="text-center" style={{ 
              paddingLeft: "30px",
              paddingRight: "20px",
              textAlign: "center"
            }}>
              <img
                src={homeLogo}
                alt="AI Developer"
                className="img-fluid"
                style={{ 
                  maxHeight: "450px",
                  width: "100%",
                  height: "auto"
                }}
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
