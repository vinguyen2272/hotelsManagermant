import React from 'react'
import { Link } from 'react-router-dom'
const adminUrl = import.meta.env.VITE_ADMIN_URL

const Navbar = () => {
    return (
        <nav className='flex justify-between p-[2rem] bg-black text-white' >
            <Link to='/'>
                <div>
                    <h2 className='font-bold text-2xl'>DELUXE <span className='text-lime-400'> HOTELS</span></h2>
                </div></Link>
            <div>
                <ul className='flex justify-between gap-8'>
                    {/* <li className='font-bold text-lg cursor-pointer  hover:text-lime-500'>BOOKINGS</li>
                    <li className='font-bold text-lg cursor-pointer  hover:text-lime-500'>ROOMS</li>
                    <li className='font-bold text-lg cursor-pointer  hover:text-lime-500'>CONTACT</li> */}
                    <li className='font-bold text-lg cursor-pointer  hover:text-lime-500'>
                        <a
                            href={adminUrl}
                            className='text-lime-400 hover:text-white'
                        >
                            ADMIN
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar