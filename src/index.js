import SearchBar from "./components/SearchBar/SearchBar.js";
import WeekForecast from "./components/WeekForecast/WeekForecast.js";
import Title from "./components/Title/Title.js";
import "./css/style.css";
import Renderer from "./modules/Renderer.js";
import Weather from "./modules/Weather.js";

window.w = Weather;
Renderer.setupLayout([Title.self, SearchBar, WeekForecast.self]);
