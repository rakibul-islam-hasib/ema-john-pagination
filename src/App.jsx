import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Shop from './components/Shop/Shop'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
