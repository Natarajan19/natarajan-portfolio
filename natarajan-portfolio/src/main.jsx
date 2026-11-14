import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  "Python", "React", "Machine Learning", "Deep Learning",
  "Computer Vision", "Generative AI", "Agentic AI", "RAG",
  "YOLO", "MongoDB", "Vector Databases"
];

const projects = [
  {
    number: "01",
    name: "SONOGRAPHY XZY",
    type: "AI-assisted ultrasound image analysis",
    description: "A computer-vision project focused on identifying fetal ultrasound planes to support sonography workflows.",
    tags: ["YOLO", "Computer Vision", "Healthcare AI"],
    featured: true
  },
  {
    number: "02",
    name: "Accident Detection System",
    type: "Computer vision and alerting",
    description: "A camera-based concept for detecting road accidents and triggering an alert workflow.",
    tags: ["YOLO", "Python", "Computer Vision"]
  },
  {
    number: "03",
    name: "Location-Based Reminder",
    type: "Geolocation web application",
    description: "A location-aware reminder application using map-based proximity features and a database-backed workflow.",
    tags: ["React", "MongoDB", "Maps"]
  }
];

function App() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home">N<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a><a href="#skills">Skills</a>
          <a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let's connect <span>↗</span></a>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><i></i> OPEN TO LEARNING & OPPORTUNITIES</div>
          <h1>Hi, I'm <span>Natarajan.</span></h1>
          <h2>Building thoughtful solutions with <em>AI & technology.</em></h2>
          <p className="intro">AI & Machine Learning student interested in Generative AI, Agentic AI, RAG and Computer Vision. I enjoy turning ideas into practical, useful applications.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <span>↘</span></a>
            <a className="button secondary" href="#contact">Contact me</a>
          </div>
          <div className="hero-meta"><span>📍 India</span><span>🎓 Sri Sairam Engineering College</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract AI-inspired graphic">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="core"><span>N</span><small>AI / ML</small></div>
          <div className="float-card card-a">✦ Generative AI</div>
          <div className="float-card card-b">⌘ Computer Vision</div>
          <div className="float-card card-c">◈ Agentic AI</div>
          <div className="spark s1"></div><div className="spark s2"></div><div className="spark s3"></div>
        </div>
      </section>

      <section className="ticker"><div className="ticker-inner">ARTIFICIAL INTELLIGENCE <b>✳</b> MACHINE LEARNING <b>✳</b> GENERATIVE AI <b>✳</b> COMPUTER VISION <b>✳</b> AGENTIC AI</div></section>

      <section className="section wrap" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <h2>Curious by nature.<br/><span>Driven by building.</span></h2>
          <div><p className="large-copy">I'm an AI & Machine Learning student at Sri Sairam Engineering College, exploring how intelligent systems can solve real-world problems.</p><p className="muted">My interests include computer vision, Generative AI, retrieval-augmented generation and agentic systems. I value teamwork, adaptability and continuous learning.</p><div className="facts"><div><strong>AI / ML</strong><small>Focus area</small></div><div><strong>Build · Learn · Improve</strong><small>My approach</small></div></div></div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="wrap">
          <div className="section-label">02 / TOOLKIT</div>
          <div className="section-heading"><h2>Skills & technologies</h2><p className="muted">Tools and topics I work with and continue to explore.</p></div>
          <div className="skill-list">{skills.map((skill, i) => <span className="skill" key={skill}><b>{String(i + 1).padStart(2, "0")}</b>{skill}</span>)}</div>
        </div>
      </section>

      <section className="section wrap" id="projects">
        <div className="section-label">03 / SELECTED WORK</div>
        <div className="section-heading"><h2>Projects with purpose.</h2><p className="muted">A selection of projects across AI, computer vision and web development.</p></div>
        <div className="project-grid">{projects.map((project) => <article className={`project ${project.featured ? "featured" : ""}`} key={project.number}>
          <div className="project-top"><span>{project.number} / PROJECT</span><span>↗</span></div>
          <div className="project-visual"><div className="visual-ring"></div><div className="visual-cross">✳</div><span>{project.featured ? "HEALTHCARE AI" : "IN PROGRESS"}</span></div>
          <div className="project-body"><small>{project.type}</small><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}</div>
        <p className="edit-note">Project descriptions are starter summaries. Add verified GitHub links, demos, screenshots and exact outcomes before publishing.</p>
      </section>

      <section className="section achievement-section">
        <div className="wrap achievement-grid">
          <div><div className="section-label">04 / HIGHLIGHTS</div><h2>Learning through<br/><span>doing.</span></h2></div>
          <div className="achievement-list">
            <div><span>01</span><p><strong>Solveathon 2025</strong><small>First place achievement (team project).</small></p></div>
            <div><span>02</span><p><strong>Hackathons & innovation events</strong><small>Participation, coordination and collaborative problem-solving.</small></p></div>
            <div><span>03</span><p><strong>Technical learning</strong><small>Continuously developing skills across AI, ML and modern software tools.</small></p></div>
          </div>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <div className="section-label">05 / CONTACT</div>
        <h2>Have an idea?<br/><span>Let's build something.</span></h2>
        <p className="muted">I'm interested in learning, collaborating and exploring opportunities in AI and software engineering.</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:YOUR_EMAIL@example.com">Email ↗</a>
        </div>
        <p className="placeholder-note">Before publishing: replace the placeholder email and social links with your actual profiles.</p>
      </section>

      <footer className="footer wrap"><a className="brand" href="#home">N<span>.</span></a><span>Designed & built with curiosity.</span><span>© {new Date().getFullYear()} Natarajan</span></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);