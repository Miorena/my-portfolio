import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Terminal,
  Database,
  Code2,
  GraduationCap,
  Briefcase,
  Languages,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import "./App.css";

/*
  PORTFOLIO — Miorena Finaritra
  ------------------------------------------------------------
  Direction créative : le fil rouge est le monde d'un développeur
  backend/BD (terminal, requêtes SQL, dépôts Git). Chaque bloc de
  section reprend un vocabulaire réellement utilisé au quotidien
  (prompt shell, commentaire de code, requête SELECT) plutôt que
  des numéros ou des icônes décoratives sans lien avec le contenu.

  Structure du fichier :
  1. Données du CV (faciles à modifier)
  2. Petit hook pour l'effet "machine à écrire" du hero
  3. Composant principal avec une section par bloc du CV
  ------------------------------------------------------------
*/

// --- 1. Données -------------------------------------------------
const PROFILE = {
  name: "Miorena Finaritra",
  fullName: "Raholdina Fiara Miorena Finaritra",
  role: "Développeur Junior",
  location: "Antananarivo, Madagascar",
  email: "miorenafinaritra@gmail.com",
  phone: "+261 38 92 192 10",
  summary:
    "Développeur junior de 20 ans, formé en génie logiciel avec une base solide en bases de données. À l'aise avec le cycle de développement agile, je m'adapte vite aux outils et pratiques d'une équipe — et je cherche un projet ambitieux pour continuer à progresser.",
  qualities: [
    "Autonome",
    "Curieux",
    "Rigoureux",
    "Esprit d'équipe",
    "Apprentissage rapide",
  ],
};

const SKILL_GROUPS = [
  {
    table: "systemes",
    title: "Systèmes & réseau",
    items: [
      "Linux (Ubuntu, Fedora)",
      "Réseau Windows (IP, connexions distantes)",
    ],
  },
  {
    table: "langages",
    title: "Langages & frameworks",
    items: ["Java", "JavaScript", "Python", "React", "HTML / CSS"],
  },
  {
    table: "donnees",
    title: "Bases de données & outils",
    items: ["PostgreSQL", "DBeaver", "Git / GitHub", "VS Code"],
  },
];

const PROJECTS = [
  {
    name: "TaskManager",
    stack: "React · JavaScript",
    description:
      "Interface web de gestion de tâches avec gestion d'état (useState) et composants réutilisables.",
    bullets: [
      "CRUD complet : ajout, modification, suppression, filtrage",
      "Conception responsive",
      "Versionné sur GitHub",
    ],
  },
  {
    name: "Jeu d'échecs",
    stack: "Java · POO",
    description:
      "Moteur de jeu d'échecs modélisé en programmation orientée objet, avec architecture en couches.",
    bullets: [
      "Hiérarchie de classes (héritage, classes abstraites) pour les pièces",
      "Validation des coups, chemins bloqués, captures",
      "Architecture modèle / contrôleur, versionnée sur Git",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Développeur de base de données — poste junior",
    place: "OBS-OI · Osmosis Business Solutions Océan Indien",
    period: "Mars 2026 — en cours",
    bullets: [
      "Conception de logiciels métier sur mesure avec Omnis Studio (environnement RAD orienté BD)",
      "Modélisation, optimisation et administration de bases PostgreSQL avec DBeaver",
      "Participation au cycle complet : analyse des besoins, conception, développement, tests, livraison",
    ],
  },
  {
    role: "Assistant commercial — stage d'observation",
    place: "Garage automobile, Mahajanga",
    period: "Juin — août 2023",
    bullets: [
      "Appui à la relation client et suivi des dossiers commerciaux",
      "Rédaction de comptes rendus et organisation de données clients",
    ],
  },
];

const EDUCATION = [
  {
    title: "Licence Informatique — Génie logiciel et base de données",
    place: "PEF / UPEF (cours en ligne), Antananarivo",
    period: "En cours",
  },
  {
    title: "Baccalauréat, série scientifique",
    place: "Lycée Privé Aladin, Mahajanga",
    period: "2023",
  },
];

const LANGUAGES = [
  { name: "Malagasy", level: "Langue maternelle" },
  { name: "Français", level: "Courant (oral et écrit)" },
  { name: "Anglais", level: "Intermédiaire" },
];

// --- 2. Effet machine à écrire pour le hero ----------------------
// Tape le texte `text` caractère par caractère, puis prévient le
// parent (onDone) que l'animation est terminée. Si l'utilisateur a
// demandé "réduire les animations" dans son système, on affiche le
// texte final directement, sans animation.
function useTypewriter(text, { speed = 55, startDelay = 300 } = {}) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setOutput(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval;
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}

// --- Thème clair / sombre ----------------------------------------
// Au premier rendu, on part de la préférence système (prefers-color-scheme).
// Ensuite, seul le clic sur le bouton de la nav change le thème : on ne
// réécoute pas les changements système après coup, pour que le choix
// manuel de la personne reste toujours prioritaire.
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}

