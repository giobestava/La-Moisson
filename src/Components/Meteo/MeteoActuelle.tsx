import { useEffect, useState } from "react";
import "./MeteoActuelle.css";

type MeteoActuelleData = {
  temperature: number;
  humidite: number;
  pluie: number;
  vent: number;
  pression: number;
  code: number;
};

export default function MeteoActuelle() {

  const [meteo, setMeteo] = useState<MeteoActuelleData | null>(null);

  function getWeatherVisual(code: number) {

    if (code <= 1) {
      return (
        <div className="weather-visual">
          <div className="sun"></div>
        </div>
      );
    }

    if (code <= 3) {
      return (
        <div className="weather-visual">
          <div className="cloud"></div>
        </div>
      );
    }

    return (
      <div className="weather-visual">
        <div className="rain"></div>
      </div>
    );
  }

  useEffect(() => {

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current=temperature_2m,relative_humidity_2m,precipitation,pressure_msl,wind_speed_10m,weather_code"
    )

      .then((response) => response.json())

      .then((data) => {

        setMeteo({
          temperature: data.current.temperature_2m,
          humidite: data.current.relative_humidity_2m,
          pluie: data.current.precipitation,
          vent: data.current.wind_speed_10m,
          pression: data.current.pressure_msl,
          code: data.current.weather_code,
        });

      });

  }, []);

  if (!meteo) {
    return <p>Chargement météo...</p>;
  }

  return (
    <section className="meteo-actuelle">

      <h2>CONDITIONS ACTUELLES</h2>

      <div className="meteo-top">

        {getWeatherVisual(meteo.code)}

        <div className="meteo-temp-block">
          <h1>{meteo.temperature}°C</h1>
          <p>Conditions actuelles</p>
        </div>

      </div>

      <div className="meteo-details">

        <div className="detail-row">
          <span>Pluie</span>
          <strong>{meteo.pluie} mm</strong>
        </div>

        <div className="detail-row">
          <span>Humidité</span>
          <strong>{meteo.humidite}%</strong>
        </div>

        <div className="detail-row">
          <span>Vent</span>
          <strong>{meteo.vent} km/h</strong>
        </div>

        <div className="detail-row">
          <span>Pression</span>
          <strong>{meteo.pression} hPa</strong>
        </div>

      </div>

    </section>
  );
}