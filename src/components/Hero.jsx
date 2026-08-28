import { Mail } from "lucide-react";
import { PROFILE } from "../data";
import "./Hero.css";

export default function Hero({ typed, typedDone }) {
  return (
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
  );
}