// --- 3. Composant principal --------------------------------------
export default function Portfolio() {
  const { output: typed, done: typedDone } = useTypewriter("whoami", {
    speed: 90,
    startDelay: 400,
  });
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="portfolio-app" data-theme={theme}>
      {/* NAVIGATION */}
      <nav className="p-nav">
        <div className="p-nav-inner">
          <a className="p-nav-logo" href="#home">
            miorena@dev:~$
          </a>
          <div className="p-nav-right">
            <div className="p-nav-links">
              <a href="#about">about</a>
              <a href="#skills">skills</a>
              <a href="#projects">projects</a>
              <a href="#parcours">parcours</a>
              <a href="#contact">contact</a>
            </div>
            <button
              type="button"
              className="p-theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Passer au thème clair"
                  : "Passer au thème sombre"
              }
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="p-shell">
        {/* HERO */}
        <section className="p-hero" id="home">
          <div className="p-terminal">
            <div className="p-terminal-bar">
              <span className="p-dot" />
              <span className="p-dot" />
              <span className="p-dot" />
              <span className="p-terminal-title">portfolio.sh</span>
            </div>
            <div className="p-terminal-body">
              <p className="p-prompt">
                <span className="p-prompt-user">miorena@dev</span>:~$ {typed}
                {!typedDone && <span className="p-cursor" />}
              </p>

              {typedDone && (
                <div className="p-hero-output">
                  <h1 className="p-hero-name">{PROFILE.name}</h1>
                  <p className="p-hero-role">
                    {PROFILE.role} · {PROFILE.location}
                  </p>
                  <p className="p-hero-summary">{PROFILE.summary}</p>
                  <div className="p-hero-actions">
                    <a
                      className="p-btn p-btn-primary"
                      href={`mailto:${PROFILE.email}`}
                    >
                      <Mail size={14} /> Écrire un email
                    </a>
                    <a className="p-btn p-btn-ghost" href="#projects">
                      Voir les projets
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="p-section" id="about">
          <p className="p-eyebrow">/* profil.md */</p>
          <div className="p-about-card">
            <p className="p-about-text">{PROFILE.summary}</p>
            <div className="p-tags">
              {PROFILE.qualities.map((q) => (
                <span className="p-tag" key={q}>
                  {q}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="p-section" id="skills">
          <p className="p-eyebrow">-- SELECT * FROM competences;</p>
          <div className="p-skill-grid">
            {SKILL_GROUPS.map((group) => (
              <div className="p-skill-card" key={group.table}>
                <div className="p-skill-head">
                  <Database size={14} />
                  {group.title}
                </div>
                <ul className="p-skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="p-section" id="projects">
          <p className="p-eyebrow">$ ls ~/projects</p>
          <div className="p-project-grid">
            {PROJECTS.map((project) => (
              <div className="p-project-card" key={project.name}>
                <div className="p-project-head">
                  <h3 className="p-project-name">{project.name}</h3>
                  <span className="p-project-stack">{project.stack}</span>
                </div>
                <p className="p-project-desc">{project.description}</p>
                <ul className="p-project-bullets">
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="p-section" id="parcours">
          <p className="p-eyebrow">$ cat parcours.log</p>
          <h2 className="p-section-title">
            <Briefcase size={17} /> Expérience
          </h2>
          <div className="p-timeline">
            {EXPERIENCE.map((exp) => (
              <div className="p-timeline-item" key={exp.role}>
                <div className="p-timeline-period">{exp.period}</div>
                <div>
                  <h3 className="p-timeline-role">{exp.role}</h3>
                  <p className="p-timeline-place">{exp.place}</p>
                  <ul className="p-timeline-bullets">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-info-grid" style={{ marginTop: 40 }}>
            <div>
              <p className="p-info-block-title">
                <GraduationCap size={14} /> Formation
              </p>
              {EDUCATION.map((edu) => (
                <div className="p-edu-item" key={edu.title}>
                  <p className="p-edu-title">{edu.title}</p>
                  <p className="p-edu-place">{edu.place}</p>
                  <span className="p-edu-period">{edu.period}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="p-info-block-title">
                <Languages size={14} /> Langues
              </p>
              {LANGUAGES.map((lang) => (
                <div className="p-lang-row" key={lang.name}>
                  <span>{lang.name}</span>
                  <span className="p-lang-level">{lang.level}</span>
                </div>
              ))}
              <p className="p-cert">
                -- DELF Junior, diplôme de langue française (2022)
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="p-footer" id="contact">
          <div className="p-contact-card">
            <p className="p-contact-prompt">
              $ contact --email {PROFILE.email} --tel "{PROFILE.phone}"
            </p>
            <div className="p-contact-links">
              <a className="p-contact-link" href={`mailto:${PROFILE.email}`}>
                <Mail size={15} /> {PROFILE.email}
                <ArrowUpRight size={13} />
              </a>
              <a
                className="p-contact-link"
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              >
                <Phone size={15} /> {PROFILE.phone}
              </a>
              <span className="p-contact-link">
                <MapPin size={15} /> {PROFILE.location}
              </span>
            </div>
          </div>
          <p className="p-footnote">
            <Terminal
              size={11}
              style={{ verticalAlign: "-1px", marginRight: 4 }}
            />
            {PROFILE.fullName} — construit avec React
          </p>
        </section>
      </main>
    </div>
  );
}
