
import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import { FaBath, FaBed, FaUserFriends, FaWifi } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const amenitiesList = [
    { label: '1-2 Persons', icon: <FaUserFriends className='text-gray-600' /> },
    { label: 'Bathroom', icon: <FaBath className='text-gray-600' /> },
    { label: 'King size Bed', icon: <FaBed className='text-gray-600' /> },
    { label: 'Free wifi', icon: <FaWifi className='text-gray-600' /> },
]

const HotelList = () => {
    const { rooms, loading, error } = useContext(RoomContext)

    if (loading) {
        return (
            <div className='text-center py-20 text-gray-600'>
                Loading rooms...
            </div>
        )
    }

    if (error) {
        return (
            <div className='text-center py-20 text-red-500'>
                {error}
            </div>
        )
    }

    return (
        <div className='bg-[#f7f0eb] py-16 px-4'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-4xl font-serif text-center mb-12 text-gray-800'>
                    Book your stay and <br /> relax in luxury
                </h2>
            </div>

            <div className='grid grid-cols-2 gap-10'>
                {
                    rooms && rooms.length > 0 ? (
                        rooms.map((room) => {
                            const { _id: id, image, name, price } = room

                            return (
                                <div key={id} className='bg-white shadow rounded-lg overflow-hidden'>
                                    <Link to={`/detail/${id}`}>
                                        <img src={image} alt={name} className='w-full h-80 object-cover' />
                                    </Link>

                                    <div className='p-5'>
                                        <h3 className='text-2xl font-semibold text-gray-800 mb-1'>
                                            {name}
                                        </h3>

                                        <p className='text-gray-600 text-lg mb-4'>
                                            ${price}
                                        </p>

                                        <div className='grid grid-cols-2 gap-4 text-base text-gray-700'>
                                            {
                                                amenitiesList.map((amenity, index) => (
                                                    <div key={index} className='flex items-center gap-2'>
                                                        {amenity.icon}
                                                        <span>{amenity.label}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <p className='text-gray-500 text-center col-span-full'>
                            No rooms available
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default HotelList

