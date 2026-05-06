import SearchBar from "./components/SearchBar/SearchBar.js";
import "./css/style.css";
import Renderer from "./modules/Renderer.js";
import Weather from "./modules/Weather.js";

window.w = Weather;
Renderer.setupLayout([SearchBar]);
