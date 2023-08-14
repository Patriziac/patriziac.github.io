import { useEffect, useState } from 'react';
import './IntroTime.css'


export const IntroTime = () => {
  const [currentDate, setCurrentDate] = useState("");


  const getCurrentTime = () => {
    const event = new Date();
    const localTime = event.toLocaleTimeString('en-US');

    setCurrentDate(localTime);
  }


  useEffect(() => {
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
  }, [])


  return (
    <div className='time'>
      <span className='time-resume'>
        {currentDate}
      </span>
    </div>
  )
}