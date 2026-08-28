import { Database } from "lucide-react";
import { SKILL_GROUPS } from "../data";
import "./Skills.css";

export default function Skills() {
  return (
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
  );
}
