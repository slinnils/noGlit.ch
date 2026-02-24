import { Link } from "react-router-dom";
import logo from "../assets/noGlitch_logo.png";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center bg-lab-surface py-12 px-7 mt-30 rounded-2xl w-[clamp(400px,60vw,1000px)]">
      <img className="h-40 w-40" src={logo} alt="" />
      <h2 className="mb-5 text-2xl text-lab-text-bright font-semibold">Wilkommen in meinem Labor!</h2>
      <p className="text-center text-lab-text-main">
        noGlit.ch ist mein persönliches React-Labor. Hier experimentiere ich mit
        modernen Web-Technologien und entwickle eine eigene Bibliothek aus
        modularen UI-Komponenten. Dieses Projekt dient mir als kreativer
        Spielplatz, um die Grenzen von React auszuloten und hochwertige Lösungen
        für zukünftige Projekte zu perfektionieren.
      </p>
      <div className="flex gap-10 mt-7">
        <Link className="full-button" to={'laboratory'}>Zum Labor</Link>
        <Link className="empty-button" to={'blog'}>Zum Blog</Link>
      </div>
    </div>
  );
}
