import "./Meteo.css";

import MeteoActuelle from "../../Components/Meteo/MeteoActuelle";
import MeteoSemaine from "../../Components/Meteo/MeteoSemaine";

export default function Meteo() {
  return (
    <main className="meteo-page">
      <section className="meteo-header">
        <h1>SUIVI DE MÉTÉO</h1>
        <p>Consultez les conditions météorologiques actuelles et les prévisions.</p>
      </section>

      <section className="meteo-content">
        <MeteoActuelle />
        <MeteoSemaine />
      </section>
    </main>
  );
}