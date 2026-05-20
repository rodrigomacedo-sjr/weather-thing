const Parser = (() => {
  const responseToObject = function(raw) {
    const week = [];
    for (const day of raw.days) {
      if (week.length >= 7) {
        break;
      }
      week.push(dayToObject(day));
    }

    return {
      place: raw["resolvedAddress"],
      week: week,
    };
  };

  const dayToObject = function(raw) {
    const date = new Date(raw.datetime.replace("-", "/"));
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    return {
      dayOfWeek: dayOfWeek,
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
