import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Nav.css";
import ThemeMenu from "./ThemeMenu";

export default function Nav({ preference, setPreference }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="p-nav">
      <div className="p-nav-inner">
        <a className="p-nav-logo" href="#home">
          miorena@dev:~$
        </a>
        <div className="p-nav-right">
          <div className={`p-nav-links${menuOpen ? " p-nav-links-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              à propos
            </a>
            <a href="#skills" onClick={closeMenu}>
              compétences
            </a>
            <a href="#projects" onClick={closeMenu}>
              projets
            </a>
            <a href="#parcours" onClick={closeMenu}>
              parcours
            </a>
            <a href="#contact" onClick={closeMenu}>
              contacts
            </a>
          </div>
          {/* Le thème reste toujours visible, même sur mobile menu fermé */}
          <ThemeMenu preference={preference} setPreference={setPreference} />
          {/* Burger visible uniquement sur petit écran (voir CSS) */}
          <button
            type="button"
            className="p-burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
