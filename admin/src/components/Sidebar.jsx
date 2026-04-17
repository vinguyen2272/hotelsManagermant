
import { NavLink } from 'react-router-dom'
import { IoMdAddCircleOutline, IoIosLogOut } from "react-icons/io"
import { MdFormatListBulletedAdd, MdChecklistRtl } from "react-icons/md";
const Sidebar = ({ setToken }) => {
    return (
        <div className='w-[15%] min-h-screen border-r border-gray-200 bg-white'>

            {/* Logo */}
            <div className='mt-4 px-6'>
                <h2 className='text-2xl font-bold'>DELUXE HOTEL</h2>
            </div>

            {/* Menu */}
            <div className='flex flex-col gap-2 pt-6'>

                {/* Add Room */}
                <NavLink
                    to='/add'
                    className={({ isActive }) =>
                        `group flex items-center gap-3 px-4 py-3 text-gray-600 transition 
                        ${isActive ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`
                    }
                >
                    <IoMdAddCircleOutline className='text-2xl group-hover:text-white' />
                    <p className='hidden md:block text-base'>Add Room</p>
                </NavLink>

                {/* Room List */}
                <NavLink
                    to='/list'
                    className={({ isActive }) =>
                        `group flex items-center gap-3 px-4 py-3 text-gray-600 transition 
                        ${isActive ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`
                    }
                >
                    <MdFormatListBulletedAdd className='text-2xl group-hover:text-white' />
                    <p className='hidden md:block text-base'>Room List</p>
                </NavLink>

                {/* Reservation */}
                <NavLink
                    to='/reservation'
                    className={({ isActive }) =>
                        `group flex items-center gap-3 px-4 py-3 text-gray-600 transition 
                        ${isActive ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'}`
                    }
                >
                    <MdChecklistRtl className='text-2xl group-hover:text-white' />
                    <p className='hidden md:block text-base'>Reservation</p>
                </NavLink>

                {/* Logout */}
                <button onClick={() => setToken("")} className='group flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-orange-500 hover:text-white transition w-full text-left'>
                    <IoIosLogOut className='text-2xl group-hover:text-white' />
                    <p className='hidden md:block text-base'>Logout</p>
                </button>

            </div>
        </div>
    )
}

export default Sidebar