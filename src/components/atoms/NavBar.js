import React from 'react'
import images from '../utils/constants'

 function NavBar() {
  return (
    <div className='w-full fixed top-0 left-0 bg-black'>
      <div className='md:flex m-2 items-center justify-between container mx-auto px-2 py-4'>
        <div>
          <img src={images.header.logo} />
        </div>
        <div>
        <ul className='md:flex md:items-center '>
          <li className='md:ml-8 font-Poppins text-sm font-semibold text-white'><a className='hover:border-b-2 '>Home</a></li>
          <li className='md:ml-8 font-Poppins text-sm font-semibold text-white'><a className='hover:border-b-2 '>Videos</a></li>
          <li className='md:ml-8 font-Poppins text-sm font-semibold text-white'><a className='hover:border-b-2 '>Blogs</a></li>
          <li className='md:ml-8 font-Poppins text-sm font-semibold text-white'><a className='hover:border-b-2 '>About</a></li>
          <li className='md:ml-8 font-Poppins text-sm font-semibold text-white'><a className='hover:border-b-2 '>Events</a></li>
          <li className='md:ml-8 font-Poppins text-sm font-semibold text-white'><a className='hover:border-b-2 '>Partners</a></li>
          <li className='md:ml-8 font-Poppins text-sm font-semibold text-white'><a className='hover:border-b-2 '>Contact</a></li>
          <li className='md:ml-8 font-Poppins text-sm font-semibold text-white'><a className='hover:border-b-2 '>Shop</a></li>
        </ul>
      </div>
      </div>
    </div>
  ) 
}
export default NavBar