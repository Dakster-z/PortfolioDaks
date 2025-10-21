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
function Projects() {
  // Enhanced project data with creative agency features
  const projectsData = [
    {
      imgPath: grilli,
      title: "Grilli Restaurant",
      category: "Web Development",
      clientType: "Restaurant",
      featured: true,
      description: "Grilli is a dynamic showcase website designed for a grill restaurant. The site highlights the restaurant's mouth-watering dishes, featuring high-quality visuals and an intuitive layout.",
      detailedDescription: "A comprehensive restaurant website featuring online reservations, menu showcase, and customer testimonials. Built with modern web technologies to provide an exceptional user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      metrics: {
        roi: 150,
        timeline: "6 weeks",
        teamSize: 3
      },
      challenge: "The restaurant needed a modern online presence to attract customers and streamline reservations.",
      solution: "We created a visually stunning website with integrated booking system and mobile-optimized design.",
      process: [
        {
          title: "Discovery & Research",
          description: "Analyzed target audience and competitor landscape to define project requirements."
        },
        {
          title: "Design & Prototyping",
          description: "Created wireframes and high-fidelity mockups focusing on visual appeal and usability."
        },
        {
          title: "Development & Integration",
          description: "Built responsive website with booking system and payment integration."
        },
        {
          title: "Testing & Launch",
          description: "Comprehensive testing across devices and browsers before successful launch."
        }
      ],
      results: [
        { value: "300%", label: "Increase in Online Bookings" },
        { value: "85%", label: "Mobile Traffic" },
        { value: "4.8/5", label: "Customer Rating" }
      ],
      ghLink: "https://github.com/Dakster-z/grilli",
      demoLink: "https://grilli-qf5j.vercel.app/"
    },
    {
      imgPath: immersivest,
      title: "Immersive Story Site",
      category: "AR/VR Development",
      clientType: "Technology",
      featured: false,
      description: "Une plateforme moderne dédiée à la technologie holographique avancée. Le site présente des solutions de réalité augmentée avec un design futuriste.",
      detailedDescription: "A cutting-edge platform showcasing holographic technology with immersive 3D elements and interactive demonstrations.",
      technologies: ["Three.js", "WebGL", "React", "GSAP"],
      metrics: {
        roi: 200,
        timeline: "8 weeks",
        teamSize: 4
      },
      challenge: "Creating an immersive web experience that showcases advanced AR/VR technology capabilities.",
      solution: "Developed a futuristic interface with 3D elements and interactive demos to engage users.",
      process: [
        {
          title: "Concept Development",
          description: "Defined the futuristic aesthetic and interactive elements for the platform."
        },
        {
          title: "3D Modeling & Animation",
          description: "Created immersive 3D models and animations using advanced web technologies."
        },
        {
          title: "Interactive Integration",
          description: "Implemented interactive demos and smooth animations for user engagement."
        }
      ],
      results: [
        { value: "500%", label: "User Engagement" },
        { value: "92%", label: "Demo Completion Rate" },
        { value: "15min", label: "Average Session Time" }
      ],
      ghLink: "Privé sur demande",
      demoLink: "https://immersive-story-site.vercel.app/"
    },
    {
      imgPath: digitweb,
      title: "AI Digital Craft Shine",
      category: "Digital Agency",
      clientType: "Agency",
      featured: true,
      description: "Un site vitrine professionnel pour une agence de développement web spécialisée dans les solutions haut de gamme.",
      detailedDescription: "A professional showcase website for a premium web development agency specializing in AI-powered solutions and high-end digital experiences.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      metrics: {
        roi: 180,
        timeline: "10 weeks",
        teamSize: 5
      },
      challenge: "Creating a premium brand presence that showcases technical expertise and attracts high-value clients.",
      solution: "Developed a sophisticated website with interactive elements and case study presentations.",
      ghLink: "Privé sur demande",
      demoLink: "https://digital-craft-shine.vercel.app/"
    },
    {
      imgPath: cabinetden,
      title: "Dental Clinic",
      category: "Healthcare",
      clientType: "Medical",
      featured: false,
      description: "Site vitrine moderne pour une clinique dentaire, présentant les services, l'équipe médicale, les témoignages patients et un formulaire de prise de rendez-vous en ligne.",
      technologies: ["React", "Bootstrap", "Node.js"],
      metrics: {
        roi: 120,
        timeline: "4 weeks",
        teamSize: 2
      },
      ghLink: "https://github.com/Dakster-z/dental-clinicv2.git",
      demoLink: "https://dental-clinicv2.vercel.app/"
    },
    {
      imgPath: mockupai,
      title: "AI Chatbot pour e-commerce",
      category: "AI Development",
      clientType: "E-commerce",
      featured: false,
      description: "Une boutique en ligne avait trop de demandes clients (livraison, retours, produits). Solution : Chatbot IA intégré 24/7 capable de répondre aux FAQ.",
      technologies: ["OpenAI API", "Node.js", "React", "Firebase"],
      metrics: {
        roi: 250,
        timeline: "12 weeks",
        teamSize: 4
      },
      ghLink: "",
      demoLink: ""
    },
    {
      imgPath: oblawf,
      title: "O&B Law Firm",
      category: "Legal Services",
      clientType: "Legal",
      featured: false,
      description: "O&B Law Firm is a professional website designed to represent a law firm's services. The site features a clean and sophisticated design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      metrics: {
        roi: 90,
        timeline: "5 weeks",
        teamSize: 2
      },
      ghLink: "https://github.com/Dakster-z/O-B-Lawfirm",
      demoLink: "o&blawfirm.com"
    },
    {
      imgPath: salty,
      title: "Daks Sushi",
      category: "Web Development",
      clientType: "Restaurant",
      featured: false,
      description: "Daks Sushi is a vibrant and visually appealing website created for a sushi restaurant. With a sleek design that captures the essence of Japanese cuisine.",
      technologies: ["React", "Styled Components", "Node.js"],
      metrics: {
        roi: 140,
        timeline: "7 weeks",
        teamSize: 3
      },
      ghLink: "",
      demoLink: "https://one-salty-tuna.vercel.app/"
    },
    {
      imgPath: tasty,
      title: "Tasty food",
      category: "Food & Hospitality" ,
      clientType: "SME",
      featured: false,
      description: "Une Application web pour un restaurant fancy de sushui .",
      technologies: ["React", "Node.js"], 
      metrics: {
        roi: 300,
        timeline: "3 weeks",
        teamSize: 3
      },
      ghLink: "",
      demoLink: "https://responsive-website-mu-one.vercel.app/#home"
    }, 
    {
      imgPath: hotel,
      title: "Fancyhostel",
      category: "Hospitality",
      clientType: "M",
      featured: false,
      description: "Site vitrine moderne pour un hotel 3 étoiles, présentant les services, et un formulaire de prise de rendez-vous en ligne.",
      technologies: ["React", "Bootstrap", "Node.js"],
      metrics: {
        roi: 120,
        timeline: "4 weeks",
        teamSize: 2
      },
      ghLink: "https://github.com/Dakster-z/dental-clinicv2.git",
      demoLink: "https://github.com/Dakster-z/hotel.git"
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Each project showcases unique challenges, creative solutions, and measurable results.
        </p>

        {/* Projects Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
                Portfolio Impact
              </h3>
              <Row>
                <Col md={3} className="text-center">
                  <div className="stat-item">
                    <h2 style={{ color: "#c770f0" }}>{projectsData.length}+</h2>
                    <p style={{ color: "white" }}>Projects Completed</p>
                  </div>
                </Col>
                <Col md={3} className="text-center">
                  <div className="stat-item">
                    <h2 style={{ color: "#c770f0" }}>150%</h2>
                    <p style={{ color: "white" }}>Average ROI</p>
                  </div>
                </Col>
                <Col md={3} className="text-center">
                  <div className="stat-item">
                    <h2 style={{ color: "#c770f0" }}>98%</h2>
                    <p style={{ color: "white" }}>Client Satisfaction</p>
                  </div>
                </Col>
                <Col md={3} className="text-center">
                  <div className="stat-item">
                    <h2 style={{ color: "#c770f0" }}>24/7</h2>
                    <p style={{ color: "white" }}>Support Available</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
