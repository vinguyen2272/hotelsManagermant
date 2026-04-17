import { useState } from 'react'
import { backendUrl } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({ setToken }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const adminLogin = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token)
                navigate('/add')
            } else {
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='flex justify-center items-center min-h-screen bg-gray-100'>
                <div className='bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md'>
                    <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Admin Login</h1>
                    <form onSubmit={adminLogin}>
                        <div className='mb-4'>
                            <p className='text-sm font-semibold text-gray-600 mb-2'>Email Address</p>
                            <input type="email" placeholder='Enter admin email' value={email} onChange={(e) => setEmail(e.target.value)} required className='w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800' />
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm font-semibold text-gray-600 mb-2'>Password</p>
                            <input type='password' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} required className='w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800' />
                        </div>
                        <button type='submit' className=' text-white w-full px-3 py-2 text-lg font-bold bg-orange-500 rounded-sm'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login