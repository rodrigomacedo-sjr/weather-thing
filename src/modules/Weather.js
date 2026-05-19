import Config from "./Config.js";
import Parser from "./Parser.js";
import WeekForecast from "../components/WeekForecast/WeekForecast.js";

const Weather = (() => {
  const query = async function(search = "Londrina - PR") {
    const sanitizedSearch = search.normalize();

    try {
      const raw = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${sanitizedSearch}?unitGroup=us&include=current&key=${Config.API_KEY}&contentType=json`,
      );
      const data = await raw.json();

      // TODO start loading

      return Parser.responseToObject(data);
    } catch (err) {
      console.log("error:");
      console.log(err);
    }
  };

  return {
    query,
  };
})();

export default Weather;
