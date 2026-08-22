import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge, ProgressBar } from 'react-bootstrap';
import { FaCode, FaPalette, FaServer, FaDatabase } from 'react-icons/fa';
import './Skills.css';
import styles from './Skills.module.css';

import SEO from '../../shared/seo/SEO';
function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const skillCategories = [
    {
      id: 1,
      title: "Developpement front-end",
      icon: <FaCode />,
      color: "#61dafb",
      skills: [
        { name: "React.js", level: 95, experience: "3+ years", projects: 15 },
        { name: "JavaScript/ES6+", level: 90, experience: "4+ years", projects: 20 },
        { name: "HTML5/CSS3", level: 95, experience: "5+ years", projects: 25 },
        { name: "Bootstrap/Tailwind", level: 85, experience: "2+ years", projects: 12 },
        { name: "TypeScript", level: 80, experience: "2+ years", projects: 8 }
      ],
      description: "Interfaces responsives et interactives avec des frameworks modernes et une attention particuliere a l'experience utilisateur."
    },
    {
      id: 2,
      title: "Developpement back-end",
      icon: <FaServer />,
      color: "#68d391",
      skills: [
        { name: "Node.js", level: 85, experience: "3+ years", projects: 12 },
        { name: "Express.js", level: 80, experience: "2+ years", projects: 10 },
        { name: "Python", level: 75, experience: "2+ years", projects: 8 },
        { name: "RESTful APIs", level: 90, experience: "3+ years", projects: 15 },
        { name: "GraphQL", level: 70, experience: "1+ year", projects: 5 }
      ],
      description: "Applications serveur evolutives, integrations API et bases solides pour des parcours fiables."
    },
    {
      id: 3,
      title: "Base de donnees & cloud",
      icon: <FaDatabase />,
      color: "#f6ad55",
      skills: [
        { name: "MongoDB", level: 85, experience: "2+ years", projects: 10 },
        { name: "PostgreSQL", level: 80, experience: "2+ years", projects: 8 },
        { name: "AWS Services", level: 75, experience: "1+ year", projects: 6 },
        { name: "Firebase", level: 85, experience: "2+ years", projects: 12 },
        { name: "Docker", level: 70, experience: "1+ year", projects: 4 }
      ],
      description: "Stockage de donnees, deploiement cloud et architecture technique orientee performance."
    },
    {
      id: 4,
      title: "Design & UX",
      icon: <FaPalette />,
      color: "#ed64a6",
      skills: [
        { name: "UI/UX Design", level: 80, experience: "3+ years", projects: 18 },
        { name: "Figma", level: 85, experience: "2+ years", projects: 15 },
        { name: "Adobe Creative Suite", level: 75, experience: "3+ years", projects: 20 },
        { name: "Responsive Design", level: 95, experience: "4+ years", projects: 25 },
        { name: "User Research", level: 70, experience: "2+ years", projects: 10 }
      ],
      description: "Interfaces claires, hierarchie visuelle forte et approche centree utilisateur."
    }
  ];

  const handleSkillClick = (category) => {
    setSelectedSkill(category);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedSkill(null);
  };

  return (
  <React.Fragment>
    <SEO title="Competences – Portfolio" description="Vue d'ensemble des competences techniques, outils et expertises." />
    <Container fluid className={styles.skillsSection}>
      <Container className={styles.sectionContainer}>
        <Row>
          <Col md={12} className="text-center">
            <h1 className={styles.skillsHeading}>
               Mes <strong className="purple">competences</strong>
             </h1>
            <p className={styles.skillsDescription}>
               Une vue d'ensemble de mes expertises techniques en developpement, design d'interface et automatisation.
             </p>
          </Col>
        </Row>

        {/* Skill Categories */}
        <Row className={styles.skillsCategories}>
          {skillCategories.map((category) => (
            <Col md={6} lg={3} key={category.id} className={styles.skillCategory}>
              <Card 
                className={styles.skillCard} 
                onClick={() => handleSkillClick(category)}
                style={{ borderColor: category.color }}
              >
                <Card.Body className="text-center d-flex flex-column">
                  <div 
                    className={styles.skillIcon} 
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h4 className={styles.skillTitle}>{category.title}</h4>
                  <p className={styles.skillDescription}>{category.description}</p>
                  <Badge 
                    className={`${styles.skillCount} mt-auto`}
                    style={{ backgroundColor: category.color }}
                  >
                    {category.skills.length} competences
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Skill Detail Modal */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        size="lg" 
        centered
        contentClassName={styles.modalContent}
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>
            {selectedSkill && (
              <React.Fragment>
                <span style={{ color: selectedSkill.color }}>
                  {selectedSkill.icon}
                </span>
                {' '}{selectedSkill.title}
              </React.Fragment>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          {selectedSkill && (
            <React.Fragment>
              <p className="mb-4">{selectedSkill.description}</p>
              <Row>
                {selectedSkill.skills.map((skill, index) => (
                  <Col md={12} key={index} className={`${styles.skillDetail} mb-3`}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className={`${styles.skillName} mb-0`}>{skill.name}</h6>
                      <div className={styles.skillMeta}>
                        <Badge variant="outline-info" className="me-2">
                          {skill.experience}
                        </Badge>
                        <Badge variant="outline-success">
                          {skill.projects} projets
                        </Badge>
                      </div>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      label={`${skill.level}%`}
                      variant="info"
                      className={styles.skillProgress}
                    />
                  </Col>
                ))}
              </Row>
            </React.Fragment>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </React.Fragment>
  );
}

export default Skills;
