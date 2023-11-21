// React imports
import React from 'react'
// App imports
import images from '../../utils/constants'

 function NavBar() {
  console.log(images);
  console.log(images.header);
  console.log(images.header.logo);

  return (
    <div className='w-full bg-transparent'>
      <div className='md:flex items-center justify-between container mx-auto  py-4'>
        <div>
          <img width={'180px'} src={`${images.header.logo}`} alt='logo' />
        </div>
        <div>
        <ul className='flex items-center '>
          <li className='ml-10  text-fs-14 font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Home</a></li>
          <li className='ml-10  text-fs-14 font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Videos</a></li>
          <li className='ml-10  text-fs-14 font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Blogs</a></li>
          <li className='ml-10  text-fs-14 font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>About</a></li>
          <li className='ml-10  text-fs-14 font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Events</a></li>
          <li className='ml-10  text-fs-14 font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Partners</a></li>
          <li className='ml-10  text-fs-14 font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Contact</a></li>
          <li className='ml-10  text-fs-14 font-semibold cursor-pointer text-white'><a className='hover:border-b-2 '>Shop</a></li>
        </ul>
      </div>
      </div>
    </div>
  ) 
}
export default NavBar