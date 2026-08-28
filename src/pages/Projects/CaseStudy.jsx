import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Button, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Particle from "../../shared/effects/Particle";
import { FaArrowLeft, FaExternalLinkAlt, FaClock, FaUsers, FaTrophy, FaLightbulb, FaCogs, FaRocket, FaChartLine } from "react-icons/fa";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import placeholderProject from "../../Assets/placeholder-project.svg";
import "./CaseStudy.css";
import styles from "./CaseStudy.module.css";

function CaseStudy() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  // Enhanced project data with detailed case study information
  const caseStudyData = {
    "1": {
      title: "Refonte de présence digitale",
      subtitle: "Un site plus clair, plus crédible et plus orienté conversion",
      category: "Stratégie web",
      client: "Projet de marque",
      duration: "4 à 6 semaines",
      team: "Équipe projet",
      year: "2024",
      heroImage: placeholderProject,

      overview: {
        challenge: "Présenter une offre premium de manière lisible, sans surcharge visuelle ni parcours compliqué pour les visiteurs.",
        solution: "Structuration claire des sections, hiérarchie forte du message, boutons d'action visibles et meilleure fluidité mobile.",
        impact: "Le site devient un outil de conversion : plus simple à comprendre, plus rassurant à naviguer et plus utile pour la prise de contact."
      },

      metrics: {
        timeline: "4 à 6 semaines",
        teamSize: "2 à 3 personnes",
        focus: "Conversion",
        delivery: "Mobile-first",
        performance: "Optimisée",
        output: "Site web"
      },

      technologies: ["React", "Node.js", "Bootstrap", "UI/UX", "Automatisations"],

      process: [
        {
          phase: "Audit & cadrage",
          duration: "1 semaine",
          description: "Analyse de l'offre, du public cible et des points de friction du parcours existant.",
          deliverables: ["Positionnement", "Cible", "Objectifs", "Points de friction"],
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        },
        {
          phase: "Direction créative",
          duration: "1 semaine",
          description: "Définition de la hiérarchie visuelle, du ton de marque et des appels à l'action prioritaires.",
          deliverables: ["Wireframes", "Structure de contenu", "Palette", "CTA"],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        },
        {
          phase: "Développement",
          duration: "2 à 3 semaines",
          description: "Mise en place d'une interface fluide, rapide et adaptée à l'objectif business du projet.",
          deliverables: ["Frontend", "Responsive", "Formulaires", "Intégrations"],
          image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        }
      ],

      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      ],

      results: [
        { metric: "Message principal", before: "Offre diffuse", after: "Proposition claire", improvement: "Clarifie" },
        { metric: "Navigation", before: "Parcours dense", after: "Accès direct", improvement: "Simplifie" },
        { metric: "Mobile", before: "Lecture lourde", after: "Sections fluides", improvement: "Optimise" },
        { metric: "CTA", before: "Peu visibles", after: "Placement stratégique", improvement: "Renforce" }
      ],

      nextSteps: [
        "Automatisation des demandes",
        "Contenu social aligné à la marque",
        "Suivi des leads et optimisation",
        "Mise en place d'un funnel plus fort"
      ]
    }
  };

  const project = caseStudyData[projectId];

  useEffect(() => {
    if (!project) {
      navigate('/project');
    }
  }, [project, navigate]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const handleProcessStepClick = (index) => {
    setCurrentStep(index);
  };

  if (!project) {
    return null;
  }

  return (
      <Container fluid className={styles.caseStudySection}>
      <Particle />
      
      {/* Hero Section */}
      <div className={styles.caseStudyHero} style={{ backgroundImage: `url(${project.heroImage})` }}>
        <div className={styles.heroOverlay}>
           <Container>
             <Row>
               <Col md={12}>
                <Button 
                  variant="outline-light" 
                  className={`${styles.backBtn} mb-4`}
                  onClick={() => navigate('/project')}
                >
                  <FaArrowLeft /> Retour aux projets
                </Button>
                
                <div className={styles.heroContent}>
                  <Badge bg="primary" className={`${styles.categoryBadge} mb-3`}>
                    {project.category}
                  </Badge>
                  <h1 className={styles.heroTitle}>{project.title}</h1>
                  <p className={styles.heroSubtitle}>{project.subtitle}</p>
                  
                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <FaClock className={styles.metaIcon} />
                      <span>{project.duration}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaUsers className={styles.metaIcon} />
                      <span>{project.team}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaTrophy className={styles.metaIcon} />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

       <Container>
         {/* Project Overview */}
        <Row className={styles.overviewSection}>
           <Col md={12}>
            <h2 className={styles.sectionTitle}>Vue d'ensemble</h2>
          </Col>
          <Col md={4}>
            <Card className={`${styles.overviewCard} ${styles.challengeCard}`}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <FaLightbulb />
                </div>
                <h4>Defi</h4>
                <p>{project.overview.challenge}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`${styles.overviewCard} ${styles.solutionCard}`}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <FaCogs />
                </div>
                <h4>Solution</h4>
                <p>{project.overview.solution}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`${styles.overviewCard} ${styles.impactCard}`}>
              <Card.Body>
                <div className={styles.cardIcon}>
                  <FaRocket />
                </div>
                <h4>Impact</h4>
                <p>{project.overview.impact}</p>
              </Card.Body>
            </Card>
          </Col>
         </Row>

         {/* Key Metrics */}
        <Row className={styles.metricsSection}>
           <Col md={12}>
            <h2 className={styles.sectionTitle}>Points cles</h2>
          </Col>
          {Object.entries(project.metrics).map(([key, value], index) => (
            <Col md={2} key={index}>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>{value}</div>
                <div className={styles.metricLabel}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Technology Stack */}
        <Row className="tech-section">
          <Col md={12}>
            <h2 className="section-title">Stack technique</h2>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <Badge key={index} bg="secondary" className="tech-badge">
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Process Timeline */}
        <Row className="process-section">
          <Col md={12}>
            <h2 className="section-title">Processus de creation</h2>
            <div className="process-timeline">
              {project.process.map((step, index) => (
                <div 
                  key={index} 
                  className={`process-step ${currentStep === index ? 'active' : ''}`}
                  onClick={() => handleProcessStepClick(index)}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{step.phase}</h4>
                    <span className="step-duration">{step.duration}</span>
                    <p>{step.description}</p>
                    <div className="deliverables">
                      {step.deliverables.map((deliverable, i) => (
                        <Badge key={i} bg="outline-primary" className="deliverable-badge">
                          <BsCheckCircle /> {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="step-image">
                    <img 
                      src={step.image} 
                      alt={step.phase}
                      onClick={() => handleImageClick(step.image)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Results Comparison */}
        <Row className="results-section">
          <Col md={12}>
            <h2 className="section-title">
              <FaChartLine className="section-icon" />
              Resultats cles
            </h2>
          </Col>
          {project.results.map((result, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="result-card">
                <Card.Body>
                  <h5>{result.metric}</h5>
                  <div className="result-comparison">
                    <div className="before">
                      <span className="label">Avant</span>
                      <span className="value">{result.before}</span>
                    </div>
                    <BsArrowRight className="arrow" />
                    <div className="after">
                      <span className="label">Apres</span>
                      <span className="value">{result.after}</span>
                    </div>
                  </div>
                  <div className="improvement">
                    {result.improvement}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Project Gallery */}
        <Row className="gallery-section">
          <Col md={12}>
            <h2 className="section-title">Galerie projet</h2>
            <div className="project-gallery">
              {project.gallery.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                  />
                  <div className="gallery-overlay">
                    <FaExternalLinkAlt />
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Testimonial */}
        {project.testimonial && <Row className="testimonial-section">
          <Col md={12}>
            <Card className="testimonial-card">
              <Card.Body>
                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  <blockquote>{project.testimonial.quote}</blockquote>
                  <div className="testimonial-author">
                    <img src={project.testimonial.avatar} alt={project.testimonial.author} />
                    <div>
                      <strong>{project.testimonial.author}</strong>
                      <span>{project.testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>}

        {/* Next Steps */}
        <Row className="next-steps-section">
          <Col md={12}>
            <h2 className="section-title">Pistes d'evolution</h2>
            <div className="next-steps">
              {project.nextSteps.map((step, index) => (
                <div key={index} className="next-step-item">
                  <BsCheckCircle className="step-icon" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* CTA Section */}

                {/* Before / After Comparison */}
                <Row className="before-after-section">
                  <Col md={12}>
                    <h2 className="section-title">Avant / Apres</h2>
                  </Col>
                  {project.gallery.slice(0,2).map((img, idx) => (
                    <Col md={6} key={idx}>
                      <img src={img} alt={idx===0?"Avant" : "Apres"} className="before-after-img" />
                    </Col>
                  ))}
                </Row>


        <Row className="cta-section">
          <Col md={12} className="text-center">
            <h3>Vous avez un projet a lancer ?</h3>
            <p>Parlons de vos objectifs et de la meilleure structure pour les atteindre.</p>
            <Button 
              variant="primary" 
              size="lg" 
              className="cta-btn"
              onClick={() => navigate('/contact')}
            >
              Demarrer un projet <BsArrowRight />
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Image Modal */}
      <Modal show={showImageModal} onHide={() => setShowImageModal(false)} size="lg" centered>
        <Modal.Body className="p-0">
          <img src={selectedImage} alt="Project detail" className="modal-image" />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default CaseStudy;
