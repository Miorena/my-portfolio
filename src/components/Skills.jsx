import { Code2, Layers, Database, Wrench, Terminal, Folder } from "lucide-react";
import { SKILL_GROUPS } from "../data";
import "./Skills.css";

// Une icône par catégorie, choisie via la clé 'table' des données
const GROUP_ICONS = {
  langages: Code2,
  frameworks: Layers,
  donnees: Database,
  outils: Wrench,
  systemes: Terminal,
};

export default function Skills() {
  return (
    <section className="p-section" id="skills">
      <p className="p-eyebrow">-- SELECT * FROM competences;</p>

      <div className="p-skill-rows">
        {SKILL_GROUPS.map((group) => {
          const Icon = GROUP_ICONS[group.table] ?? Folder;

          return (
            <div className="p-skill-row" key={group.table}>
              <h3 className="p-skill-label">
                <Icon size={14} />
                {group.title}
              </h3>
              <ul className="p-skill-chips">
                {group.items.map((item) => (
                  <li key={item} className="p-skill-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
