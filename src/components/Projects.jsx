import { Code2 } from "lucide-react";
import { PROJECTS } from "../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="p-section" id="projects">
      <p className="p-eyebrow">$ ls ~/projets</p>
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
            {project.github && (
              <a
                className="p-project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={14} /> Voir le repository
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
