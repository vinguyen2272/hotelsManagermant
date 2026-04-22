import { createContext, useEffect, useState } from 'react'
import { roomData } from '../assets/asset'
import axios from "axios"
import { backendUrl } from '../App'

export const RoomContext = createContext()

const RoomContextProvider = ({ children }) => {
    const [rooms, setRooms] = useState(roomData)

    const fetchApi = async (retry = 3) => {
        try {
            const res = await axios.get(`${backendUrl}/api/hotel/list`)
            if (res.data.success) {
                setRooms(res.data.hotels)
            }
        } catch (error) {
            if (retry > 0) {
                setTimeout(() => fetchApi(retry - 1), 1500)
            } else {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <RoomContext.Provider value={{ rooms }}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomContextProvider