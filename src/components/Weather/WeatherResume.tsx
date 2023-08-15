import { FC, useEffect, useState } from 'react';
import { useWeatherData } from '../../services';
import { Weather } from '../../entities';
import './WeatherResume.css';

interface IWeatherResume {
  refresh: boolean;
}

export const WeatherResume: FC<IWeatherResume> = ({ refresh }) => {
  const [weatherInfo, setWeatherInfo] = useState<Weather | null>(null);
  const { weather, loading } = useWeatherData(refresh);

  useEffect(() => {
    if (!loading && weather) {
      setWeatherInfo(weather);
    }
  }, [loading]);

  return (
    <>
      {
        (!loading && weatherInfo) && (
          <div className='weather'>
            <div>
              <div className='icon pink'></div>
              <span>{weatherInfo?.hourly.temperature_2m[0]} {weatherInfo?.hourly_units.temperature_2m}</span>
            </div>
            <div>
              <div className='icon blue'></div>
              <span>{weatherInfo?.hourly.windspeed_10m[0]} {weatherInfo?.hourly_units.windspeed_10m}</span>
            </div>
            <div>
              <div className='icon purple'></div>
              <span>{weatherInfo?.hourly.precipitation_probability[0]} {weatherInfo?.hourly_units.precipitation_probability}</span>
            </div>
          </div>
        )
      }
    </>
  )
}