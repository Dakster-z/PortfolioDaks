import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../../shared/effects/Particle";
import Home2 from "./Home2";
import styles from "./Home.module.css";
import Services from "../../components/Services/Services";
import SEO from '../../shared/seo/SEO';
import { whatsappLink } from '../../shared/config/env';

function Home() {
  const projectLink = whatsappLink("Bonjour Digitalwebcraft, je voudrais discuter de mon projet.");

  return (
    <section>
      <SEO title="Portfolio developpement web et IA" description="Portfolio de projets web et IA, services digitaux et prise de contact." />
      <Container fluid className={styles.homeSection} id="home">
        <Particle />
        <Container className={`home-content ${styles.homeContent}`}>
          <Row className="align-items-center" style={{ minHeight: "80vh" }}>
            <Col md={7} className={styles.homeHeader} style={{ paddingRight: "30px", paddingLeft: "20px" }}>
              <div style={{ maxWidth: "100%", margin: "0 auto" }}>
                <p className={styles.eyebrow} style={{ fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 600 }}>
                  DIGITALWEBCRAFT · WEB, IA & CONTENU DE CONVERSION
                </p>

                <h1 className={styles.heading} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.15", marginBottom: "24px", fontWeight: 700 }}>
                  Des sites web clairs, des automatisations utiles
                  <br />
                  et du contenu qui pousse vos prospects à agir.
                </h1>

                <p className={styles.homeIntro}>
                  J’aide les entreprises à mieux présenter leur offre, guider leurs demandes et gagner du temps grâce à des sites web sur mesure, des solutions IA ciblées et des Reels de conversion prêts à publier.
                </p>

                <div className={styles.ctaRow}>
                  <Button as="a" href="https://wa.me/212620001002?text=Bonjour%20Digitalwebcraft%2C%20je%20souhaite%20discuter%20de%20mon%20projet." target="_blank" rel="noreferrer" className={styles.primaryCta}>
                    DISCUTER DE MON PROJET
                  </Button>
                  <a href="/ugc#projets" className={styles.secondaryCta}>
                    VOIR LES ÉTUDES DE CAS
                  </a>
                </div>

                <div className={styles.servicePills}>
                  <span>Sites web sur mesure</span>
                  <span>Automatisation business</span>
                  <span>IA ciblée</span>
                  <span>Reels FR / Darija / EN</span>
                </div>

                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <span className="icon" style={{ fontSize: "2em" }}>💬</span>
                    <h3>Proposition claire</h3>
                    <p>Une offre intelligible, des CTA visibles et un message orienté vers l'action.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <span className="icon" style={{ fontSize: "2em" }}>⚙️</span>
                    <h3>Parcours fluide</h3>
                    <p>Design utile, structure mobile-first et automatisations qui évitent les tâches répétitives.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <span className="icon" style={{ fontSize: "2em" }}>📈</span>
                    <h3>Contenu de conversion</h3>
                    <p>Reels, landing pages et messages à fort potentiel d'engagement pour mieux convertir.</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={5} className="text-center" style={{ paddingLeft: "30px", paddingRight: "20px", textAlign: "center" }}>
              <img src={homeLogo} alt="Developpeur IA" className="img-fluid" style={{ maxHeight: "450px", width: "100%", height: "auto" }} />
            </Col>
          </Row>
        </Container>
      </Container>

      <Services />

      <section id="contact" className={styles.finalCtaSection}>
        <Container>
          <div className={styles.finalCtaCard}>
            <p className={styles.eyebrow}>PRÊT À FAIRE MIEUX ?</p>
            <h2>Votre site doit aider votre activité à vendre, pas seulement à exister.</h2>
            <p>Je vous aide à clarifier votre proposition, améliorer votre présence digitale et mettre en place les automatismes utiles.</p>
            <div className={styles.ctaRow}>
              <Button as="a" href={projectLink} target="_blank" rel="noreferrer" className={styles.primaryCta}>
                DM AUDIT
              </Button>
              <a href="/contact" className={styles.secondaryCta}>REMPLIR LE BRIEF</a>
            </div>
          </div>
        </Container>
      </section>

      <Home2 />
    </section>
  );
}

export default Home;
