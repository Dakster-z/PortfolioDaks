import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsEye, BsAward, BsGraphUp, BsClock } from "react-icons/bs";
import { FaUsers, FaRocket, FaPalette } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectCards.module.css";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleCaseStudyClick = () => {
    navigate(`/case-study/${props.projectId || 1}`);
  };

  return (
    <>
      <Card className={`project-card-view ${styles.enhancedCard}`}>
        <div className={styles.cardImageContainer}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" loading="lazy" decoding="async" />
          <div className={styles.cardOverlay}>
            <Button 
              variant="outline-light" 
              className={styles.overlayBtn}
              onClick={handleShow}
            >
              <BsEye /> View Details
            </Button>
          </div>
          {props.category && (
            <Badge bg="primary" className={styles.categoryBadge}>
              {props.category}
            </Badge>
          )}
          {props.featured && (
            <Badge bg="warning" text="dark" className={styles.featuredBadge}>
              <BsAward /> Featured
            </Badge>
          )}
        </div>
        
        <Card.Body>
          <div className={styles.projectHeader}>
            <Card.Title>{props.title}</Card.Title>
            {props.clientType && (
              <Badge bg="secondary" className={styles.clientTypeBadge}>
                {props.clientType}
              </Badge>
            )}
          </div>
          
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          {/* Project Metrics */}
          {props.metrics && (
            <div className={styles.projectMetrics}>
              {props.metrics.roi && (
                <div className={styles.metricItem}>
                  <BsGraphUp className={styles.metricIcon} />
                  <span>+{props.metrics.roi}% ROI</span>
                </div>
              )}
              {props.metrics.timeline && (
                <div className={styles.metricItem}>
                  <BsClock className={styles.metricIcon} />
                  <span>{props.metrics.timeline}</span>
                </div>
              )}
              {props.metrics.teamSize && (
                <div className={styles.metricItem}>
                  <FaUsers className={styles.metricIcon} />
                  <span>{props.metrics.teamSize} Team</span>
                </div>
              )}
            </div>
          )}

          {/* Technology Stack */}
          {props.technologies && (
            <div className={styles.techStack}>
              {props.technologies.map((tech, index) => (
                <Badge key={index} bg="info" className={styles.techBadge}>
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          <div className={styles.cardActions}>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="success"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                Live Demo
              </Button>
            )}

            {props.beforeAfter && (
              <Button
                variant="outline-primary"
                onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                style={{ marginLeft: "10px" }}
              >
                <FaPalette /> &nbsp;
                Before/After
              </Button>
            )}
          </div>

          {/* Before/After Section */}
          {showBeforeAfter && props.beforeAfter && (
            <div className={styles.beforeAfterSection}>
              <div className={styles.beforeAfterContainer}>
                <div className={styles.beforeSection}>
                  <h6>Before</h6>
                  <img src={props.beforeAfter.before} alt="Before" className={styles.beforeAfterImg} loading="lazy" decoding="async" />
                </div>
                <div className={styles.afterSection}>
                  <h6>After</h6>
                  <img src={props.beforeAfter.after} alt="After" className={styles.beforeAfterImg} loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Detailed Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Image Gallery */}
          {props.gallery && props.gallery.length > 0 && (
            <Carousel className={styles.projectGallery}>
              {props.gallery.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                  {image.caption && (
                    <Carousel.Caption>
                      <p>{image.caption}</p>
                    </Carousel.Caption>
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          )}

          {/* Project Details */}
          <div className={styles.projectDetails}>
            <h5>Project Overview</h5>
            <p>{props.detailedDescription || props.description}</p>

            {/* Challenge & Solution */}
            {props.challenge && (
              <div className={styles.challengeSolution}>
                <h6>Challenge</h6>
                <p>{props.challenge}</p>
                
                {props.solution && (
                  <>
                    <h6>Solution</h6>
                    <p>{props.solution}</p>
                  </>
                )}
              </div>
            )}

            {/* Process Steps */}
            {props.process && (
              <div className={styles.processSection}>
                <h6>Creative Process</h6>
                <div className={styles.processSteps}>
                  {props.process.map((step, index) => (
                    <div key={index} className={styles.processStep}>
                      <div className={styles.stepNumber}>{index + 1}</div>
                      <div className={styles.stepContent}>
                        <h6>{step.title}</h6>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results & Impact */}
            {props.results && (
              <div className={styles.resultsSection}>
                <h6>Results & Impact</h6>
                <div className={styles.resultsGrid}>
                  {props.results.map((result, index) => (
                    <div key={index} className={styles.resultItem}>
                      <div className={styles.resultValue}>{result.value}</div>
                      <div className={styles.resultLabel}>{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {props.ghLink && (
            <Button variant="outline-primary" href={props.ghLink} target="_blank">
              <BsGithub /> View Code
            </Button>
          )}
          {props.demoLink && (
            <Button 
              variant="primary" 
              onClick={handleCaseStudyClick}
            >
              <FaRocket /> View Case Study
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;
