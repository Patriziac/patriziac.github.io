import './Weather.css'


export const Weather = () => {

  return (
    <div className='weather'>
      <div>
        <div className='icon pink'></div>
        <span>32*</span>
      </div>
      <div>
        <div className='icon blue'></div>
        <span>3m/s</span>
      </div>
      <div>
        <div className='icon purple'></div>
        <span>0%</span>
      </div>
    </div>
  )
}