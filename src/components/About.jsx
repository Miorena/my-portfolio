import { ABOUT, PROFILE } from "../data";
import "./About.css";

export default function About() {
  return (
    <section className="p-section" id="about">
      <p className="p-eyebrow">/* profil.md */</p>
      <div className="p-about-card">
        <p className="p-about-text">{ABOUT.text}</p>
        <div className="p-tags">
          {PROFILE.qualities.map((q) => (
            <span className="p-tag" key={q}>
              {q}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
