import { useEffect, useState } from 'react';
import { Weather } from '../entities';

export const useWeatherData = (refresh: boolean) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //https://open-meteo.com/
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=25.6751&longitude=-100.3185&hourly=temperature_2m,precipitation_probability,precipitation,rain,windspeed_10m&timezone=auto&forecast_days=1'); //

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const apiData = await response.json() as Weather;
        setWeather(apiData);
        console.log(apiData);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [refresh])


  return { weather, loading, error }
}