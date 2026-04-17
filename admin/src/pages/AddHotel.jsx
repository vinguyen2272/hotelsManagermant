import React, { useState } from 'react'
import defaultImg from '../assets/defaultImg.jpeg'
import axios from 'axios'
import { backendUrl } from '../App'

const AddHotel = (token) => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const roomSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            if (image) formData.append("image", image)
            const res = await axios.post(`${backendUrl}/api/hotel/add`, formData, { headers: { token } })
            if (res.data.success) {
                console.log(res.data.message)
                setName("")
                setDescription("")
                setPrice("")
                setImage(null)
            } else {
                console.log(error)
            }
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div>
            <form onSubmit={roomSubmit} className='flex flex-col items-start gap-1'>
                <div>
                    <p>Upload Image</p>

                    <div>
                        <label htmlFor="image">
                            <img src={!image ? defaultImg : URL.createObjectURL(image)} alt="" className='w-32 cursor-pointer' />
                            <input type='file' id='image' onChange={(e) => setImage(e.target.files[0])} hidden />
                        </label>
                    </div>
                </div>

                <div className='w-full'>
                    <p className='mb-2 text-[22px]'>Room Name</p>
                    <input type="text" placeholder='Enter room name' value={name} onChange={(e) => setName(e.target.value)} className='w-full max-w-[500px] p-4 border border-gray-300 rounded' />
                </div>

                <div className='w-full'>
                    <p>Room Description</p>
                    <input type="text" placeholder='Enter room description' value={description} onChange={(e) => setDescription(e.target.value)} className='w-full max-w-[500px] p-4 border border-gray-300 rounded' />
                </div>


                <div className='w-full'>
                    <p className='mb-2 text-[22px]'>Price</p>
                    <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} className='w-full max-w-[500px] p-4 border border-gray-300 rounded' />
                </div>
                <button type='submit' className='mt-6 px-20 py-3 bg-orange-500 rounded text-white'>Add Room</button>
            </form>
        </div>
    )
}

export default AddHotel