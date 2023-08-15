import { useEffect, useState } from 'react'
import { DateResume } from '../DateResume/DateResume'
import { TimeResume } from '../TimeResume/TimeResume'
import { WeatherResume } from '../Weather/WeatherResume'
import { Time } from '../../entities';
import './Intro.css'

export const Intro = () => {
  const [currentDate, setCurrentDate] = useState<Time | null>(null);
  const [fullHour, setFullHour] = useState(false);

  const getCurrentTime = () => {
    const currentDate = new Date();
    const time = {
      iso8601: currentDate.toISOString().substring(0, 19),
      lcaleTimeString: currentDate.toLocaleTimeString('en-US')
    } as Time;

    if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
      setFullHour(true);
    }
    else {
      setFullHour(false);
    }

    setCurrentDate(time);
  }

  useEffect(() => {
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
  }, []);

  return (
    <div className='intro-container'>
      <DateResume />
      <TimeResume currentDate={currentDate} />
      <WeatherResume refresh={fullHour} />
    </div>
  )
}