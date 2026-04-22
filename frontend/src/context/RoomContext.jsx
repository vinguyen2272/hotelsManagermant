
import { createContext, useEffect, useState } from 'react'
import axios from "axios"
import { backendUrl } from '../App'

export const RoomContext = createContext()

const RoomContextProvider = ({ children }) => {
    const [rooms, setRooms] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchApi = async (retry = 5) => {
        try {
            const res = await axios.get(`${backendUrl}/api/hotel/list`)

            if (res.data.success) {
                setRooms(res.data.hotels)
                setLoading(false)
            } else {
                throw new Error("API failed")
            }

        } catch (err) {
            console.log("Retry:", retry)

            if (retry > 0) {
                setTimeout(() => fetchApi(retry - 1), 2000)
            } else {
                setError("Server đang sleep hoặc lỗi")
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <RoomContext.Provider value={{ rooms, loading, error }}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomContextProvider

