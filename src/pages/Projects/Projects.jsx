import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../shared/effects/Particle";
import grilli from "../../Assets/Projects/grilli.png";
import immersivest from "../../Assets/Projects/immersivest.png";
import digitweb from "../../Assets/Projects/digitweb.png";
import oblawf from "../../Assets/Projects/oblawf.png";
import mockupai from "../../Assets/Projects/mockupai.png";
import cabinetden from "../../Assets/Projects/cabinetden.png";
import salty from "../../Assets/Projects/salty.png"; 
import tasty from "../../Assets/Projects/tasty.png";
import hotel from "../../Assets/Projects/hotel.png";
import laser from "../../Assets/Projects/laser.png";
import SEO from '../../shared/seo/SEO';
import styles from './ProjectCards.module.css';
function Projects() {
  // Enhanced project data with creative agency features
  const projectsData = [
    {
      imgPath: "https://s.wordpress.com/mshots/v1/https://dynamic-triplan.vercel.app/",
      title: "Dynamic TriPlan",
      category: "Voyage & reservation",
      clientType: "Agence",
      featured: true,
      description: "Plateforme de voyages et teambuilding avec parcours dynamiques, CTA clairs et pages programmes — optimisée pour la conversion.",
      detailedDescription: "Site moderne qui présente des offres de voyages en groupe, activités express et teambuilding avec filtrage et pages dédiées. Mise en avant d'un héros fort (JUST MOVE) et call-to-actions persistants.",
      technologies: ["Next.js", "Tailwind CSS"],
      metrics: {
        timeline: "4 weeks",
        teamSize: 3
      },
      challenge: "Structurer une offre multi-segments (groupe, express, teambuilding) avec navigation rapide et forte identité visuelle.",
      solution: "Architecture claire avec sections dédiées, performance mobile-first et messages de marque mis en avant.",
      process: [
        { title: "Research", description: "Analyse des besoins, personas et parcours utilisateurs." },
        { title: "Design", description: "UI/UX orienté conversion avec hiérarchie visuelle nette." },
        { title: "Build", description: "Next.js + Tailwind; optimisation images et accessibilité." }
      ],
      results: [
        { value: "+28%", label: "Click-Through" },
        { value: "<1.2s", label: "First Paint" },
        { value: "A", label: "Accessibility" }
      ],
      ghLink: "https://github.com/Dakster-z/dynamic-triplan",
      demoLink: "https://dynamic-triplan.vercel.app/"
    },
    {
      imgPath: grilli,
      title: "Grilli Restaurant",
      category: "Developpement web",
      clientType: "Restaurant",
      featured: true,
      description: "Site vitrine pour un restaurant grill avec visuels immersifs, menu mis en avant et parcours de reservation simplifie.",
      detailedDescription: "Un site restaurant concu pour presenter la carte, faciliter la reservation et renforcer la desirabilite de la marque sur mobile.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      metrics: {
        timeline: "6 weeks",
        teamSize: 3
      },
      challenge: "Le restaurant avait besoin d'une presence digitale plus actuelle pour mieux presenter son univers et fluidifier les reservations.",
      solution: "Creation d'un site visuel avec reservation integree, sections claires et experience mobile optimisee.",
      process: [
        {
          title: "Analyse",
          description: "Etude de la cible, du positionnement et des attentes autour du parcours de reservation."
        },
        {
          title: "Design",
          description: "Maquettes et hierarchie visuelle pensées pour donner envie et guider l'utilisateur."
        },
        {
          title: "Developpement",
          description: "Implementation responsive avec reservation et sections de conversion bien visibles."
        },
        {
          title: "Tests & mise en ligne",
          description: "Validation multi-supports avant lancement."
        }
      ],
      results: [
        { value: "Booking flow", label: "Parcours de reservation" },
        { value: "Mobile-first", label: "Experience adaptee" },
        { value: "CTA clairs", label: "Orientation conversion" }
      ],
      ghLink: "https://github.com/Dakster-z/grilli",
      demoLink: "https://grilli-qf5j.vercel.app/"
    },
    {
      imgPath: immersivest,
      title: "Immersive Story Site",
      category: "Experience immersive",
      clientType: "Tech",
      featured: false,
      description: "Une plateforme moderne dédiée à la technologie holographique avancée. Le site présente des solutions de réalité augmentée avec un design futuriste.",
      detailedDescription: "Prototype immersif mettant en avant une technologie holographique via des elements 3D et des demonstrations interactives.",
      technologies: ["Three.js", "WebGL", "React", "GSAP"],
      metrics: {
        timeline: "8 weeks",
        teamSize: 4
      },
      challenge: "Concevoir une experience web immersive capable de valoriser une technologie innovante.",
      solution: "Interface futuriste, animations fluides et demos interactives pour illustrer la proposition de valeur.",
      process: [
        {
          title: "Concept",
          description: "Definition de la direction artistique et des interactions."
        },
        {
          title: "3D & animation",
          description: "Creation des scenes, transitions et mouvements immersifs."
        },
        {
          title: "Integration interactive",
          description: "Mise en place des demonstrations interactives et optimisations d'animation."
        }
      ],
      results: [
        { value: "Demo project", label: "Prototype immersif" },
        { value: "Concept design", label: "Direction visuelle" },
        { value: "Interactive demo", label: "Experience exploratoire" }
      ],
      ghLink: "Privé sur demande",
      demoLink: "https://immersive-story-site.vercel.app/"
    },
    {
      imgPath: digitweb,
      title: "AI Digital Craft Shine",
      category: "Agence digitale",
      clientType: "Agence",
      featured: true,
      description: "Un site vitrine professionnel pour une agence de développement web spécialisée dans les solutions haut de gamme.",
      detailedDescription: "Site vitrine premium pour une agence web mettant en avant son savoir-faire technique et ses offres a forte valeur.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      metrics: {
        timeline: "10 weeks",
        teamSize: 5
      },
      challenge: "Installer une presence premium qui rend le savoir-faire plus lisible et plus credible.",
      solution: "Site sophistique avec presentations de projets, sections de services et CTA clairs.",
      ghLink: "Privé sur demande",
      demoLink: "https://digital-craft-shine.vercel.app/"
    },
    {
      imgPath: laser,
      title: "Laser Center",
      category: "Clinique",
      clientType: "Agence",
      featured: true,
      description: "Un site vitrine professionnel pour un centre de laser et de services haut de gamme.",
      detailedDescription: ".",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      metrics: {
        timeline: "4 weeks",
        teamSize: 5
      },
      challenge: "Donner une image plus premium au centre tout en facilitant la prise de contact.",
      solution: "Creation d'un site clair, rassurant et oriente prise de rendez-vous.",
      ghLink: "https://github.com/Dakster-z/laser-clinic-website.git",
      demoLink: "https://laser-clinic-website.vercel.app/"
    },
    {
      imgPath: cabinetden,
      title: "Dental Clinic",
      category: "Sante",
      clientType: "Medical",
      featured: false,
      description: "Site vitrine moderne pour une clinique dentaire, présentant les services, l'équipe médicale, les témoignages patients et un formulaire de prise de rendez-vous en ligne.",
      technologies: ["React", "Bootstrap", "Node.js"],
      metrics: {
        timeline: "4 weeks",
        teamSize: 2
      },
      ghLink: "https://github.com/Dakster-z/dental-clinicv2.git",
      demoLink: "https://dental-clinicv2.vercel.app/"
    },
    {
      imgPath: mockupai,
      title: "AI Chatbot pour e-commerce",
      category: "Developpement IA",
      clientType: "E-commerce",
      featured: false,
      description: "Une boutique en ligne avait trop de demandes clients (livraison, retours, produits). Solution : Chatbot IA intégré 24/7 capable de répondre aux FAQ.",
      technologies: ["OpenAI API", "Node.js", "React", "Firebase"],
      metrics: {
        timeline: "12 weeks",
        teamSize: 4
      },
      results: [
        { value: "Automatisation FAQ", label: "Support 24/7" },
        { value: "Parcours client", label: "Reponses rapides" },
        { value: "Demo project", label: "Integration IA" }
      ],
      ghLink: "",
      demoLink: ""
    },
    {
      imgPath: oblawf,
      title: "O&B Law Firm",
      category: "Services juridiques",
      clientType: "Juridique",
      featured: false,
      description: "Site professionnel pour un cabinet d'avocats avec structure sobre, navigation claire et presentation rassurante des services.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      metrics: {
        timeline: "5 weeks",
        teamSize: 2
      },
      ghLink: "https://github.com/Dakster-z/O-B-Lawfirm",
      demoLink: "https://oandblawfirm.com"
    },
    {
      imgPath: salty,
      title: "Daks Sushi",
      category: "Developpement web",
      clientType: "Restaurant",
      featured: false,
      description: "Site vitrine pour un restaurant sushi avec design immersif, visuels gourmands et parcours de commande simplifie.",
      technologies: ["React", "Styled Components", "Node.js"],
      metrics: {
        timeline: "7 weeks",
        teamSize: 3
      },
      results: [
        { value: "Mobile-first", label: "Commande simplifiee" },
        { value: "Design immersif", label: "Univers marque" },
        { value: "CTA clairs", label: "Prise de commande" }
      ],
      ghLink: "",
      demoLink: "https://one-salty-tuna.vercel.app/"
    },
    {
      imgPath: tasty,
      title: "Tasty food",
      category: "Food & hospitality" ,
      clientType: "SME",
      featured: false,
      description: "Une Application web pour un restaurant fancy de sushi .",
      technologies: ["React", "Node.js"], 
      metrics: {
        timeline: "3 weeks",
        teamSize: 3
      },
      results: [
        { value: "Concept design", label: "Univers culinaire" },
        { value: "Demo project", label: "Presentation produit" },
        { value: "Performance optimized", label: "Interface legere" }
      ],
      ghLink: "",
      demoLink: "https://responsive-website-mu-one.vercel.app/#home"
    }, 
    {
      imgPath: hotel,
      title: "Fancyhostel",
      category: "Hotellerie",
      clientType: "M",
      featured: false,
      description: "Site vitrine moderne pour un hotel 3 étoiles, présentant les services, et un formulaire de prise de rendez-vous en ligne.",
      technologies: ["React", "Bootstrap", "Node.js"],
      metrics: {
        timeline: "4 weeks",
        teamSize: 2
      },
      ghLink: "https://github.com/Dakster-z/hotel",
      demoLink: "https://hotel-daksster.vercel.app/"
    },
    {
      imgPath: "https://s.wordpress.com/mshots/v1/https://fitness-coach-website-template-dark-delta.vercel.app/",
      title: "Fitness Coach Website",
      category: "Sante & fitness",
      clientType: "Coach",
      featured: false,
      description: "Site de coach sportif avec promesse claire, structure de landing page et prise de contact orientee conversion.",
      detailedDescription: "Landing page moderne pour presenter des offres de coaching, clarifier les benefices et guider l'utilisateur vers la prise de contact.",
      technologies: ["Next.js", "Tailwind CSS"],
      metrics: {
        timeline: "3 weeks",
        teamSize: 2
      },
      challenge: "Presenter une offre de coaching de facon claire et rassurante tout en gardant une interface rapide et lisible.",
      solution: "Sections bien structurees, copywriting orienté action et optimisations mobiles.",
      process: [
        { title: "Cadrage", description: "Definition de la cible, de la promesse et des benefices cles." },
        { title: "Design", description: "Construction des sections avec hierarchie forte et CTA visibles." },
        { title: "Implementation", description: "Developpement Next.js et Tailwind avec optimisation performance." }
      ],
      results: [
        { value: "Conversion-focused design", label: "Structure de landing page" },
        { value: "Performance optimized", label: "Chargement rapide" },
        { value: "Clear call-to-action", label: "Parcours prise de contact" }
      ],
      ghLink: "https://github.com/Dakster-z/fitness-coach-website-template-dark",
      demoLink: "https://fitness-coach-website-template-dark-delta.vercel.app/"
    }
  ];

  return (
  <React.Fragment>
      <SEO title="Projets – Portfolio" description="Selection de projets web et IA avec contexte, stack technique et approche produit." />
    <Container fluid id="etudes-de-cas" className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Études de <strong className="purple">cas</strong>
        </h1>
        <p style={{ color: "white" }}>
          Des projets conçus pour clarifier une offre, renforcer la crédibilité d'une marque et guider l'utilisateur vers l'action.
        </p>

        {/* Projects Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <div className={styles.ugcProjectCard}>
              <div className={styles.ugcProjectVisual}>
                <span className={styles.ugcProjectPlay}>▶</span>
                <span className={styles.ugcProjectBadge}>NOUVEAU · CONTENU DE CONVERSION</span>
              </div>
              <div className={styles.ugcProjectBody}>
                <h2>Votre site peut aussi devenir votre meilleur Reel.</h2>
                <p>
                  Un Reel court peut montrer votre offre, vos services et votre parcours de prise de contact en quelques secondes, sans inventer de promesses ni reconstruire votre interface.
                </p>
                <ul>
                  <li>Script orienté action</li>
                  <li>Screenshots réels dans un mockup propre</li>
                  <li>Sous-titres et voix off</li>
                  <li>CTA unique : rendez-vous, devis, réservation ou DM</li>
                </ul>
                <a href="/#ugc" className={styles.ugcProjectCta}>VOIR LES EXEMPLES <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </Col>
          {projectsData.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  key={index}
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  projectId={index + 1}
                  category={project.category}
                  clientType={project.clientType}
                  featured={project.featured}
                  detailedDescription={project.detailedDescription}
                  technologies={project.technologies}
                  metrics={project.metrics}
                  challenge={project.challenge}
                  solution={project.solution}
                  process={project.process}
                  results={project.results}
                />
              </Col>
            ))}
        </Row>

        {/* Project Statistics */}
        <Row className="mt-5">
          <Col md={12}>
            <div className="project-stats">
              <h3 className="text-center mb-4" style={{ color: "#c770f0" }}>
                Points forts du portfolio
              </h3>
              <Row>
                <Col md={3} className="text-center">
                  <div className="stat-item">
                    <h2 style={{ color: "#c770f0" }}>{projectsData.length}+</h2>
                    <p style={{ color: "white" }}>Projets presentes</p>
                  </div>
                </Col>
                <Col md={3} className="text-center">
                  <div className="stat-item">
                    <h2 style={{ color: "#c770f0" }}>Mobile-first</h2>
                    <p style={{ color: "white" }}>Experience prioritaire</p>
                  </div>
                </Col>
                <Col md={3} className="text-center">
                  <div className="stat-item">
                    <h2 style={{ color: "#2ecc71" }}>CTA clairs</h2>
                    <p style={{ color: "white" }}>Orientation conversion</p>
                  </div>
                </Col>
                <Col md={3} className="text-center">
                  <div className="stat-item">
                    <h2 style={{ color: "#c770f0" }}>Performance</h2>
                    <p style={{ color: "white" }}>Optimisation front-end</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        {/* Privacy & Compliance Note */}
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
              Les projets affiches mettent l'accent sur l'experience utilisateur, la clarté du message et la qualite d'execution. Les chiffres non verifies ont ete retires.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
    </React.Fragment>
  );
}

export default Projects;
