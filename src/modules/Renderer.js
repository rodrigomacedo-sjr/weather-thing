const Renderer = (() => {
  const parseRawString = (raw, parentId) => {
    return document
      .createRange()
      .createContextualFragment(raw)
      .querySelector(`#${parentId}`);
  };

  let baseLayout = parseRawString(
    `<div id="content"><h1>Setup Layout</h1></div>`,
    "content",
  );

  const resetLayout = () => {
    document.body.innerHTML = "";
    document.body.appendChild(baseLayout);
  };

  const setupLayout = (elements) => {
    baseLayout = parseRawString(`<div id="content"></div>`, "content");
    for (const element of elements) {
      baseLayout.appendChild(element);
    }
    resetLayout();
  };

  return {
    parseRawString,
    resetLayout,
    setupLayout,
  };
})();

export default Renderer;
