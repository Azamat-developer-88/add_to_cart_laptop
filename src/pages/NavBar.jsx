import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex gap-3  text-black p-2'>
        <Link className='border-2 p-2 rounded-2xl hover:bg-gray-400 shadow-xl  border-black ' to="/login">Login</Link>
        <Link className='border-2 p-2 rounded-2xl hover:bg-gray-400 shadow-xl  border-black ' to="/register">Register</Link>
    </div>
  )
}

export default NavBar
