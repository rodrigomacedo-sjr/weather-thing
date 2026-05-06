import "./search-bar.css";
import Weather from "../../modules/Weather.js";

const SearchBar = (() => {
  const PREFIX = "sbar";
  const raw = `
  <form id="${PREFIX}">
    <input type="text" id="${PREFIX}-input" name="search">
    <button>search</button>
  </form>
  `;

  const parsed = document.createRange().createContextualFragment(raw);

  const form = parsed.querySelector("form");
  const searchBtn = parsed.querySelector("button");

  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());

    Weather.query(obj.search);

    form.reset();
  });

  return form;
})();

export default SearchBar;
