import { Desktop } from './components/Desktop'
import { TaskBar } from './components/TaskBar'

function App() {
  return (
    <div className='h-screen w-screen flex flex-col bg-wallpaper bg-cover bg-no-repeat'>
      <Desktop />
      <TaskBar />
    </div>
  )
}

export default App
