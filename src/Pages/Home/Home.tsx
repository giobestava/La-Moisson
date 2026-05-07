import MeteoActuelle from "../../Components/Meteo/MeteoActuelle";
import Conseils from "../../Components/Conseils/Conseils";
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
					<Conseils />
				</div>
			</section>
		</main>
	);
}
