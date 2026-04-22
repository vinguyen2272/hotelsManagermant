
import { createContext, useEffect, useState } from 'react'
import axios from "axios"
import { backendUrl } from '../App'

export const RoomContext = createContext()

const RoomContextProvider = ({ children }) => {
    const [rooms, setRooms] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchApi = async (retry = 3) => {
        try {
            const res = await axios.get(`${backendUrl}/api/hotel/list`)

            if (res.data.success) {
                setRooms(res.data.hotels)
            } else {
                setError("API trả về không thành công")
            }

            setLoading(false)
        } catch (err) {
            if (retry > 0) {
                setTimeout(() => fetchApi(retry - 1), 1500)
            } else {
                console.log(err)
                setError("Không thể tải dữ liệu")
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

