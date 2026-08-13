import portrait from "./images/henrique-jensen.png";

const expertise = [
  { number: "01", title: "Frontend Architecture", description: "Scalable application foundations, clear boundaries, shared platforms, and pragmatic technical decisions." },
  { number: "02", title: "Design Systems", description: "Multi-brand components, design tokens, Storybook, and workflows that keep design and engineering aligned." },
  { number: "03", title: "Accessible Experiences", description: "Inclusive interfaces, focus management, alternative navigation, and accessibility built into the architecture." },
  { number: "04", title: "Technical Leadership", description: "Architecture direction, mentoring, documentation, and collaboration that multiply a team's impact." },
];

const work = [
  { type: "Platform architecture", title: "Multi-brand frontend platform", description: "A shared foundation for multiple products and brands, combining an Nx monorepo, design tokens, reusable components, Storybook, and visual testing.", tags: ["Nx", "React", "Design tokens", "Storybook"], accent: "violet" },
  { type: "Accessibility architecture", title: "Accessible kiosk experience", description: "An event-driven accessibility layer connecting specialized hardware, navigation intents, focus management, and text-to-speech.", tags: ["React Aria", "Event-driven", "Hardware", "A11y"], accent: "cyan" },
  { type: "Applied AI research", title: "Local RAG for Moodle", description: "A privacy-oriented question-answering system that indexes course documents and runs language models locally in resource-constrained environments.", tags: ["Next.js", "FastAPI", "Ollama", "ChromaDB"], accent: "orange" },
];

const impact = [
  { title: "Shared foundations", description: "Architecture spanning multiple applications and brands through reusable libraries and design tokens." },
  { title: "Inclusive by design", description: "Accessibility embedded into components, navigation, focus management, and hardware integrations." },
  { title: "Teams with context", description: "Technical decisions made visible through documentation, presentations, standards, and mentoring." },
];

const toolkit = ["React", "TypeScript", "Nx", "Design Tokens", "Storybook", "React Aria", "Next.js", "FastAPI", "Python"];

