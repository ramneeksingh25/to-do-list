import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='fixed left-0 top-0 w-full h-screen bg-zinc-800'>
      <NavBar/>
      <Background/>
      <Foreground/>
      
    </div>
  )
}

export default App
