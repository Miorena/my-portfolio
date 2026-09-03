import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./theme.css";
import "./App.css";

// ----------- Effet machine à écrire pour le hero --------------
/* Tape le texte `text` caractère par caractère. Si l'utilisateur a
demandé "réduire les animations" dans son système, on affiche le
texte final directement, sans animation. */
function useTypewriter(text, { speed = 55, startDelay = 300 } = {}) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setOutput(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval;
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}

// ----------------------- Thème clair / sombre ----------------------------
/* Au premier rendu, on part de la préférence système (prefers-color-scheme).
Ensuite, seul le clic sur le bouton de la nav change le thème : on ne
réécoute pas les changements système après coup, pour que le choix
manuel de la personne reste toujours prioritaire. */
const THEME_STORAGE_KEY = "portfolio-theme";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}

// -------------------- Composant principal --------------------------
export default function App() {
  const { output: typed, done: typedDone } = useTypewriter("whoami", {
    speed: 90,
    startDelay: 400,
  });
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main className="p-shell">
        <Hero typed={typed} typedDone={typedDone} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