const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Henrique Jensen, home">HJ<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#profile">Profile</a>
        </nav>
        <a className="header-cta" href="https://www.linkedin.com/in/henriquejensen/" target="_blank" rel="noreferrer">Let&apos;s talk <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Frontend architect &amp; technical leader</p>
            <h1 id="hero-title">Henrique<br />Jensen<span>.</span></h1>
            <p className="hero-intro">I design frontend architectures that help teams build <strong>consistent, accessible, and scalable products.</strong></p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="button button-secondary" href="https://github.com/henriquejensen" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a className="button button-secondary" href="/resume-henrique-jensen.pdf" download>Résumé ↓</a>
            </div>
          </div>
          <aside className="hero-profile" aria-label="Professional summary">
            <figure className="portrait">
              <img src={portrait} alt="Henrique Jensen wearing a suit" />
              <figcaption>Frontend architect &amp; technical leader</figcaption>
            </figure>
            <div className="hero-note">
              <p>Based in</p><strong>Brazil</strong>
              <p>Currently focused on</p><strong>Architecture · Design systems · Accessibility</strong>
            </div>
          </aside>
        </section>

        <section className="statement" id="about" aria-labelledby="about-title">
          <p className="section-label">About</p>
          <div>
            <h2 id="about-title">I turn complex product requirements into clear, maintainable systems.</h2>
            <div className="about-grid">
              <p>I&apos;m a software engineer with 10+ years of experience building web and mobile products. Today, my work focuses on frontend architecture, technical leadership, and developer experience.</p>
              <p>I help teams define scalable foundations, create reusable component systems, improve accessibility, and connect technical decisions with business goals. I also enjoy mentoring, teaching, and sharing what I learn.</p>
            </div>
          </div>
        </section>

        <section className="expertise" aria-labelledby="expertise-title">
          <div className="section-heading"><p className="section-label">Expertise</p><h2 id="expertise-title">How I create impact</h2></div>
          <div className="expertise-grid">
            {expertise.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </section>

        <section className="impact" aria-labelledby="impact-title">
          <div className="section-heading"><p className="section-label">Impact</p><h2 id="impact-title">Architecture that increases a team&apos;s capacity.</h2></div>
          <div className="impact-grid">
            {impact.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
          <blockquote>“My role goes beyond implementation: I create technical direction, make architectural decisions visible, mentor engineers, and help teams operate with greater autonomy.”</blockquote>
        </section>

        <section className="selected-work" id="work" aria-labelledby="work-title">
          <div className="section-heading"><p className="section-label">Selected work</p><h2 id="work-title">Systems, not just screens.</h2></div>
          <div className="work-list">
            {work.map((project, index) => (
              <article className="work-card" key={project.title}>
                <div className={`work-visual ${project.accent}`} aria-hidden="true"><span>0{index + 1}</span><div className="architecture-lines"><i /><i /><i /></div></div>
                <div className="work-copy"><p className="work-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><ul aria-label="Technologies and concepts">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
              </article>
            ))}
          </div>
          <p className="confidentiality">Case studies based on professional and academic experience. Confidential implementation details were omitted.</p>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><p className="section-label">Experience</p><h2 id="experience-title">A career built across products, platforms, and people.</h2></div>
          <div className="timeline">
            <article><p>Current</p><div><h3>Dentsu</h3><span>Frontend leadership &amp; architecture</span></div><strong>Platforms · Design systems · Accessibility</strong></article>
            <article><p>Previous</p><div><h3>Trybe</h3><span>Full-stack development &amp; education</span></div><strong>Web development · Mentoring</strong></article>
            <article><p>Previous</p><div><h3>Daitan</h3><span>Mobile software development</span></div><strong>React Native · Quality engineering</strong></article>
          </div>
        </section>

        <section className="profile-details" id="profile" aria-labelledby="profile-title">
          <div className="section-heading"><p className="section-label">Profile</p><h2 id="profile-title">Learning, teaching, and sharing context.</h2></div>
          <div className="profile-grid">
            <article><p className="detail-label">Education</p><h3>Computer Science</h3><p>Bachelor&apos;s degree · UFLA</p><h3>IT Management</h3><p>Postgraduate degree · IFSP</p></article>
            <article><p className="detail-label">Teaching</p><h3>Corporate instructor</h3><p>Data, Python, artificial intelligence, Power BI, and software development for professional audiences.</p><h3>Mentoring</h3><p>Architecture, code quality, documentation, and developer growth.</p></article>
            <article><p className="detail-label">Languages</p><h3>Portuguese</h3><p>Native</p><h3>English</h3><p>Professional working proficiency</p></article>
          </div>
          <div className="toolkit"><p className="detail-label">Core toolkit</p><ul>{toolkit.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="knowledge" aria-labelledby="knowledge-title">
          <p className="section-label">Writing &amp; speaking</p>
          <div><h2 id="knowledge-title">Making architecture visible.</h2><p>I write, teach, and present about multi-brand design systems, design tokens, frontend platforms, accessible kiosk experiences, event-driven architecture, and local AI. My academic work explores a RAG-based assistant integrated with Moodle and locally executed language models.</p><a href="https://www.linkedin.com/in/henriquejensen/recent-activity/all/" target="_blank" rel="noreferrer">Follow my work on LinkedIn <Arrow /></a></div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <p className="section-label">Get in touch</p><h2 id="contact-title">Let&apos;s build something<br />that lasts<span>.</span></h2><p>Interested in frontend architecture, design systems, accessibility, or technical leadership?</p><a className="button button-light" href="https://www.linkedin.com/in/henriquejensen/" target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
        </section>
      </main>

      <footer><a className="brand" href="#top">HJ<span>.</span></a><p>Designed &amp; built with intention.</p><div><a href="https://github.com/henriquejensen" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/henriquejensen/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </div>
  );
}

export default App;
