import { FC, useEffect, useState } from 'react';
import { useWeatherData } from '../../services';
import { Weather } from '../../entities';
import { WiSprinkle, WiStrongWind, WiThermometer } from "react-icons/wi";
import './WeatherResume.css';

interface IWeatherResume {
  currentDate: string;
}

export const WeatherResume: FC<IWeatherResume> = ({ currentDate }) => {
  const [weatherInfo, setWeatherInfo] = useState<Weather | null>(null);
  const [index, setIndex] = useState<number>(0);
  const { weather, loading } = useWeatherData(currentDate);


  useEffect(() => {
    if (!loading && weather) {
      setWeatherInfo(weather);
      const itemIndex = weather.hourly.time.findIndex(item => item === currentDate);
      itemIndex >= 0 && setIndex(itemIndex);
    }
  }, [loading, currentDate]);

  return (
    <>
      {
        (!loading && weatherInfo) &&
        <div className='weather'>
          <div className='weather__info'>
            <WiThermometer className="weather__icon pink" />
            <span>{weatherInfo?.hourly.temperature_2m[index]} {weatherInfo?.hourly_units.temperature_2m}</span>
          </div>
          <div className='weather__info'>
            <WiStrongWind className="weather__icon blue" />
            <span>{weatherInfo?.hourly.windspeed_10m[index]} {weatherInfo?.hourly_units.windspeed_10m}</span>
          </div>
          <div className='weather__info'>
            <WiSprinkle className="weather__icon purple" />
            <span>{weatherInfo?.hourly.precipitation_probability[index]} {weatherInfo?.hourly_units.precipitation_probability}</span>
          </div>
        </div>
      }
    </>
  )
}