import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import { useContext } from 'react'
import { userContext } from './Utilities/AuthContext'
import { FadeLoader } from 'react-spinners'

function App() {
  const { loading } = useContext(userContext);
  return (
    <div className="App">
      {
        loading ? <div className="h-screen w-full flex justify-center items-center ">
          <FadeLoader color="#36d7b7" />
        </div> :
          <>
            <NavBar />
            <Outlet />
          </>
      }
    </div>
  )
}

export default App
