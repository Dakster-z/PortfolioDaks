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
                  <a href="#etudes-de-cas" className={styles.secondaryCta}>
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

      <section id="ugc" className={styles.ugcSection}>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <p className={styles.eyebrow}>NOUVEAU · CONTENU DE CONVERSION</p>
              <h2 className={styles.sectionTitle}>Votre site peut aussi devenir votre meilleur Reel.</h2>
              <p className={styles.ugcText}>
                Un prospect ne lit pas toujours toute votre page. Un Reel court peut montrer votre offre, vos services et votre parcours de prise de contact en quelques secondes — sans inventer de promesses ni reconstruire votre interface.
              </p>
              <ul className={styles.ugcList}>
                <li>Script orienté action</li>
                <li>Screenshots réels dans un mockup propre</li>
                <li>Sous-titres et voix off</li>
                <li>CTA unique : rendez-vous, devis, réservation ou DM</li>
              </ul>
              <a href="#etudes-de-cas" className={styles.secondaryCta}>VOIR LES EXEMPLES <span aria-hidden="true">→</span></a>
            </Col>
            <Col lg={6}>
              <div className={styles.videoGrid}>
                <div className={styles.videoCard}>
                  <span className={styles.videoBadge}>NOUVEAU</span>
                  <div className={styles.videoThumb}>
                    <span>UGC</span>
                  </div>
                  <p>Votre page → un Reel prêt à publier</p>
                </div>
                <div className={styles.videoCard}>
                  <span className={styles.videoBadge}>9:16</span>
                  <div className={styles.videoThumbAlt}>
                    <span>CTA</span>
                  </div>
                  <p>Une offre claire, un seul appel à l'action</p>
                </div>
                <div className={styles.videoCard}>
                  <span className={styles.videoBadge}>FR · DARIJA · EN</span>
                  <div className={styles.videoThumb}>
                    <span>REEL</span>
                  </div>
                  <p>Voix off, sous-titres et format vertical</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="etudes-de-cas" className={styles.caseSection}>
        <Container>
          <p className={styles.eyebrow}>ÉTUDES DE CAS · DÉMONSTRATIONS</p>
          <h2 className={styles.sectionTitle}>Des sites pensés pour être compris — et partagés.</h2>
          <p className={styles.caseIntro}>
            Voici des démonstrations de Reels créés à partir de pages web. Chaque vidéo utilise les éléments visibles du site concerné et est clairement identifiée comme étude de cas lorsque le projet est une démo.
          </p>
          <Row className="g-4 mt-2">
            <Col md={4}>
              <div className={styles.caseCard}>
                <span className={styles.caseTag}>ÉTUDE DE CAS · CLINIQUE LASER</span>
                <div className={styles.caseMedia}><span>01</span><small>laser_clinic_case_study_ugc_9x16.mp4</small></div>
                <h3>Rassurer avant le premier rendez-vous</h3>
                <p>Une vidéo courte qui met en avant les services, la prise de rendez-vous en ligne, les informations de présence et l'équipement validé par le brief.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.caseCard}>
                <span className={styles.caseTag}>ÉTUDE DE CAS · VOYAGE</span>
                <div className={styles.caseMedia}><span>02</span><small>dak_travel_3d_ugc_9x16.mp4</small></div>
                <h3>Passer de l'envie à la réservation</h3>
                <p>Un format dynamique qui montre le moteur de recherche, les destinations et les formats de voyage à partir des vraies sections du site.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.caseCard}>
                <span className={styles.caseTag}>ÉTUDE DE CAS · CLINIQUE DENTAIRE</span>
                <div className={styles.caseMedia}><span>03</span><small>dental_clinicv2_corrected_ugc_9x16.mp4</small></div>
                <h3>Rendre le parcours patient plus évident</h3>
                <p>Un montage qui guide visuellement du formulaire de rendez-vous aux services et à la présentation du cabinet, avec des captures réelles du projet.</p>
              </div>
            </Col>
          </Row>
          <div className={styles.caseCta}>
            <h3>Votre site a déjà les éléments pour devenir un Reel utile.</h3>
            <p>Envoyez-moi votre URL. Je vous indique quelle section peut devenir votre premier contenu de conversion.</p>
            <a href="https://wa.me/212620001002?text=Bonjour%20Digitalwebcraft%2C%20je%20souhaite%20un%20audit%20de%20mon%20site." target="_blank" rel="noreferrer" className={styles.primaryCta}>DM AUDIT</a>
          </div>
        </Container>
      </section>

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
