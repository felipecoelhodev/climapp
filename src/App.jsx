import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/Forecast/ForecastList";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const { weather, loading, error, fetchByCity } = useWeather();

  return (
    <div className="app-container">
      <SearchBar onSearch={fetchByCity} />
      {loading ? (
        <Loading />
      ) : weather ? (
        <>
          <h1>
            {weather.city}{" "}
            <span>
              Nascer do Sol: {weather.sunrise} | Pôr do Sol: {weather.sunset}
            </span>
          </h1>
          <WeatherCard weather={weather} />
          <ForecastList forecasts={weather.forecast.slice(1, 4)} />
        </>
      ) : (
        <p className="error-message">
          {error || "Digite uma cidade para buscar o clima."}
        </p>
      )}
    </div>
  );
}

export default App;
