import { useRef, useState } from "react";
import { Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../data";
import "./Projects.css";

export default function Projects() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Distance entre deux slides = largeur d'une slide + l'espace entre elles
  const getStep = (track) =>
    track.children.length > 1
      ? track.children[1].offsetLeft - track.children[0].offsetLeft
      : track.clientWidth;

  // Met à jour le point actif selon la slide visible dans le conteneur
  const handleScroll = () => {
    const track = trackRef.current;
    setActive(Math.round(track.scrollLeft / getStep(track)));
  };

  // Clic sur un point : fait défiler jusqu'à la slide correspondante
  const goTo = (index) => {
    const track = trackRef.current;
    track.scrollTo({ left: index * getStep(track) });
  };

  return (
    <section className="p-section" id="projects">
      <p className="p-eyebrow">$ ls ~/projets</p>

      <div className="p-slider">
        {/* Flèches : visibles sur grand écran seulement (voir CSS) */}
        <button
          type="button"
          className="p-slider-arrow"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Projet précédent"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          className="p-slider-track"
          ref={trackRef}
          onScroll={handleScroll}
          tabIndex={0}
          role="region"
          aria-roledescription="carrousel"
          aria-label="Projets"
        >
          {PROJECTS.map((project) => (
            <div className="p-slide" key={project.name}>
              <article className="p-project-card">
                <div className="p-project-head">
                  <h3 className="p-project-name">{project.name}</h3>
                  <span className="p-project-stack">{project.stack}</span>
                </div>
                <p className="p-project-desc">{project.description}</p>
                <ul className="p-project-bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a
                  className="p-project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={14} />
                  Voir le repository
                </a>
              </article>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="p-slider-arrow"
          onClick={() => goTo(active + 1)}
          disabled={active === PROJECTS.length - 1}
          aria-label="Projet suivant"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="p-slider-dots">
        {PROJECTS.map((project, index) => (
          <button
            key={project.name}
            type="button"
            className={`p-slider-dot${index === active ? " p-slider-dot-active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Projet ${index + 1} sur ${PROJECTS.length} : ${project.name}`}
            aria-current={index === active}
          />
        ))}
      </div>
    </section>
  );
}
