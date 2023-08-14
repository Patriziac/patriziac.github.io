import { IntroDate } from '../IntroDate/IntroDate'
import { IntroTime } from '../IntroTime/IntroTime'
import { Weather } from '../Weather/Weather'
import './Intro.css'

export const Intro = () => {
  return (
    <div className='intro-container'>
      <IntroDate />
      <IntroTime />
      <Weather />
    </div>
  )
}