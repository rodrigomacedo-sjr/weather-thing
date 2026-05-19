import "./week-forecast.css";
import DayForecast from "../DayForecast/DayForecast.js";

const WeekForecast = (() => {
  let self;

  const init = () => {
    const PREFIX = "week";
    const raw = `
    <div id="${PREFIX}">
      Children will go here
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

  init();

  return {
    self,
    update,
  };
})();

export default WeekForecast;
