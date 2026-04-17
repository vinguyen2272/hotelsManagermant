
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Detail from './pages/Detail'
import Footer from './components/Footer'

export const backendUrl = 'http://localhost:4000'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
