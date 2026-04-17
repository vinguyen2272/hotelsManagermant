import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'

const Reservation = () => {
    const [reservation, setReservation] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(backendUrl + '/api/reservation/get')
                setReservation(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchApi()
    }, [])
    const deleteReservation = async (id) => {
        const confirmDelete = window.confirm("Are you sure to delete this reservation?")
        if (!confirmDelete) return

        try {
            const res = await axios.post(`${backendUrl}/api/reservation/delete/${id}`)

            // vì BE của bạn KHÔNG trả success, nên check bằng message
            if (res.data.message) {
                // cập nhật UI ngay
                setReservation(prev => prev.filter(item => item._id !== id))
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='min-h-screen'>
            <h2 className='text-3xl font-bold text-gray-700 text-center mb-6'> Room Reservation</h2>
            <div className='overflow-x-auto'>
                <table className='w-full shadow-lg rounded-xl'>
                    <thead>
                        <tr className='bg-orange-500 text-left text-white'>
                            <th className='p-3'>Room Name</th>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Email</th>
                            <th className='p-3'>Phone</th>
                            <th className='p-3'>Guests</th>
                            <th className='p-3'>Check-in</th>
                            <th className='p-3'>Check-out</th>
                            <th className='p-3'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservation.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className='p-4 text-center'>No Reservation Available</td>
                                </tr>
                            ) : (
                                reservation.map((res, index) => (
                                    <tr key={index} className='border-b hover:bg-gray-200'>
                                        <td className='p-3'>{res.roomName}</td>
                                        <td className='p-3'>{res.name}</td>
                                        <td className='p-3'>{res.email}</td>
                                        <td className='p-3'>{res.phone}</td>
                                        <td className='p-3'>{res.guest}</td>
                                        <td className='p-3'>{res.checkin}</td>
                                        <td className='p-3'>{res.checkout}</td>
                                        <td>
                                            <button onClick={() => deleteReservation(res._id)} className='bg-red-600 text-white px-3 py-1 rounded cursor-pointer '>Delete</button>
                                        </td>

                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reservation