import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../../shared/effects/Particle";
import Home2 from "./Home2";
import styles from "./Home.module.css";
import Services from "../../components/Services/Services";
import SEO from '../../shared/seo/SEO';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../shared/seo/seoConfig';
import { whatsappLink } from '../../shared/config/env';

function Home() {
  const projectLink = whatsappLink("Bonjour Digitalwebcraft, je voudrais discuter de mon projet.");

  return (
    <section>
      <SEO title={SITE_TITLE} description={SITE_DESCRIPTION} />
      <Container fluid className={styles.homeSection} id="home">
        <Particle />
        <Container className={`home-content ${styles.homeContent}`}>
          <Row className="align-items-center" style={{ minHeight: "80vh" }}>
            <Col md={7} className={styles.homeHeader} style={{ paddingRight: "30px", paddingLeft: "20px" }}>
              <div style={{ maxWidth: "100%", margin: "0 auto" }}>
                <p className={styles.eyebrow} style={{ fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "16px", fontWeight: 600 }}>
                  DIGITALWEBCRAFT · INSTAGRAM, PUB & SITES WEB POUR PME
                </p>

                <h1 className={styles.heading} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.15", marginBottom: "24px", fontWeight: 700 }}>
                  Plus de clients grâce à Instagram et à la pub
                </h1>

                <p className={styles.homeIntro}>
                  Je gère votre Instagram et vos publicités pour attirer des prospects qualifiés, puis je transforme cette attention en demandes, rendez-vous et ventes. Sites web et chatbots IA pour les PME.
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
                  <span>Gestion Instagram</span>
                  <span>Publicités performance</span>
                  <span>Sites web pour PME</span>
                  <span>Chatbots IA</span>
                </div>

                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <span className="icon" style={{ fontSize: "2em" }}>💬</span>
                    <h3>Des demandes qualifiées</h3>
                    <p>Des messages et des publicités qui parlent aux bonnes personnes et déclenchent des prises de contact.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <span className="icon" style={{ fontSize: "2em" }}>⚙️</span>
                    <h3>Un parcours sans friction</h3>
                    <p>Du premier clic à la prise de contact : un site clair, des appels à l'action visibles et des réponses rapides.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <span className="icon" style={{ fontSize: "2em" }}>📈</span>
                    <h3>Une réponse immédiate</h3>
                    <p>Un chatbot IA accueille vos visiteurs, répond aux questions fréquentes et transmet les demandes.</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={5} className="text-center" style={{ paddingLeft: "30px", paddingRight: "20px", textAlign: "center" }}>
              <img src={homeLogo} alt="DIGITAL Webcraft — Instagram, publicité et sites web pour PME" className="img-fluid" style={{ maxHeight: "450px", width: "100%", height: "auto" }} />
            </Col>
          </Row>
        </Container>
      </Container>

      <Services />

      <section id="contact" className={styles.finalCtaSection}>
        <Container>
          <div className={styles.finalCtaCard}>
            <p className={styles.eyebrow}>PRÊT À FAIRE MIEUX ?</p>
            <h2>Votre présence en ligne doit amener des clients, pas seulement exister.</h2>
            <p>Je clarifie votre message, j'attire les bons prospects et je mets en place les outils qui transforment les demandes en rendez-vous.</p>
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
