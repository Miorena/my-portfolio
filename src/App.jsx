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

// ----------------------- Thème clair / sombre / système ------------------
/* Deux notions distinctes :
   - `preference` : ce que la personne a choisi dans le menu
     ("light", "dark" ou "system"), enregistré dans localStorage ;
   - `theme` : le thème réellement appliqué ("light" ou "dark"). Si la
     préférence est "system", il suit le thème de l'OS, et change en
     direct quand l'OS bascule (ex. passage automatique jour/nuit). */
const THEME_STORAGE_KEY = "portfolio-theme";
const PREFERENCES = ["light", "dark", "system"];
const DARK_QUERY = "(prefers-color-scheme: dark)";

const getSystemTheme = () =>
  window.matchMedia(DARK_QUERY).matches ? "dark" : "light";

function useTheme() {
  const [preference, setPreference] = useState(() => {
    // localStorage peut être inaccessible (navigation privée, etc.)
    try {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (PREFERENCES.includes(saved)) return saved;
    } catch {
      /* on retombe sur "system" */
    }
    return "system";
  });
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  // Suit les changements du thème de l'OS en continu
  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    const onChange = (event) =>
      setSystemTheme(event.matches ? "dark" : "light");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Mémorise le choix pour les prochaines visites
  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch {
      /* pas grave : le choix vaudra juste pour cette session */
    }
  }, [preference]);

  const theme = preference === "system" ? systemTheme : preference;

  return { preference, setPreference, theme };
}

// -------------------- Composant principal --------------------------
export default function App() {
  const { output: typed, done: typedDone } = useTypewriter("whoami", {
    speed: 90,
    startDelay: 400,
  });
  const { preference, setPreference, theme } = useTheme();

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Nav preference={preference} setPreference={setPreference} />
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
