import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
function Login() {
  return (
    <div className=' flex bg-slate-100 justify-center items-center h-screen'>
      <div className='bg-zinc-200 shadow-2xl shadow-black drop-shadow-2xl flex flex-col gap-3 p-5 rounded-2xl '>
      <input className='p-2 rounded-xl' type="text" placeholder='username' pattern='^[a-zA-Z0-9]+$'/>
      <input className='p-2 rounded-xl' type="text" placeholder='password' pattern='^[a-zA-Z0-9]+$'/>
      <span>You are a new user?<br />  <Link className='text-blue-500' to='/register'>Registr</Link></span>
      <button className='bg-gray-300 p-2 w-full rounded-md text-sm hover:bg-gray-400'>Login</button>
      </div>
    </div>
  )
}

export default Login
