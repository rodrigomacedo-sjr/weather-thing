import "./title.css";

const Title = (() => {
  let self;

  const init = () => {
    const fallback = "Weather Report";
    const PREFIX = "title";
    const raw = `
    <h1 id="${PREFIX}">
      ${fallback}
    </h1>
    `;

    const parsed = document.createRange().createContextualFragment(raw);

    self = parsed.querySelector("h1");
    return self;
  };

  const update = (title) => {
    self.innerText = title;
  };

  const reset = () => {
    self.innerText = fallback;
  }

  init();

  return {
    self,
    update,
    reset,
  };
})();

export default Title;
