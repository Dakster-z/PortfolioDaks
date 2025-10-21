import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert, Badge, ProgressBar } from "react-bootstrap";
import Particle from "../../shared/effects/Particle";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaProjectDiagram, FaPalette, FaCalendarAlt, FaDollarSign, FaLightbulb, FaFileUpload, FaCheckCircle } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./ProjectInquiry.css";

function ProjectInquiry() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Contact Information
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    
    // Step 2: Project Details
    projectType: "",
    projectTitle: "",
    projectDescription: "",
    targetAudience: "",
    goals: [],
    
    // Step 3: Creative Requirements
    designStyle: "",
    colorPreferences: "",
    brandGuidelines: "",
    inspiration: "",
    
    // Step 4: Timeline & Budget
    timeline: "",
    budget: "",
    launchDate: "",
    priority: "",
    
    // Step 5: Additional Information
    additionalRequirements: "",
    files: [],
    communicationPreference: "",
    hearAboutUs: ""
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const projectTypes = [
    "Website Design & Development",
    "Mobile App Development",
    "Brand Identity & Logo Design",
    "Digital Marketing Campaign",
    "E-commerce Platform",
    "UI/UX Design",
    "AR/VR Experience",
    "AI Integration",
    "Other"
  ];

  const designStyles = [
    "Modern & Minimalist",
    "Bold & Creative",
    "Professional & Corporate",
    "Playful & Fun",
    "Elegant & Sophisticated",
    "Trendy & Contemporary",
    "Classic & Timeless",
    "Custom Style"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Let's discuss"
  ];

  const timelineOptions = [
    "ASAP (Rush project)",
    "1-2 months",
    "3-4 months",
    "5-6 months",
    "6+ months",
    "Flexible"
  ];

  const projectGoals = [
    "Increase brand awareness",
    "Generate more leads",
    "Improve user experience",
    "Boost online sales",
    "Modernize brand image",
    "Enter new market",
    "Improve efficiency",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      if (name === "goals") {
        setFormData(prev => ({
          ...prev,
          goals: checked 
            ? [...prev.goals, value]
            : prev.goals.filter(goal => goal !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.company;
      case 2:
        return formData.projectType && formData.projectTitle && formData.projectDescription;
      case 3:
        return formData.designStyle;
      case 4:
        return formData.timeline && formData.budget;
      case 5:
        return true; // Optional step
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      setAlertType("warning");
      setAlertMessage("Please fill in all required fields before proceeding.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setAlertType("success");
    setAlertMessage("Thank you! Your project inquiry has been submitted successfully. We'll get back to you within 24 hours.");
    setShowAlert(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: "", email: "", phone: "", company: "", position: "",
        projectType: "", projectTitle: "", projectDescription: "", targetAudience: "", goals: [],
        designStyle: "", colorPreferences: "", brandGuidelines: "", inspiration: "",
        timeline: "", budget: "", launchDate: "", priority: "",
        additionalRequirements: "", files: [], communicationPreference: "", hearAboutUs: ""
      });
      setCurrentStep(1);
      setShowAlert(false);
    }, 5000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaUser className="step-icon" />
              Contact Information
            </h3>
            <p className="step-description">Let's start with your basic information</p>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Company/Organization *</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Your Position/Role</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="e.g., Marketing Manager, CEO, Founder"
              />
            </Form.Group>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaProjectDiagram className="step-icon" />
              Project Details
            </h3>
            <p className="step-description">Tell us about your project</p>
            
            <Form.Group className="mb-3">
              <Form.Label>Project Type *</Form.Label>
              <Form.Select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select project type</option>
                {projectTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Project Title *</Form.Label>
              <Form.Control
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleInputChange}
                placeholder="Give your project a name"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Project Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="Describe your project in detail. What do you want to achieve?"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Target Audience</Form.Label>
              <Form.Control
                type="text"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                placeholder="Who is your target audience? (e.g., young professionals, families, businesses)"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Project Goals (Select all that apply)</Form.Label>
              <div className="checkbox-group">
                {projectGoals.map((goal, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    name="goals"
                    value={goal}
                    label={goal}
                    checked={formData.goals.includes(goal)}
                    onChange={handleInputChange}
                    className="mb-2"
                  />
                ))}
              </div>
            </Form.Group>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaPalette className="step-icon" />
              Creative Requirements
            </h3>
            <p className="step-description">Help us understand your creative vision</p>
            
            <Form.Group className="mb-3">
              <Form.Label>Preferred Design Style *</Form.Label>
              <Form.Select
                name="designStyle"
                value={formData.designStyle}
                onChange={handleInputChange}
                required
              >
                <option value="">Select design style</option>
                {designStyles.map((style, index) => (
                  <option key={index} value={style}>{style}</option>
                ))}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Color Preferences</Form.Label>
              <Form.Control
                type="text"
                name="colorPreferences"
                value={formData.colorPreferences}
                onChange={handleInputChange}
                placeholder="e.g., Blue and white, warm colors, brand colors"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Existing Brand Guidelines</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="brandGuidelines"
                value={formData.brandGuidelines}
                onChange={handleInputChange}
                placeholder="Do you have existing brand guidelines, logos, or style guides we should follow?"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Inspiration & References</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="inspiration"
                value={formData.inspiration}
                onChange={handleInputChange}
                placeholder="Share any websites, designs, or references that inspire you"
              />
            </Form.Group>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaCalendarAlt className="step-icon" />
              Timeline & Budget
            </h3>
            <p className="step-description">Let's discuss timing and investment</p>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Timeline *</Form.Label>
                  <Form.Select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Budget Range *</Form.Label>
                  <Form.Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Desired Launch Date</Form.Label>
              <Form.Control
                type="date"
                name="launchDate"
                value={formData.launchDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Project Priority</Form.Label>
              <Form.Select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="">Select priority level</option>
                <option value="Low">Low - We have time to plan</option>
                <option value="Medium">Medium - Standard timeline</option>
                <option value="High">High - Important project</option>
                <option value="Urgent">Urgent - Need to start ASAP</option>
              </Form.Select>
            </Form.Group>
          </div>
        );

      case 5:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaLightbulb className="step-icon" />
              Additional Information
            </h3>
            <p className="step-description">Any additional details or files</p>
            
            <Form.Group className="mb-3">
              <Form.Label>Additional Requirements</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleInputChange}
                placeholder="Any specific requirements, features, or concerns we should know about?"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>File Attachments</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
              />
              <Form.Text className="text-muted">
                Upload any relevant files (logos, documents, images, etc.)
              </Form.Text>
              {formData.files.length > 0 && (
                <div className="uploaded-files mt-2">
                  {formData.files.map((file, index) => (
                    <Badge key={index} bg="secondary" className="me-2 mb-2">
                      {file.name}
                      <Button
                        variant="link"
                        size="sm"
                        className="text-white ms-1 p-0"
                        onClick={() => removeFile(index)}
                      >
                        ×
                      </Button>
                    </Badge>
                  ))}
                </div>
              )}
            </Form.Group>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Preferred Communication</Form.Label>
                  <Form.Select
                    name="communicationPreference"
                    value={formData.communicationPreference}
                    onChange={handleInputChange}
                  >
                    <option value="">Select preference</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone calls</option>
                    <option value="Video">Video calls</option>
                    <option value="In-person">In-person meetings</option>
                    <option value="Slack">Slack/Teams</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>How did you hear about us?</Form.Label>
                  <Form.Control
                    type="text"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    placeholder="Google, referral, social media, etc."
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Container fluid className="inquiry-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="inquiry-heading">
              Start Your <strong className="purple">Project</strong>
            </h1>
            <p className="inquiry-subtitle">
              Let's bring your creative vision to life. Fill out our comprehensive brief to get started.
            </p>
          </Col>
        </Row>

        {showAlert && (
          <Row>
            <Col md={12}>
              <Alert variant={alertType} className="custom-alert">
                {alertType === "success" && <FaCheckCircle className="me-2" />}
                {alertMessage}
              </Alert>
            </Col>
          </Row>
        )}

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="inquiry-card">
              <Card.Body>
                {/* Progress Bar */}
                <div className="progress-section mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="progress-text">Step {currentStep} of {totalSteps}</span>
                    <span className="progress-percentage">{Math.round(progressPercentage)}%</span>
                  </div>
                  <ProgressBar 
                    now={progressPercentage} 
                    className="custom-progress"
                    variant="info"
                  />
                </div>

                <Form onSubmit={handleSubmit}>
                  {renderStepContent()}

                  {/* Navigation Buttons */}
                  <div className="step-navigation">
                    {currentStep > 1 && (
                      <Button 
                        variant="outline-secondary" 
                        onClick={prevStep}
                        className="nav-btn prev-btn"
                      >
                        <BsArrowLeft /> Previous
                      </Button>
                    )}
                    
                    {currentStep < totalSteps ? (
                      <Button 
                        variant="primary" 
                        onClick={nextStep}
                        className="nav-btn next-btn ms-auto"
                      >
                        Next <BsArrowRight />
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        variant="success"
                        className="nav-btn submit-btn ms-auto"
                      >
                        Submit Project Brief <FaCheckCircle />
                      </Button>
                    )}
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Information */}
        <Row className="contact-info-section">
          <Col md={12}>
            <div className="contact-info">
              <h3>Need Help?</h3>
              <p>Our team is here to assist you with your project inquiry.</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <FaEnvelope className="contact-icon" />
                  <span>hello@creativeagency.com</span>
                </div>
                <div className="contact-method">
                  <FaPhone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectInquiry;