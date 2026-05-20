import "./week-forecast.css";
import DayForecast from "../DayForecast/DayForecast.js";

const WeekForecast = (() => {
  let self;

  const init = () => {
    const PREFIX = "week";
    const raw = `
    <div id="${PREFIX}">
    </div>
    `;

    const parsed = document.createRange().createContextualFragment(raw);

    self = parsed.querySelector("div");
    return self;
  };

  const update = (weekForecast) => {
    self.replaceChildren();

    for (const day of weekForecast) {
      self.appendChild(DayForecast.create(day));
    }
  };

  const error = () => {
    const sad = document.createElement("h1");
    sad.innerText = ":(";
    sad.className = "title";

    self.replaceChildren(sad);
  };

  init();

  return {
    self,
    update,
    error,
  };
})();

export default WeekForecast;
