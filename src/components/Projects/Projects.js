import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import grilli from "../../Assets/Projects/grilli.png";
import immersivest from "../../Assets/Projects/immersivest.png";
import digitweb from "../../Assets/Projects/digitweb.png";
import glowing from "../../Assets/Projects/glowing.png";
import oblawf from "../../Assets/Projects/oblawf.png";
import sushi from "../../Assets/Projects/sushi.png";
import mockupai from "../../Assets/Projects/mockupai.png";
import cabinetden from "../../Assets/Projects/cabinetden.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grilli}
              isBlog={false}
              title="Grilli"
              description="Grilli is a dynamic showcase website designed for a grill restaurant. The site highlights the restaurant's mouth-watering dishes, featuring high-quality visuals and an intuitive layout.The site emphasizes user-friendly navigation and responsiveness, allowing customers to browse the menu, explore the restaurant’s story, and easily make reservations online"
              ghLink="https://github.com/Dakster-z/grilli"
              demoLink=""
            />
          </Col>

          {/* Projet HoloLens Pro - Immersive Story Site */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={immersivest} // image temporaire
              isBlog={false}
              title="Immersive Story Site"
              description="Une plateforme moderne dédiée à la technologie holographique avancée. Le site présente des solutions de réalité augmentée avec un design futuriste utilisant des tons bleus et des éléments 3D. L'interface propose une navigation intuitive avec des sections pour les produits, caractéristiques, applications, et démonstrations. Le design met l'accent sur l'innovation technologique avec des visuels immersifs et une approche professionnelle pour transformer l'expérience utilisateur."
              ghLink="Privé sur demande"
              demoLink="https://immersive-story-site.vercel.app/"
            />
          </Col>

          {/* Projet Agence Digitale - Digital Craft Shine */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitweb} // image temporaire
              isBlog={false}
              title="Ai Digital Craft Shine"
              description="Un site vitrine professionnel pour une agence de développement web spécialisée dans les solutions haut de gamme. Le design utilise une palette orange/noir avec des éléments de code intégrés visuellement. Le site met en avant les services personnalisés, l'automatisation IA, et l'approche axée sur la croissance. L'interface présente des métriques impressionnantes et propose des solutions sur mesure pour les entreprises en croissance."
              ghLink="Privé sur demande"
              demoLink="https://digital-craft-shine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cabinetden}
              isBlog={false}
              title="Dental clinic"
              description="Site vitrine moderne pour une clinique dentaire, présentant les services, l’équipe médicale, les témoignages patients et un formulaire de prise de rendez-vous en ligne. Design épuré, navigation intuitive et compatible mobile"
              ghLink="https://github.com/Dakster-z/dental-clinicv2.git"
              demoLink="https://dental-clinicv2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mockupai}
              isBlog={false}
              title="AI Chatbot pour e-commerce"
              description="Une boutique en ligne avait trop de demandes clients (livraison, retours, produits).
              Solution : Chatbot IA intégré 24/7 capable de répondre aux FAQ, suivre les commandes et rediriger vers le support si nécessaire.
              Stack : OpenAI API, Node.js, React, Firebase."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oblawf}
              isBlog={false}
              title="O&B Law Firm"
              description="O&B Law Firm is a professional website designed to represent a law firm’s services. The site features a clean and sophisticated design with easy navigation, allowing visitors to explore the firm's areas of expertise, team profiles, and legal resources. It includes a contact form for inquiries and showcases testimonials to build trust with potential clients. The website is fully responsive, ensuring an optimal experience across all devices."
              ghLink="https://github.com/Dakster-z/O-B-Lawfirm"
              demoLink="o&blawfirm.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sushi}
              isBlog={false}
              title="Daks Sushi"
              description="Daks Sushi is a vibrant and visually appealing website created for a sushi restaurant. With a sleek design that captures the essence of Japanese cuisine, the site allows customers to browse the sushi menu, explore special offers, and make reservations. Daks Sushi is optimized for mobile devices, ensuring a smooth user experience for ordering and discovering the restaurant’s offerings on the go."
              ghLink="https://github.com/Dakster-z/sushi"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glowing}
              isBlog={false}
              title="TaskAutomator"
              description="Une PME voulait automatiser son suivi de tâches et générer des rapports.
Solution : Application web avec espace admin, gestion de tâches, intégrations API (Slack/Email)."
              ghLink=""
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
