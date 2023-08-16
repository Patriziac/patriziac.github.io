import { useEffect, useState } from 'react'
import { DateResume } from '../DateResume/DateResume'
import { TimeResume } from '../TimeResume/TimeResume'
import { WeatherResume } from '../Weather/WeatherResume'
import { DateTime } from '../../entities';
import { formatDateToISO, formatDateToISOHour } from '../../utils';
import './Intro.css';

export const Intro = () => {
  const [currentDateTime, setCurrentTime] = useState<DateTime | null>(null);
  const aDate = new Date();
  const [currentDate, setCurrentDate] = useState<string>(formatDateToISOHour(aDate));


  const getCurrentDateTime = () => {
    const nDate = new Date();

    const time = {
      localeTime: nDate.toLocaleTimeString('en-US'),
      localeDate: nDate.toLocaleDateString('en-US'),
      iso: formatDateToISO(nDate),
      isoHour: formatDateToISOHour(nDate)
    } as DateTime;

    // if (nDate.getMinutes() === 0 && nDate.getSeconds() === 0) {
    if (nDate.getSeconds() === 30) {
      setCurrentDate(time.isoHour);
    }

    setCurrentTime(time);
  }

  useEffect(() => {
    getCurrentDateTime();
    setInterval(getCurrentDateTime, 1000);
  }, []);

  return (
    <div className='intro-container'>
      <DateResume />
      <TimeResume currentDateTime={currentDateTime} />
      <WeatherResume currentDate={currentDate} />
    </div>
  )
}