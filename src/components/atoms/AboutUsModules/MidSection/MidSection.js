// React imports
import React from 'react'
// App imports
import images from '../../../utils/constants'

const MidSection = ({}) =>{
  return (
    <div className='bg-darkBlue relative  px-10 md:px-0'>
        <div className='relative container '>
        <div className='flex flex-col items-center'>
        <div className=' -mt-[6%] absolute z-20  m-auto'>
            <div className='w-full text-center'><img className='m-auto' src={images.body.about_img} /></div>
        </div>
        </div>
        </div>
        <div className='relative py-10 md:py-32'></div>
    </div>
  )
}

export default MidSection