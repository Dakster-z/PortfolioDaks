import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGlobe, FaCog, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';
import SEO from '../../shared/seo/SEO';

function Services() {
  return (
    <React.Fragment>
      <SEO
        title="Services – Digitalwebcraft"
        description="Sites web, IA sur mesure, Reels de conversion pour PMEs marocaines et agences web en white-label."
      />
      <section className={styles.servicesSection} id="services">
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <h2 className={styles.servicesTitle}>Ce que Digitalwebcraft peut construire pour votre activité.</h2>
              <p className={styles.servicesIntro}>
                Chaque service a un objectif simple : rendre votre offre plus claire, vos demandes plus faciles à gérer et votre présence digitale plus utile.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className={styles.serviceCard}>
                <Card.Body>
                  <FaGlobe className={styles.serviceIcon} />
                  <h3>Sites web qui guident vers l'action</h3>
                  <p>
                    Landing pages, sites vitrines et expériences e-commerce pensés pour rendre l'offre compréhensible, mettre en avant le bon appel à l'action et faciliter les demandes de devis, rendez-vous ou commandes.
                  </p>
                  <ul>
                    <li>Landing pages de conversion</li>
                    <li>Sites vitrines et e-commerce</li>
                    <li>Parcours mobile et CTA clairs</li>
                  </ul>
                  <Link to="/#contact" className={`btn btn-primary ${styles.ctaButton}`}>
                    PARLER DE MON SITE
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className={styles.serviceCard}>
                <Card.Body>
                  <FaCog className={styles.serviceIcon} />
                  <h3>Des systèmes qui font gagner du temps</h3>
                  <p>
                    J’automatise les tâches répétitives et les parcours de demandes : formulaires connectés, suivi de leads, FAQ assistées, tableaux de pilotage et solutions IA adaptées à votre fonctionnement.
                  </p>
                  <ul>
                    <li>Connexion formulaires, WhatsApp et outils métier</li>
                    <li>Qualification et suivi des demandes</li>
                    <li>Assistants IA limités à vos informations validées</li>
                  </ul>
                  <Link to="/#contact" className={`btn btn-primary ${styles.ctaButton}`}>
                    EXPLORER UNE SOLUTION IA
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className={styles.serviceCard}>
                <Card.Body>
                  <FaVideo className={styles.serviceIcon} />
                  <h3>Reels qui transforment votre site en contenu</h3>
                  <p>
                    Je transforme vos vraies pages en vidéos verticales pour Instagram et TikTok : hook, script, voix off, sous-titres et CTA. Votre site devient une source de contenu prête à publier.
                  </p>
                  <ul>
                    <li>Captures réelles de votre site</li>
                    <li>Voix en français, Darija ou anglais</li>
                    <li>Format 9:16 prêt pour Reels et TikTok</li>
                  </ul>
                  <Link to="/#ugc" className={`btn btn-primary ${styles.ctaButton}`}>
                    DÉCOUVRIR L’OFFRE UGC
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Services;