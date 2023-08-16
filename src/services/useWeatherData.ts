import { useEffect, useState } from 'react';
import { Weather } from '../entities';

export const useWeatherData = (currentDate: string) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=25.6751&longitude=-100.3185&hourly=temperature_2m,precipitation_probability,precipitation,rain,windspeed_10m&timezone=auto&forecast_days=1'); //https://open-meteo.com/

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const apiData = await response.json() as Weather;
        setWeather(apiData);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [currentDate])


  return { weather, loading, error }
}