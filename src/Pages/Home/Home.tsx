import MeteoActuelle from "../../Components/Meteo/MeteoActuelle";
import "./Home.css";


export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-overlay"></div>

        <div className="hero-text">
          <p className="hero-welcome">BIENVENUE, INTENDANT</p>

          <h1>
            GÉREZ VOS TERRES,
            <br />
            SUIVEZ VOS RÉCOLTES,
            <br />
            OPTIMISEZ VOS RENDEMENTS.
          </h1>

          <a href="/moisson" className="hero-button">
            Calculer la moisson
          </a>
        </div>

        <div className="hero-moulin"></div>
      </section>

      <section className="home-grid">
        <div className="left-column">
         
          <div className="home-card meteo-card">
            <h2>MÉTÉO</h2>

            <MeteoActuelle />
          </div>

          
          <div className="home-card map-card">
            <h2>CARTE DU DOMAINE</h2>

            <div className="domain-map-image"></div>

            
          </div>
        </div>

        <div className="home-card advice-card">
          <h2>CONSEILS DE L’INTENDANT</h2>

          <div className="advice-content">
            <div className="advice-illustration"></div>

            <div>
              <p>
                Les conditions actuelles sont favorables à la croissance.
                Surveillez la météo et le marché pour optimiser vos récoltes.
              </p>

              <a href="/conseils" className="advice-link">
                Voir tous les conseils →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}