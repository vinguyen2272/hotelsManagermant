import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import AddHotel from './pages/AddHotel'
import ListHotel from './pages/ListHotel'
import Reservation from './pages/Reservation'


export const backendUrl = import.meta.env.VITE_BACKEND_URL
const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token'))
  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])
  return (
    <div className='bg-white min-h-screen'>
      {

        !token ? (
          <Login setToken={setToken} />
        ) : (
          <><div className='flex w-full'>
            <Sidebar setToken={setToken} />
            <div className='w-[85%] ml-[max(5vw,25px)] my-8 text-black text-base'>
              <Routes>
                <Route path='/add' element={<AddHotel token={token} />} />
                <Route path='/list' element={<ListHotel token={token} />} />
                <Route path='/reservation' element={<Reservation />} />
              </Routes>
            </div>
          </div>
          </>
        )
      }
    </div>
  )
}

export default App