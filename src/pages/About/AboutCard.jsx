import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <h2>A propos</h2>
        <p>
          Bonjour, je suis <span className="purple">Daksster</span>, developpeur full-stack specialise dans la creation d'experiences web et l'integration de solutions IA utiles.
        </p>
        <p>
          Depuis plus de 5 ans, je conçois des sites vitrines, applications web et parcours digitaux pour aider les marques a mieux presenter leur offre, gagner du temps et convertir plus clairement.
          Aujourd'hui, je mets un accent particulier sur l'automatisation, les integrations API et les usages concrets de l'IA.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          margin: "25px 0"
        }}>
          <div>
            <h3 style={{ color: "var(--accent)" }}>🎯 Expertise technique</h3>
            <ul>
              <li>Front-end : React, Next.js, JavaScript, Tailwind CSS</li>
              <li>Back-end : Node.js, Python, Express, API REST</li>
              <li>Base de donnees : MongoDB, PostgreSQL, Redis</li>
              <li>IA : OpenAI API, automatisation, assistants conversationnels</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: "var(--accent)" }}>🚀 Ce que je conçois</h3>
            <ul>
              <li>Applications web enrichies par l'IA</li>
              <li>Outils d'automatisation business</li>
              <li>Experiences e-commerce orientees conversion</li>
              <li>Dashboards et interfaces metier sur mesure</li>
            </ul>
          </div>
        </div>
        <p>
          Je privilegie les projets utiles, credibles et bien executes. Chaque mission vise une experience plus fluide, une communication plus claire et une base technique evolutive.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
