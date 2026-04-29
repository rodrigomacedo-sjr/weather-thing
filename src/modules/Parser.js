const Parser = (() => {
  const sanitize = (raw) => {
    return raw.normalize();
  };

  return {
    sanitize,
  };
})();

export default Parser;
