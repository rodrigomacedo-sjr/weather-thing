const Parser = (() => {
  const responseToObject = function(raw) {
    const week = [];
    for (const day in raw.days) {
      if (week.length >= 7) {
        break;
      }
      week.push(dayToObject(day));
    }

    return week;
  };

  const dayToObject = function(raw) {
    return {
      conditions: raw.currentConditions?.conditions ?? "No conditions reported",
      temp: raw.currentConditions?.temp ?? "No temperature reported",
      feelsLike:
        raw.currentConditions?.feelsLike ?? "No thermal sensation reported",
      humidity: raw.currentConditions?.humidity ?? "No humidity reported",
      icon: raw.currentConditions?.icon ?? "default",
      precipProb:
        raw.currentConditions?.precipProb ?? "No precipitation data reported",
      visibility:
        raw.currentConditions?.visibility ?? "No visibility data reported",
      windspeed:
        raw.currentConditions?.windspeed ?? "No windspeed data reported",
    };
  };

  return {
    responseToObject,
  };
})();

export default Parser;
