import { Route, Routes } from 'react-router'
import './App.css'
import Register from './Components/Register'
import Profile from './Components/Profile'





function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>

    </>
  )
}

export default App
