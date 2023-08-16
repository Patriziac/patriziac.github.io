import { FC } from 'react';
import './TimeResume.css'
import { DateTime } from '../../entities';

interface ITimeResume {
  currentDateTime: DateTime | null;
}

export const TimeResume: FC<ITimeResume> = ({ currentDateTime }) => {

  return (
    <div className='time'>
      <span className='time-resume'>
        {currentDateTime ? currentDateTime.localeTime : ''}
      </span>
    </div>
  )
}