import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge, ProgressBar } from 'react-bootstrap';
import { FaCode, FaPalette, FaMobile, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaCode />,
      color: "#61dafb",
      skills: [
        { name: "React.js", level: 95, experience: "3+ years", projects: 15 },
        { name: "JavaScript/ES6+", level: 90, experience: "4+ years", projects: 20 },
        { name: "HTML5/CSS3", level: 95, experience: "5+ years", projects: 25 },
        { name: "Bootstrap/Tailwind", level: 85, experience: "2+ years", projects: 12 },
        { name: "TypeScript", level: 80, experience: "2+ years", projects: 8 }
      ],
      description: "Creating responsive, interactive user interfaces with modern frameworks and best practices."
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <FaServer />,
      color: "#68d391",
      skills: [
        { name: "Node.js", level: 85, experience: "3+ years", projects: 12 },
        { name: "Express.js", level: 80, experience: "2+ years", projects: 10 },
        { name: "Python", level: 75, experience: "2+ years", projects: 8 },
        { name: "RESTful APIs", level: 90, experience: "3+ years", projects: 15 },
        { name: "GraphQL", level: 70, experience: "1+ year", projects: 5 }
      ],
      description: "Building scalable server-side applications and robust API architectures."
    },
    {
      id: 3,
      title: "Database & Cloud",
      icon: <FaDatabase />,
      color: "#f6ad55",
      skills: [
        { name: "MongoDB", level: 85, experience: "2+ years", projects: 10 },
        { name: "PostgreSQL", level: 80, experience: "2+ years", projects: 8 },
        { name: "AWS Services", level: 75, experience: "1+ year", projects: 6 },
        { name: "Firebase", level: 85, experience: "2+ years", projects: 12 },
        { name: "Docker", level: 70, experience: "1+ year", projects: 4 }
      ],
      description: "Managing data storage solutions and cloud infrastructure deployment."
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
      description: "Creating intuitive user experiences with modern design principles and user-centered approach."
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
    <Container fluid className="skills-section">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 className="skills-heading">
              My <strong className="purple">Expertise</strong>
            </h1>
            <p className="skills-description">
              A comprehensive overview of my technical skills, experience, and capabilities as a full-stack developer and designer.
            </p>
          </Col>
        </Row>

        {/* Skill Categories */}
        <Row className="skills-categories">
          {skillCategories.map((category) => (
            <Col md={6} lg={3} key={category.id} className="skill-category">
              <Card 
                className="skill-card" 
                onClick={() => handleSkillClick(category)}
                style={{ borderColor: category.color }}
              >
                <Card.Body className="text-center d-flex flex-column">
                  <div 
                    className="skill-icon" 
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h4 className="skill-title">{category.title}</h4>
                  <p className="skill-description">{category.description}</p>
                  <Badge 
                    className="skill-count mt-auto"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.skills.length} Skills
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Skill Detail Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedSkill && (
              <>
                <span style={{ color: selectedSkill.color }}>
                  {selectedSkill.icon}
                </span>
                {' '}{selectedSkill.title}
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSkill && (
            <>
              <p className="mb-4">{selectedSkill.description}</p>
              <Row>
                {selectedSkill.skills.map((skill, index) => (
                  <Col md={12} key={index} className="skill-detail mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="skill-name mb-0">{skill.name}</h6>
                      <div className="skill-meta">
                        <Badge variant="outline-info" className="me-2">
                          {skill.experience}
                        </Badge>
                        <Badge variant="outline-success">
                          {skill.projects} projects
                        </Badge>
                      </div>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      label={`${skill.level}%`}
                      variant="info"
                      className="skill-progress"
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Skills;