import { useEffect, useState } from 'react'
import './App.css'
import { Intro } from './components/Intro/Intro'

function App() {
  const [introScreen, setIntroScreen] = useState(true);

  const changeIntroScreen = () => {
    setIntroScreen(false);
  }


  useEffect(() => {
    setTimeout(changeIntroScreen, 5000);
  }, [])

  return (
    <>
      {
        introScreen ? (
          <div className={`logo text-focus-in ${introScreen ? '' : 'fade-out'}`}>
            <h1 className=''>Patriziac</h1>
            <div className='scale-up-left logo-borderline'></div>
          </div>)
          :
          <Intro />
      }

    </>
  )
}

export default App
