import React from 'react';
import './styles.css';

const services = [
  {
    icon: '\u{1F916}',
    title: 'AI & Intelligent Systems',
    description: 'Custom AI agents, RAG pipelines, multi-model routing, and LLM integrations using Claude, OpenAI, Gemini, and AWS Bedrock.',
    tags: ['LangChain', 'LangGraph', 'RAG', 'Pinecone', 'Prompt Engineering', 'MCP'],
  },
  {
    icon: '\u{1F4F1}',
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native, plus native iOS (Swift) and Android (Java/Kotlin) features when you need them.',
    tags: ['React Native', 'Swift', 'TypeScript', 'Redux', 'App Store', 'Play Store'],
  },
  {
    icon: '\u{1F310}',
    title: 'Web Applications',
    description: 'Full-stack web platforms built with modern frameworks. From landing pages to complex SaaS products.',
    tags: ['React', 'Vue.js', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
  },
  {
    icon: '\u{1F4CA}',
    title: 'Observability & Performance',
    description: 'End-to-end monitoring strategies, APM instrumentation, and performance optimization for web, mobile, and cloud.',
    tags: ['Dynatrace', 'AWS', 'Kubernetes', 'Docker', 'APM', 'SRE'],
  },
  {
    icon: '\u{2699}\u{FE0F}',
    title: 'DevOps & CI/CD',
    description: 'Automated build, test, and deployment pipelines. Infrastructure that scales with your team.',
    tags: ['GitHub Actions', 'Azure Pipelines', 'Docker', 'CI/CD', 'Cloud'],
  },
  {
    icon: '\u{1F9ED}',
    title: 'Technical Leadership',
    description: 'Project architecture reviews, tech stack assessments, team mentoring, and delivery management for engineering teams.',
    tags: ['Architecture', 'Code Review', 'Mentoring', 'Agile', 'Strategy'],
  },
];

const processSteps = [
  { number: '01', title: 'Discovery', text: 'We talk about your idea, goals, constraints, and timeline. No jargon, just clarity.' },
  { number: '02', title: 'Proposal', text: 'You get a clear scope, timeline, and quote. No surprises.' },
  { number: '03', title: 'Build', text: 'We build iteratively with regular check-ins so you always know where things stand.' },
  { number: '04', title: 'Ship', text: 'Deployed, documented, and handed off clean. We stick around for support.' },
];

const tech = [
  'React', 'React Native', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js', 'NestJS',
  'Python', 'Ruby on Rails', 'Swift', '.NET Core',
  'Claude API', 'OpenAI', 'Gemini', 'AWS Bedrock', 'LangChain', 'Pinecone',
  'Dynatrace', 'AWS', 'Kubernetes', 'Docker', 'PostgreSQL', 'GitHub Actions',
];

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">pinacly<span>.io</span></a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact" className="nav-cta">Start a project</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-badge">Software & AI Engineering Studio</div>
          <h1>We turn ideas into<br /><span className="gradient-text">products that ship.</span></h1>
          <p className="hero-sub">
            Engineering studio specializing in AI-powered applications,
            mobile development, web platforms, and observability solutions.
            Based in Mexico, working globally.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Let's build together</a>
            <a href="#services" className="btn-ghost">What we do</a>
          </div>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </section>

      <section className="services" id="services">
        <div className="container">
          <p className="section-label">What we do</p>
          <h2 className="section-title">End-to-end engineering,<br />from concept to production.</h2>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <div className="service-tags">
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-section">
        <div className="container">
          <p className="section-label">Tech stack</p>
          <h2 className="section-title">Tools we work with daily.</h2>
          <div className="tech-cloud">
            {tech.map((t) => <span key={t} className="tech-item">{t}</span>)}
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="container">
          <p className="section-label">How we work</p>
          <h2 className="section-title">Simple, transparent process.</h2>
          <div className="process-grid">
            {processSteps.map((s) => (
              <div key={s.number} className="process-step">
                <span className="step-number">{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container cta-inner">
          <p className="section-label">Ready?</p>
          <h2 className="cta-heading">Let's build together.</h2>
          <p className="cta-text">
            Have a project in mind? Whether it's an MVP, a mobile app, an AI integration,
            or a performance overhaul &mdash; reach out and let's talk.
          </p>
          <a href="mailto:miguel@pinacly.io" className="btn-primary btn-lg">
            miguel@pinacly.io
          </a>
          <div className="cta-links">
            <a href="https://www.linkedin.com/company/pinacly-io" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-logo">pinacly<span>.io</span></span>
          <span className="footer-copy">&copy; {new Date().getFullYear()} Pinacly. Colima, Mexico.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
