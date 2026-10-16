import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import "./ThemeMenu.css";

// Ordre d'affichage dans le menu
const OPTIONS = [
  { value: "dark", label: "Sombre", Icon: Moon },
  { value: "light", label: "Clair", Icon: Sun },
  { value: "system", label: "Système", Icon: Monitor },
];

export default function ThemeMenu({ preference, setPreference }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  // Le bouton de la nav affiche l'icône du choix en cours
  const current = OPTIONS.find((o) => o.value === preference) ?? OPTIONS[2];
  const CurrentIcon = current.Icon;

  // Menu ouvert : un clic en dehors ou la touche Échap le referme
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (value) => {
    setPreference(value);
    setOpen(false);
  };

  return (
    <div className="p-theme-menu" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="p-theme-toggle"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-label={`Thème : ${current.label}`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <CurrentIcon size={15} />
      </button>

      {open && (
        <ul className="p-theme-list" role="menu">
          {OPTIONS.map(({ value, label, Icon }) => (
            <li key={value} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={preference === value}
                className="p-theme-option"
                onClick={() => choose(value)}
              >
                <Icon size={14} />
                <span>{label}</span>
                {preference === value && (
                  <Check size={14} className="p-theme-check" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
