import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <h2>About Me</h2>
        <p>
          Hi, I'm <span className="purple">Daksster</span> - a full-stack developer who specializes in integrating AI capabilities into web applications.
        </p>
        <p>
          Over the past 5 years, I've built everything from simple websites to complex web applications.
          Recently, I've been focusing on AI integration - building tools that demonstrate how artificial
          intelligence can enhance user experiences and automate business processes.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          margin: "25px 0"
        }}>
          <div>
            <h3 style={{ color: "var(--accent)" }}>🎯 Technical Expertise</h3>
            <ul>
              <li>Frontend: React, Next.js, JavaScript, Tailwind CSS</li>
              <li>Backend: Node.js, Python, Express, REST APIs</li>
              <li>Database: MongoDB, PostgreSQL, Redis</li>
              <li>AI: OpenAI API, ChatGPT integration, Automation</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: "var(--accent)" }}>🚀 What I Build</h3>
            <ul>
              <li>AI-enhanced web applications</li>
              <li>Business automation tools</li>
              <li>E-commerce solutions</li>
              <li>Custom dashboards and analytics</li>
            </ul>
          </div>
        </div>
        <p>
          I'm passionate about building tools that solve real problems and make businesses more efficient.
          Every project I work on focuses on delivering measurable value and exceptional user experience.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;