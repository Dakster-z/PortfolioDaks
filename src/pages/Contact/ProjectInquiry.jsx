import { useState } from "react";
import { EMAILJS, isEmailJsConfigured, whatsappLink } from "../../shared/config/env";
import { Container, Row, Col, Form, Button, Card, Alert, Badge, ProgressBar } from "react-bootstrap";
import Particle from "../../shared/effects/Particle";
import { FaUser, FaEnvelope, FaPhone, FaProjectDiagram, FaPalette, FaCalendarAlt, FaLightbulb, FaCheckCircle } from "react-icons/fa";
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
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const projectTypes = [
    "Site web vitrine ou sur mesure",
    "Application mobile",
    "Identite visuelle & logo",
    "Campagne marketing digitale",
    "Plateforme e-commerce",
    "UI/UX Design",
    "Experience AR/VR",
    "Integration IA",
    "Autre"
  ];

  const designStyles = [
    "Moderne & minimaliste",
    "Audacieux & creatif",
    "Professionnel & corporate",
    "Ludique & accessible",
    "Elegant & premium",
    "Contemporain",
    "Classique & intemporel",
    "Style sur mesure"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "A definir ensemble"
  ];

  const timelineOptions = [
    "ASAP (projet urgent)",
    "1-2 months",
    "3-4 months",
    "5-6 months",
    "6+ months",
    "Flexible"
  ];

  const projectGoals = [
    "Renforcer la notoriete",
    "Generer plus de leads",
    "Ameliorer l'experience utilisateur",
    "Augmenter les ventes en ligne",
    "Moderniser l'image de marque",
    "Toucher un nouveau marche",
    "Gagner en efficacite",
    "Autre"
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
      setAlertMessage("Merci de remplir les champs obligatoires avant de continuer.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        position: formData.position,
        project_type: formData.projectType,
        project_title: formData.projectTitle,
        project_description: formData.projectDescription,
        target_audience: formData.targetAudience,
        goals: formData.goals.join(", "),
        design_style: formData.designStyle,
        color_preferences: formData.colorPreferences,
        brand_guidelines: formData.brandGuidelines,
        inspiration: formData.inspiration,
        timeline: formData.timeline,
        budget: formData.budget,
        launch_date: formData.launchDate,
        priority: formData.priority,
        additional_requirements: formData.additionalRequirements,
        communication_preference: formData.communicationPreference,
        hear_about_us: formData.hearAboutUs,
      };
      if (!isEmailJsConfigured) {
        const whatsappMessage = [
          "Bonjour! Je souhaite vous envoyer un brief de projet.",
          `Nom: ${formData.name || "-"}`,
          `Email: ${formData.email || "-"}`,
          `Entreprise: ${formData.company || "-"}`,
          `Type de projet: ${formData.projectType || "-"}`,
          `Titre: ${formData.projectTitle || "-"}`,
          `Description: ${formData.projectDescription || "-"}`,
          `Timeline: ${formData.timeline || "-"}`,
          `Budget: ${formData.budget || "-"}`,
        ].join("\n");
        const fallbackLink = whatsappLink(whatsappMessage);
        if (!fallbackLink) {
          throw new Error("No contact fallback configured");
        }
        window.open(fallbackLink, "_blank", "noopener,noreferrer");
        setAlertType("success");
        setAlertMessage("L'envoi par email n'est pas encore configure ici. Votre demande a ete redirigee vers WhatsApp.");
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
        return;
      }
      const payload = {
        service_id: EMAILJS.serviceId,
        template_id: EMAILJS.templateId,
        user_id: EMAILJS.publicKey,
        template_params: templateParams,
      };
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setAlertType("success");
      setAlertMessage("Merci ! Votre demande de projet a bien ete envoyee. Je reviens vers vous rapidement.");
      setShowAlert(true);
      setFormData({
        name: "", email: "", phone: "", company: "", position: "",
        projectType: "", projectTitle: "", projectDescription: "", targetAudience: "", goals: [],
        designStyle: "", colorPreferences: "", brandGuidelines: "", inspiration: "",
        timeline: "", budget: "", launchDate: "", priority: "",
        additionalRequirements: "", files: [], communicationPreference: "", hearAboutUs: ""
      });
      setCurrentStep(1);
      setTimeout(() => setShowAlert(false), 5000);
    } catch (err) {
      setAlertType("danger");
      setAlertMessage("Une erreur s'est produite. Merci de reessayer ou de me contacter directement.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaUser className="step-icon" />
              Informations de contact
            </h3>
            <p className="step-description">Commencons par vos informations essentielles.</p>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nom complet *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
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
                  <Form.Label>Telephone</Form.Label>
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
                  <Form.Label>Entreprise / organisation *</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
                  <Form.Label>Votre fonction</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                    placeholder="Ex. : gerant, CEO, responsable marketing"
              />
            </Form.Group>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaProjectDiagram className="step-icon" />
              Details du projet
            </h3>
            <p className="step-description">Parlez-moi de votre projet.</p>
            
            <Form.Group className="mb-3">
              <Form.Label>Type de projet *</Form.Label>
              <Form.Select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
              >
                <option value="">Selectionnez un type de projet</option>
                {projectTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Titre du projet *</Form.Label>
              <Form.Control
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleInputChange}
                placeholder="Donnez un nom a votre projet"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Description du projet *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="Decrivez votre projet et vos objectifs."
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Cible principale</Form.Label>
              <Form.Control
                type="text"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                placeholder="Ex. : professionnels, familles, B2B, clients locaux"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Objectifs du projet (plusieurs choix possibles)</Form.Label>
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
              Direction creative
            </h3>
            <p className="step-description">Aidez-moi a comprendre votre univers visuel.</p>
            
            <Form.Group className="mb-3">
              <Form.Label>Style souhaite *</Form.Label>
              <Form.Select
                name="designStyle"
                value={formData.designStyle}
                onChange={handleInputChange}
                required
              >
                <option value="">Selectionnez un style</option>
                {designStyles.map((style, index) => (
                  <option key={index} value={style}>{style}</option>
                ))}
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Preferences couleurs</Form.Label>
              <Form.Control
                type="text"
                name="colorPreferences"
                value={formData.colorPreferences}
                onChange={handleInputChange}
                placeholder="Ex. : noir et blanc, couleurs chaudes, couleurs de marque"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Charte ou elements existants</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="brandGuidelines"
                value={formData.brandGuidelines}
                onChange={handleInputChange}
                placeholder="Logo, references, charte graphique ou contraintes de marque"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Inspirations & references</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="inspiration"
                value={formData.inspiration}
                onChange={handleInputChange}
                placeholder="Sites, interfaces ou references que vous aimez"
              />
            </Form.Group>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaCalendarAlt className="step-icon" />
              Planning & budget
            </h3>
            <p className="step-description">Parlons delais et budget.</p>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Delai souhaite *</Form.Label>
                  <Form.Select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selectionnez un delai</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Budget estimatif *</Form.Label>
                  <Form.Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selectionnez une fourchette</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Date de lancement souhaitee</Form.Label>
              <Form.Control
                type="date"
                name="launchDate"
                value={formData.launchDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Priorite du projet</Form.Label>
              <Form.Select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="">Selectionnez un niveau</option>
                <option value="Low">Faible - projet a preparer</option>
                <option value="Medium">Moyenne - delai standard</option>
                <option value="High">Haute - projet important</option>
                <option value="Urgent">Urgente - lancement rapide</option>
              </Form.Select>
            </Form.Group>
          </div>
        );

      case 5:
        return (
          <div className="step-content">
            <h3 className="step-title">
              <FaLightbulb className="step-icon" />
              Informations complementaires
            </h3>
            <p className="step-description">Ajoutez tout element utile pour cadrer le projet.</p>
            
            <Form.Group className="mb-3">
              <Form.Label>Besoins complementaires</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleInputChange}
                placeholder="Fonctionnalites, contraintes, questions ou besoins specifiques"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Fichiers joints</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
              />
              <Form.Text className="text-muted">
                Ajoutez si besoin vos logos, documents, captures ou inspirations.
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
                  <Form.Label>Canal prefere</Form.Label>
                  <Form.Select
                    name="communicationPreference"
                    value={formData.communicationPreference}
                    onChange={handleInputChange}
                  >
                    <option value="">Selectionnez un canal</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Telephone</option>
                    <option value="Video">Visio</option>
                    <option value="In-person">Rendez-vous sur place</option>
                    <option value="Slack">Slack/Teams</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Comment m'avez-vous connu ?</Form.Label>
                  <Form.Control
                    type="text"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    placeholder="Google, recommandation, reseaux sociaux, etc."
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
              Parlons de votre <strong className="purple">projet</strong>
            </h1>
            <p className="inquiry-subtitle">
              Partagez votre besoin, votre contexte et vos objectifs pour demarrer sur des bases claires.
            </p>
            {!isEmailJsConfigured && (
              <Alert variant="info" className="mt-3">
                L'envoi par email n'est pas encore configure ici. Le formulaire basculera vers WhatsApp pour finaliser votre demande.
              </Alert>
            )}
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
                    <span className="progress-text">Etape {currentStep} sur {totalSteps}</span>
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
                        <BsArrowLeft /> Precedent
                      </Button>
                    )}
                    
                    {currentStep < totalSteps ? (
                      <Button 
                        variant="primary" 
                        onClick={nextStep}
                        className="nav-btn next-btn ms-auto"
                      >
                        Suivant <BsArrowRight />
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        variant="success"
                        className="nav-btn submit-btn ms-auto"
                        disabled={submitting}
                      >
                        Envoyer la demande <FaCheckCircle />
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
              <h3>Besoin d'aide ?</h3>
              <p>Vous pouvez aussi me contacter directement pour discuter de votre besoin.</p>
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
