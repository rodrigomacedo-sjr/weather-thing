const Parser = (() => {
  const responseToObject = function(raw) {
    console.log("today:");
    console.log(raw);
    const today = dayToObject(raw);
    today.location = raw.resolvedAddress;
    today.time = raw.currentConditions.dateTime;

    const week = [];
    for (const day of raw.days) {
      if (week.length >= 7) {
        break;
      }
      week.push(dayToObject(day));
    }

    return [today, week];
  };

  const dayToObject = function(raw) {
    console.log("day:");
    console.log(raw);
    return {
      conditions: raw.currentConditions?.conditions ?? "No conditions reported",
      temp: raw.currentConditions?.temp ?? "No temperature reported",
      feelsLike: raw.currentConditions?.feelsLike ?? "No thermal sensation reported",
      humidity: raw.currentConditions?.humidity ?? "No humidity reported",
      icon: raw.currentConditions?.icon ?? "default",
      precipProb: raw.currentConditions?.precipProb ?? "No precipitation data reported",
      visibility: raw.currentConditions?.visibility ?? "No visivility data reported",
      windspeed: raw.currentConditions?.windspeed ?? "No windspeed data reported",
    };
  };

  return {
    responseToObject,
  };
})();

export default Parser;
