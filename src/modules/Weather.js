import Config from "./Config.js";
import Parser from "./Parser.js";

const Weather = (() => {
  const query = async function(search = "Londrina - PR") {
    const sanitizedSearch = search.normalize();

    try {
      const raw = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${sanitizedSearch}?unitGroup=us&include=current&key=${Config.API_KEY}&contentType=json`,
      );
      const data = await raw.json();

      const weather = Parser.responseToObject(data);

      console.log("weather:");
      console.log(weather);
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
