// React imports
import React from 'react'
// App imports
import images from '../utils/constants'

 function NavBar() {
  return (
    <div className='w-full bg-black'>
      <div className='md:flex items-center justify-between container mx-auto px-24 py-4'>
        <div>
          <img src={images.header.logo} />
        </div>
        <div>
        <ul className='md:flex md:items-center '>
          <li className='md:ml-14 font-Poppins text-sm font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Home</a></li>
          <li className='md:ml-14 font-Poppins text-sm font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Videos</a></li>
          <li className='md:ml-14 font-Poppins text-sm font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Blogs</a></li>
          <li className='md:ml-14 font-Poppins text-sm font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>About</a></li>
          <li className='md:ml-14 font-Poppins text-sm font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Events</a></li>
          <li className='md:ml-14 font-Poppins text-sm font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Partners</a></li>
          <li className='md:ml-14 font-Poppins text-sm font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Contact</a></li>
          <li className='md:ml-14 font-Poppins text-sm font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Shop</a></li>
        </ul>
      </div>
      </div>
    </div>
  ) 
}
export default NavBar