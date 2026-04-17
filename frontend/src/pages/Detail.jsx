import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaConciergeBell, FaSwimmingPool, FaTv, FaUtensils, FaWifi } from 'react-icons/fa'
import { RoomContext } from '../context/RoomContext'
import axios from 'axios'
import { backendUrl } from '../App'

const Detail = () => {

    const { rooms } = useContext(RoomContext)
    const { id } = useParams()

    const room = rooms.find(item => item._id === id)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkin: '',
        checkout: '',
        guest: 1
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`${backendUrl}/api/reservation/create`, {
                ...formData,
                roomName: room.name,
                roomId: room._id
            })

            if (res.data.message) {
                alert("Booking successful!")

                // reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    checkin: '',
                    checkout: '',
                    guest: 1
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    if (!room) return <p>Loading...</p>

    return (
        <div className='mx-auto max-w-7xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Left side */}
            <div className='md:col-span-2 space-y-6'>
                <div>
                    <h1 className='text-3xl font-bold'>{room.name}</h1>
                    <p className='text-xl text-lime-500 mt-1'>${room.price}</p>
                </div>

                <img
                    src={room.image}
                    alt={room.name}
                    className='w-full rounded-lg shadow-md'
                />

                <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-3'>Amenities</h2>

                    <div className='grid grid-cols-2 gap-4 text-gray-700'>
                        <div className='flex items-center gap-2'><FaWifi /> Wifi</div>
                        <div className='flex items-center gap-2'><FaTv /> Cable TV</div>
                        <div className='flex items-center gap-2'><FaUtensils /> Restaurant</div>
                        <div className='flex items-center gap-2'><FaSwimmingPool /> Pool</div>
                        <div className='flex items-center gap-2'><FaConciergeBell /> Room Service</div>
                    </div>

                    <div className='mt-4'>
                        <h2 className='text-lg font-semibold mb-2'>Room Description</h2>
                        <p className='text-gray-600'>{room.description}</p>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className='bg-white p-6 mt-16 md:mt-0 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-4'>Book Your Stay</h2>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder='Name'
                        className='w-full border p-3 rounded-lg'
                    />

                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        className='w-full border p-3 rounded-lg'
                    />

                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder='Phone Number'
                        className='w-full border p-3 rounded-lg'
                    />

                    <div>
                        <label className='font-bold'>Check-In</label>
                        <input
                            name="checkin"
                            value={formData.checkin}
                            onChange={handleChange}
                            type="date"
                            className='w-full border p-3 rounded-lg'
                        />
                    </div>

                    <div>
                        <label className='font-bold'>Check-Out</label>
                        <input
                            name="checkout"
                            value={formData.checkout}
                            onChange={handleChange}
                            type="date"
                            className='w-full border p-3 rounded-lg'
                        />
                    </div>

                    <div>
                        <label className='font-bold'>Number of Guests</label>
                        <select
                            name="guest"
                            value={formData.guest}
                            onChange={handleChange}
                            className='w-full p-3 border rounded-lg'
                        >
                            {[...Array(3)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1} Guest(s)
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-300 transition'>
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Detail