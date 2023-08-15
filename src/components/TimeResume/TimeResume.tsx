import { FC } from 'react';
import './TimeResume.css'
import { Time } from '../../entities';

interface ITimeResume {
  currentDate: Time | null;
}

export const TimeResume: FC<ITimeResume> = ({ currentDate }) => {

  return (
    <div className='time'>
      <span className='time-resume' data-isotime={currentDate?.iso8601}>
        {currentDate ? currentDate.lcaleTimeString : ''}
      </span>
    </div>
  )
}