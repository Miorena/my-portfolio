import { Briefcase, GraduationCap, Languages } from "lucide-react";
import { EXPERIENCE, EDUCATION, LANGUAGES } from "../data";
import "./Experience.css";

export default function Experience() {
  return (
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
  );
}
