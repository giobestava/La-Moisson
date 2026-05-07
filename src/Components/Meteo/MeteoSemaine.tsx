import { useEffect, useState } from "react";
import "./MeteoSemaine.css";

type JourMeteo = {
  jour: string;
  max: number;
  min: number;
  pluie: number;
  vent: number;
  code: number;
};

export default function MeteoSemaine() {

  const [semaine, setSemaine] = useState<JourMeteo[]>([]);

  useEffect(() => {

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=auto"
    )

      .then((response) => response.json())

      .then((data) => {

        const jours = data.daily.time.map(
          (_: string, index: number) => ({
            jour: new Date(data.daily.time[index])
              .toLocaleDateString("fr-FR", {
                weekday: "short",
              })
              .toUpperCase(),

            max: data.daily.temperature_2m_max[index],

            min: data.daily.temperature_2m_min[index],

            pluie: data.daily.precipitation_sum[index],

            vent: data.daily.wind_speed_10m_max[index],

            code: data.daily.weather_code[index],
          })
        );

        setSemaine(jours);

      });

  }, []);


  function getWeatherVisual(code: number) {

  if (code <= 1) {
    return <div className="mini-sun"></div>;
  }

  if (code <= 3) {
    return <div className="mini-cloud"></div>;
  }

  return <div className="mini-rain"></div>;
}



  return (
    <section className="meteo-semaine">

      <h2>PRÉVISIONS SUR 7 JOURS</h2>

      <div className="semaine-grid">

        {semaine.map((jour) => (

          <div className="jour-card" key={jour.jour}>

            <h3>{jour.jour}</h3>

           <div className="jour-sun">
              {getWeatherVisual(jour.code)}
            </div>

            <div className="jour-temp">
              <strong>{jour.max}°</strong>
              <span>{jour.min}°</span>
            </div>

            <div className="jour-details">
              <p>{jour.pluie} mm</p>
              <p>{jour.vent} km/h</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}