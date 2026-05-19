import "./day-forecast.css";
import iconDictionary from "../../modules/IconDict.js";

const DayForecast = (() => {
  const create = (dayForecast) => {
    const PREFIX = "forecard";
    const raw = `
    <div class="${PREFIX}">
      /*<h1 class="${PREFIX}-weekday">${dayForecast.weekDay}</h1>*/
      <p class="${PREFIX}-date">${dayForecast.date}</p>

      <img class="${PREFIX}-img" src="${iconDictionary[dayForecast.icon] ?? iconDictionary["na"]}">

      <h2 class=${PREFIX}-conditions>${dayForecast.conditions}</h2>

      <div class="${PREFIX}-temp-div">
        <h2 class=${PREFIX}-temp>${dayForecast.temp}</h2>
        <img class=${PREFIX}-thermo src="${iconDictionary["thermometer"]}">
      </div>

      <p class=${PREFIX}-desc>${dayForecast.description}</p>
    </div>
    `;

    const parsed = document.createRange().createContextualFragment(raw);

    return parsed.querySelector("div");
  };

  return {
    create,
  };
})();

export default DayForecast;
