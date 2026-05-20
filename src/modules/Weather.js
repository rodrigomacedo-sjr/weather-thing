import Config from "./Config.js";
import Parser from "./Parser.js";
import WeekForecast from "../components/WeekForecast/WeekForecast.js";
import Title from "../components/Title/Title.js";


const Weather = (() => {
  const query = async function(search = "Londrina - PR") {
    const sanitizedSearch = search.normalize();

    try {
      Title.update("loading...");

      const raw = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${sanitizedSearch}?unitGroup=us&include=current&key=${Config.API_KEY}&contentType=json`,
      );
      const data = await raw.json();


      return Parser.responseToObject(data);
    } catch (err) {
      Title.update("error // Not Found");
      WeekForecast.error();
      console.log("error:");
      console.log(err);
    }
  };

  return {
    query,
  };
})();

export default Weather;
