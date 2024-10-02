import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import grilli from "../../Assets/Projects/grilli.png";
import glowing from "../../Assets/Projects/glowing.png";
import oblawf from "../../Assets/Projects/oblawf.png";
import sushi from "../../Assets/Projects/sushi.png";


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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glowing}
              isBlog={false}
              title="Glowing"
              description="Glowing is a modern e-commerce platform built for selling cosmetic products. With an elegant and clean design, the website provides a seamless shopping experience. It features an easy-to-navigate product catalog, secure checkout, and responsive design for all devices. Glowing integrates efficient filtering and search options to help customers find their desired beauty products quickly."
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

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
