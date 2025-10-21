import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Button, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Particle from "../../shared/effects/Particle";
import { FaArrowLeft, FaExternalLinkAlt, FaClock, FaUsers, FaTrophy, FaLightbulb, FaCogs, FaRocket, FaChartLine } from "react-icons/fa";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import placeholderProject from "../../Assets/placeholder-project.svg";
import "./CaseStudy.css";

function CaseStudy() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  // Enhanced project data with detailed case study information
  const caseStudyData = {
    "1": {
      title: "E-Commerce Revolution Platform",
      subtitle: "Transforming Online Shopping Experience",
      category: "E-Commerce Development",
      client: "TechMart Solutions",
      duration: "6 months",
      team: "8 specialists",
      year: "2024",
      heroImage: placeholderProject,
      
      overview: {
        challenge: "TechMart Solutions needed a complete overhaul of their outdated e-commerce platform to compete in the modern digital marketplace. Their existing system had poor user experience, slow loading times, and limited mobile functionality.",
        solution: "We designed and developed a cutting-edge e-commerce platform with AI-powered recommendations, seamless mobile experience, and advanced analytics dashboard.",
        impact: "300% increase in conversion rates, 85% improvement in page load speeds, and 250% growth in mobile sales within 3 months of launch."
      },

      metrics: {
        roi: "450%",
        timeline: "6 months",
        teamSize: "8 people",
        satisfaction: "98%",
        performance: "+300%",
        users: "50K+ active"
      },

      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "AI/ML", "Docker", "Redis"],

      process: [
        {
          phase: "Discovery & Research",
          duration: "2 weeks",
          description: "Deep dive into user behavior, market analysis, and technical requirements",
          deliverables: ["User personas", "Market research", "Technical audit", "Competitive analysis"],
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        },
        {
          phase: "Strategy & Planning",
          duration: "1 week",
          description: "Creating comprehensive project roadmap and design system",
          deliverables: ["Project roadmap", "Design system", "Architecture plan", "Sprint planning"],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        },
        {
          phase: "Design & Prototyping",
          duration: "3 weeks",
          description: "Creating intuitive user interfaces and interactive prototypes",
          deliverables: ["Wireframes", "UI designs", "Interactive prototypes", "User testing"],
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        },
        {
          phase: "Development",
          duration: "16 weeks",
          description: "Building scalable, secure, and performant e-commerce platform",
          deliverables: ["Frontend development", "Backend APIs", "Database design", "Third-party integrations"],
          image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        },
        {
          phase: "Testing & Optimization",
          duration: "2 weeks",
          description: "Comprehensive testing and performance optimization",
          deliverables: ["Quality assurance", "Performance testing", "Security audit", "Bug fixes"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        },
        {
          phase: "Launch & Support",
          duration: "1 week",
          description: "Smooth deployment and ongoing support",
          deliverables: ["Production deployment", "Staff training", "Documentation", "Ongoing support"],
          image: "https://images.unsplash.com/photo-1����-1234567890?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        }
      ],

      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      ],

      testimonial: {
        quote: "The team delivered beyond our expectations. The new platform has revolutionized our business and customer experience.",
        author: "Sarah Johnson",
        position: "CEO, TechMart Solutions",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
      },

      results: [
        { metric: "Conversion Rate", before: "2.1%", after: "8.4%", improvement: "+300%" },
        { metric: "Page Load Speed", before: "4.2s", after: "0.8s", improvement: "+425%" },
        { metric: "Mobile Sales", before: "$50K/month", after: "$175K/month", improvement: "+250%" },
        { metric: "User Satisfaction", before: "3.2/5", after: "4.8/5", improvement: "+50%" }
      ],

      nextSteps: [
        "AI-powered chatbot integration",
        "Advanced analytics dashboard",
        "Multi-language support",
        "AR product visualization"
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
    <Container fluid className="case-study-section">
      <Particle />
      
      {/* Hero Section */}
      <div className="case-study-hero" style={{ backgroundImage: `url(${project.heroImage})` }}>
        <div className="hero-overlay">
          <Container>
            <Row>
              <Col md={12}>
                <Button 
                  variant="outline-light" 
                  className="back-btn mb-4"
                  onClick={() => navigate('/project')}
                >
                  <FaArrowLeft /> Back to Projects
                </Button>
                
                <div className="hero-content">
                  <Badge bg="primary" className="category-badge mb-3">
                    {project.category}
                  </Badge>
                  <h1 className="hero-title">{project.title}</h1>
                  <p className="hero-subtitle">{project.subtitle}</p>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <FaClock className="meta-icon" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="meta-item">
                      <FaUsers className="meta-icon" />
                      <span>{project.team}</span>
                    </div>
                    <div className="meta-item">
                      <FaTrophy className="meta-icon" />
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
        <Row className="overview-section">
          <Col md={12}>
            <h2 className="section-title">Project Overview</h2>
          </Col>
          <Col md={4}>
            <Card className="overview-card challenge-card">
              <Card.Body>
                <div className="card-icon">
                  <FaLightbulb />
                </div>
                <h4>Challenge</h4>
                <p>{project.overview.challenge}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="overview-card solution-card">
              <Card.Body>
                <div className="card-icon">
                  <FaCogs />
                </div>
                <h4>Solution</h4>
                <p>{project.overview.solution}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="overview-card impact-card">
              <Card.Body>
                <div className="card-icon">
                  <FaRocket />
                </div>
                <h4>Impact</h4>
                <p>{project.overview.impact}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Key Metrics */}
        <Row className="metrics-section">
          <Col md={12}>
            <h2 className="section-title">Key Metrics</h2>
          </Col>
          {Object.entries(project.metrics).map(([key, value], index) => (
            <Col md={2} key={index}>
              <div className="metric-card">
                <div className="metric-value">{value}</div>
                <div className="metric-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Technology Stack */}
        <Row className="tech-section">
          <Col md={12}>
            <h2 className="section-title">Technology Stack</h2>
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
            <h2 className="section-title">Our Creative Process</h2>
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
              Results & Impact
            </h2>
          </Col>
          {project.results.map((result, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="result-card">
                <Card.Body>
                  <h5>{result.metric}</h5>
                  <div className="result-comparison">
                    <div className="before">
                      <span className="label">Before</span>
                      <span className="value">{result.before}</span>
                    </div>
                    <BsArrowRight className="arrow" />
                    <div className="after">
                      <span className="label">After</span>
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
            <h2 className="section-title">Project Gallery</h2>
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

        {/* Client Testimonial */}
        <Row className="testimonial-section">
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
        </Row>

        {/* Next Steps */}
        <Row className="next-steps-section">
          <Col md={12}>
            <h2 className="section-title">Future Enhancements</h2>
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
        <Row className="cta-section">
          <Col md={12} className="text-center">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's create something amazing together</p>
            <Button 
              variant="primary" 
              size="lg" 
              className="cta-btn"
              onClick={() => navigate('/inquiry')}
            >
              Start Your Project <BsArrowRight />
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