import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { MdDeleteForever } from 'react-icons/md'

const ListHotel = ({ token }) => {
    const [list, setList] = useState([])

    const fetchRoomList = async () => {
        try {
            const res = await axios.get(backendUrl + '/api/hotel/list', { headers: { token } })
            console.log("URL:", backendUrl + '/api/hotel/list')
            if (res.data.success) {
                setList(res.data.hotels)

            } else {
                console.log(res.data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchRoomList()
    }, [])
    const deleteHotel = async (id) => {
        try {
            const res = await axios.post(
                backendUrl + '/api/hotel/remove',
                { _id: id },
                { headers: { token } }
            )

            if (res.data.success) {
                await fetchRoomList()
            } else {
                console.log(res.data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <p className='mb-2 font-bold text-2xl'>Hotel Rooms List</p>

            <div className='flex flex-col gap-2'>
                <div className='grid grid-cols-[1fr_3fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg font-semibold'>
                    <b>Image</b>
                    <b>Room name</b>
                    <b>Price</b>
                    <b className='text-center'>Delete</b>
                </div>

                {list?.map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg'>
                        <img src={item.image} className='w-[50px] h-auto' />
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <MdDeleteForever onClick={() => deleteHotel(item._id)} className='ml-10 text-[28px] cursor-pointer text-red-600' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListHotel