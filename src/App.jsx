import { useState } from 'react'
import { Desktop } from './components/Desktop'
import { StartMenu } from './components/StartMenu'
import { TaskBar } from './components/TaskBar'

function App() {
  const [startMenu, setStartMenu] = useState(false)

  return (
    <div className='h-screen w-screen bg-wallpaper bg-cover bg-no-repeat'>
      <div className='absolute top-0 w-screen h-[calc(100vh_-_48px)]'>
        <Desktop />
        {startMenu &&
          <StartMenu />
        }
      </div>
      <TaskBar startMenu={startMenu} setStartMenu={setStartMenu} />
    </div>
  )
}

export default App
