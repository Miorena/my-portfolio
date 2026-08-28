import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import "./Nav.css";

export default function Nav({ theme, toggleTheme }) {
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
