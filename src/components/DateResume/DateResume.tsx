import './DateResume.css'


export const DateResume = () => {
  const event = new Date();
  const wd = event.toLocaleDateString('en-US', { weekday: 'long' });
  const localDate = event.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className='date'>
      <span className='date__weekday'>
        {wd}
      </span>
      <span className='date__resume'>
        {localDate}
      </span>
    </div>
  )
}