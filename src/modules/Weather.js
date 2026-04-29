import Config from "./Config.js";
import Parser from "./Parser.js";

const Weather = (() => {
  const query = async function(search = "Londrina - PR") {
    const sanitizedSearch = Parser.sanitize(search);
    try {
      const raw = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${sanitizedSearch}?unitGroup=us&include=current&key=${Config.API_KEY}&contentType=json`,
      );
      const data = raw.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return {
    query,
  };
})();

export default Weather;
