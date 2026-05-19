const Parser = (() => {
  const responseToObject = function(raw) {
    const week = [];
    for (const day of raw.days) {
      if (week.length >= 7) {
        break;
      }
      week.push(dayToObject(day));
    }

    return week;
  };

  const dayToObject = function(raw) {
    console.log(raw);
    return {
      date: raw.datetime,
      conditions: raw.conditions ?? "No conditions reported",
      temp: raw.temp ?? "No temperature reported",
      icon: raw.icon ?? "default",
      description: raw.description ?? "No description reported",
    };
  };

  return {
    responseToObject,
  };
})();

export default Parser;
