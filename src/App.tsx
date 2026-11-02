import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { content, skills, type Language } from "./data";

const projectArt: Record<string, string> = {
  agent: `[ agent ] ----> [ git / gh / aws ]
                      |
                      v
                 policy.yaml
                allow / deny
                      |
                      v
                  audit.log`,
  code: `source.ps
    |
    v
  tokens -> AST -> semantic
                     |
                     v
                internal IR
                     |
                     v
                LLVM IR -> binary`,
};

const navIds = ["about", "experience", "projects", "skills", "contact"];

function App() {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem("portfolio-language") === "pt" ? "pt" : "en",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Lucas Narloch">
            <span className="brand-symbol">~</span> lucas
            <span className="brand-caret">_</span>
          </a>
          <button
            className="menu-button"
            aria-label={
              menuOpen
                ? language === "pt"
                  ? "Fechar menu"
                  : "Close menu"
                : language === "pt"
                  ? "Abrir menu"
                  : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav
            className={menuOpen ? "site-nav open" : "site-nav"}
            aria-label={
              language === "pt" ? "Navegação principal" : "Main navigation"
            }
          >
            {t.nav.map((label, index) => (
              <a
                key={navIds[index]}
                href={`#${navIds[index]}`}
                className={
                  activeSection === navIds[index]
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-slash">/</span>
                {label.toLowerCase()}
              </a>
            ))}
            <button
              className="language-button"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              aria-label={
                language === "en" ? "Mudar para português" : "Switch to English"
              }
            >
              <span className={language === "en" ? "selected" : ""}>EN</span>
              <span>/</span>
              <span className={language === "pt" ? "selected" : ""}>PT</span>
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-main">
            <div className="command-line">
              <span className="prompt">lucas@portfolio</span>
              <span className="path">:~$</span> cat README.md
            </div>
            <pre
              className="ascii-name"
              aria-hidden="true"
            >{String.raw` _     _   _  ____    _    ____
| |   | | | |/ ___|  / \  / ___|
| |   | | | | |     / _ \ \___ \
| |___| |_| | |___ / ___ \ ___) |
|_____|\___/ \____/_/   \_\____/`}</pre>
            <p className="hero-eyebrow">// {t.eyebrow}</p>
            <h1>
              {t.intro.split("\n").map((line, index) => (
                <span className={index === 1 ? "accent-line" : ""} key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-description">{t.summary}</p>
            <div className="hero-actions">
              <a className="primary-link" href="#projects">
                {t.cta}
                <ArrowDown size={16} />
              </a>
              <a className="secondary-link" href="#contact">
                {t.contact}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <aside
            className="system-panel"
            aria-label={
              language === "pt" ? "Resumo profissional" : "Professional summary"
            }
          >
            <div className="panel-bar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>~/profile.yaml</span>
              <span>read only</span>
            </div>
            <div className="panel-body">
              <p>
                <span className="code-key">name:</span>{" "}
                <span className="code-value">Lucas Narloch Zabla</span>
              </p>
              <p>
                <span className="code-key">role:</span>{" "}
                <span className="code-value">{t.current}</span>
              </p>
              <p>
                <span className="code-key">location:</span>{" "}
                <span className="code-value">{t.location}</span>
              </p>
              <p>
                <span className="code-key">focus:</span>
              </p>
              <p className="code-indent">- backend systems</p>
              <p className="code-indent">- cloud infrastructure</p>
              <p className="code-indent">- software reliability</p>
              <div className="panel-rule">
                +----------------------------------+
              </div>
              <p>
                <span className="code-key">status:</span>{" "}
                <span className="status-value">
                  <i />
                  {t.available}
                </span>
              </p>
            </div>
          </aside>
          <a className="scroll-cue" href="#about">
            [ {t.scroll.toLowerCase()} ] <ArrowDown size={13} />
          </a>
        </section>

        <section
          className="content-section about-section section-wrap"
          id="about"
        >
          <div className="section-label">
            <span>01</span>
            <span>~/about/README.md</span>
          </div>
          <div className="about-grid">
            <div>
              <p className="eyebrow">// {t.aboutLabel}</p>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div className="about-text">
              <p>{t.aboutText}</p>
              <div className="education-line">
                <span>&gt;</span> {t.education}
              </div>
            </div>
          </div>
        </section>

        <section
          className="content-section experience-section section-wrap"
          id="experience"
        >
          <div className="section-label">
            <span>02</span>
            <span>~/work/history.log</span>
          </div>
          <div className="section-heading">
            <div>
              <p className="eyebrow">// {t.expLabel}</p>
              <h2>
                {t.expTitle}
                <span className="heading-cursor">_</span>
              </h2>
            </div>
            <span className="section-meta">2 entries</span>
          </div>
          <div className="experience-list">
            {[
              {
                title: t.current,
                date: `10/2026 — ${t.present}`,
                bullets: t.currentBullets,
              },
              {
                title: t.intern,
                date: "10/2024 — 09/2026",
                bullets: t.internBullets,
              },
            ].map((job, index) => (
              <article className="experience-entry" key={job.title}>
                <div className="experience-index">
                  0{index + 1}
                  <span>│</span>
                </div>
                <div className="experience-content">
                  <div className="experience-top">
                    <div>
                      <h3>{job.title}</h3>
                      <p>
                        SmartLy <span>· {t.location}</span>
                      </p>
                    </div>
                    <time>{job.date}</time>
                  </div>
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span aria-hidden="true">›</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="content-section projects-section section-wrap"
          id="projects"
        >
          <div className="section-label">
            <span>03</span>
            <span>~/projects/</span>
          </div>
          <div className="section-heading">
            <div>
              <p className="eyebrow">// {t.projectsLabel}</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <span className="section-meta">{t.selected}</span>
          </div>
          <div className="projects-grid">
            {t.projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-terminal">
                  <div className="panel-bar">
                    <span className="window-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span>
                      ~/projects/
                      {project.name.toLowerCase().replace(/ /g, "-")}
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  {project.visual === "chaos" || project.visual === "sun" ? (
                    <img
                      className="project-image"
                      src={`${import.meta.env.BASE_URL}${project.visual === "chaos" ? "learning-in-chaos.png" : "sunlog.png"}`}
                      alt={
                        project.visual === "chaos"
                          ? language === "pt"
                            ? "Painel de investigação de incidentes do Learning in Chaos"
                            : "Learning in Chaos incident investigation dashboard"
                          : language === "pt"
                            ? "Página inicial da plataforma Sunlog.dev"
                            : "Sunlog.dev platform home page"
                      }
                      loading="lazy"
                    />
                  ) : (
                    <pre aria-hidden="true">{projectArt[project.visual]}</pre>
                  )}
                </div>
                <div className="project-details">
                  <p className="project-category">// {project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <Github size={15} />
                      {t.projectLink}
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ArrowUpRight size={15} />
                        {t.live}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="content-section skills-section section-wrap"
          id="skills"
        >
          <div className="section-label">
            <span>04</span>
            <span>~/stack/</span>
          </div>
          <div className="section-heading">
            <div>
              <p className="eyebrow">// {t.skillsLabel}</p>
              <h2>{t.skillsTitle}</h2>
            </div>
          </div>
          <div className="skills-output">
            <div className="command-line">
              <span className="prompt">lucas@portfolio</span>
              <span className="path">:~$</span> ls ./stack/
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill}>
                  <span className="skill-prefix">drwxr-xr-x</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-section contact-section section-wrap"
          id="contact"
        >
          <div className="section-label">
            <span>05</span>
            <span>~/contact.txt</span>
          </div>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">// {t.contactLabel}</p>
              <h2>{t.contactTitle}</h2>
            </div>
            <div className="contact-details">
              <p>{t.contactText}</p>
              <a className="email-link" href="mailto:lucasnarloch123@gmail.com">
                <span>mailto:</span>lucasnarloch123@gmail.com
                <ArrowUpRight size={18} />
              </a>
              <div className="social-links">
                <a
                  href="https://github.com/LucasNarlochZ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lucasnarloch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a href="mailto:lucasnarloch123@gmail.com">
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>
          <span className="prompt">lucas@portfolio</span>
          <span className="path">:~$</span> exit{" "}
          <span className="exit-code">0</span>
        </span>
        <span>
          © {new Date().getFullYear()} {t.footer}
        </span>
        <a href="#home">{t.top} ↑</a>
      </footer>
    </div>
  );
}

export default App;
