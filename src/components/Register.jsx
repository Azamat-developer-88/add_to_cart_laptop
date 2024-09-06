import React from 'react'

function Register() {
  return (
    <div className='flex flex-col  mt-10 justify-center items-center '>
        <h2 className='text-3xl font-semibold'>Register Cart</h2>
        <div className='flex flex-col bg-slate-300 shadow-2xl shadow-black drop-shadow-2xl rounded-3xl gap-3 p-5'>
         <div className='flex gap-3'>
         <input className='p-3 rounded-xl ' type="text" placeholder='firstname' />
         <input className='p-3 rounded-xl ' type="text" placeholder='lastname' />
         </div>
          <input className='p-3 rounded-xl ' type="text" placeholder='email' />
          <input className='p-3 rounded-xl ' type="text" placeholder='username' />
         <div className='flex gap-3'>
         <input className='p-3 rounded-xl ' type="text" placeholder='password' />
         <input className='p-3 rounded-xl ' type="text" placeholder='confir mpassword' />
         </div>
          <button className='bg-gray-400 p-2 w-full rounded-md text-sm hover:bg-gray-400'>Register</button>
        </div>
    </div>
  )
}

export default Register
