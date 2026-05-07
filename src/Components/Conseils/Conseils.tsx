import { useEffect, useState } from "react";

import "./Conseils.css";

const conseilsArray = [
	"Une terre épuisée est une terre qui vous trahit. Ne forcez point la main à la nature.",
	"Le gel de mai brise le cœur du paysan et la bourse du seigneur.",
	"Vendre au plus haut, stocker au plus bas : le grain est de l'or qui se mange",
	"N'oubliez point de mettre de côté la part du Seigneur et celle de l'Église avant de compter vos bénéfices, sous peine de finir au carcan !",
	"Surveillez l'humidité de vos greniers. Le charançon et la moisissure sont des voleurs plus discrets mais plus redoutables que les brigands de grands chemins.",
	"Envoyez un valet au marché du bourg voisin. Si le prix du setier de blé monte, gardez vos réserves ; la disette approche et vos profits n'en seront que plus grands.",
	"Les hivers sont rudes en ce siècle. Retardez vos semis si la terre est encore durcie par le froid, sous peine de voir vos semences pourrir sans germer.",
	"Observez les nuages cuivrés à l'horizon. Si l'orage gronde, assurez-vous que les granges sont prêtes à recevoir ce qui peut être sauvé en hâte.",
	"Ne négligez point la jachère. Une terre qui a porté le blé d'hiver doit se reposer ou porter des légumineuses avant de revoir le grain.",
	"Divisez vos champs en trois : les céréales d'hiver (seigle, froment), les céréales de printemps (orge, avoine) et la friche pour le bétail. C’est la clé de l’abondance.",
];
function Conseils() {
	const [conseil, setConseil] = useState<string>("");
	const [fadeClass, setFadeClass] = useState<string>("");

	useEffect(() => {
		function affichAleatoire() {
			const i = Math.floor(Math.random() * conseilsArray.length);
			setConseil(conseilsArray[i]);
			setFadeClass("fade-in"); // fondu d'entrée, durée définie en css

			setTimeout(() => {
				setFadeClass("fade-out"); // fondu de sortie, durée définie en css
			}, 4000); // on voit la citation 3 secondes avant que le fondu de sortie
		}
		affichAleatoire();
		const interval = setInterval(affichAleatoire, 5000); // durée totale d'une séquence : 4 sec.
		return () => clearInterval(interval); // cleanup si le composant est démonté
	}, []);

	return (
		<div className="conseils-div-wrapper">
			<p className="conseils-div-p-title">Conseils de l'intendant</p>
			<p className={`${fadeClass} conseils-p`}>{conseil}</p>
		</div>
	);
}

export default Conseils;
