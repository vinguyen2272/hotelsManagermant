import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='flex flex-col gap-12 px-6 md:px-16 py-16 bg-black text-white'>
            {/* Top Section */}
            <div className='grid place-content-center gap-6 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold'>
                    Sign up For Exclusive Offers
                </h2>

                <div className='flex items-center justify-center max-w-xl mx-auto w-full'>
                    <input
                        type="email"
                        placeholder='Enter your email address'
                        className='flex-grow px-6 py-4 border-2 border-r-0 border-lime-500 rounded-l-full outline-none text-sm text-black'
                    />
                    <button className='bg-lime-400 text-black px-6 md:px-8 py-4 rounded-r-full font-bold'>
                        Join Now
                    </button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='flex flex-col md:flex-row justify-between items-center text-center gap-8'>
                <div>
                    <h2 className='text-2xl font-bold'>DELUXE HOTELS</h2>
                    <div className='flex justify-center gap-4 mt-3 text-lime-300'>
                        <FaFacebook className='text-3xl cursor-pointer hover:scale-110 transition' />
                        <FaInstagram className='text-3xl cursor-pointer hover:scale-110 transition' />
                        <FaYoutube className='text-3xl cursor-pointer hover:scale-110 transition' />
                    </div>
                </div>

                <div>
                    <ul className='flex flex-wrap gap-6 justify-center text-base font-medium'>
                        <li className='cursor-pointer hover:text-lime-400'>HOME</li>
                        <li className='cursor-pointer hover:text-lime-400'>BOOKINGS</li>
                        <li className='cursor-pointer hover:text-lime-400'>ROOMS</li>
                        <li className='cursor-pointer hover:text-lime-400'>CONTACT</li>
                    </ul>
                </div>
            </div>

            <p className='text-center text-sm mt-4 text-gray-400'>
                © {new Date().getFullYear()} DELUXE HOTELS All rights reserved
            </p>
        </div>
    )
}

export default Footer