import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchByCity = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`,
      );
      const data = await response.json();
      if (data.results) {
        setWeather(data.results);
        setError(null);
      } else {
        setError("Não foi possível obter os dados da cidade.");
      }
    } catch (err) {
      console.error("Erro na busca por cidade:", err);
      setError("Erro ao buscar dados do clima.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchByCoordinates(lat, lon) {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&lat=${lat}&lon=${lon}`,
        );
        const data = await response.json();
        if (data.results) {
          setWeather(data.results);
          setError(null);
        } else {
          setError("Não foi possível obter os dados do clima local.");
        }
      } catch (err) {
        console.error("Erro na busca por coordenadas:", err);
        setError("Erro ao buscar dados do clima.");
      } finally {
        setLoading(false);
      }
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchByCoordinates(latitude, longitude);
        },
        (err) => {
          console.error("Erro de geolocalização:", err);
          setError("Negada a permissão de localização. Digite manualmente");
          setLoading(false);
        },
      );
    } else {
      setError("Geolocalização não suportada pelo navegador.");
      setLoading(false);
    }
  }, []);

  return { weather, error, loading, fetchByCity };
}
