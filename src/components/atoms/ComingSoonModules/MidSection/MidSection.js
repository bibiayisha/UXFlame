// React imports
import React from 'react'
// App imports
import images from '../../../utils/constants'

const MidSection = ({}) =>{
  return (
    <div className='bg-darkBlue relative  px-10 md:px-0'>
        <div className='relative container '>
        <div className='flex flex-col items-center'>
        <div className=' bg-offBlue pt-20 -mt-[2%] absolute z-20 mb-20 m-auto w-full'>
            <div className='text-center '><p className='text-white text-center font-bold text-4xl md:text-5xl'>Something is</p></div>
            <div className='text-center'><p className='uppercase text-orange py-6 text-center font-black text-6xl md:text-7xl'>coming soon !</p></div>
            <div className='w-full text-center'><img className='m-auto' src={images.body.contact_img} /></div>
        </div>
        </div>
        </div>
        <div className='relative py-60 md:py-80'></div>
    </div>
  )
}

export default MidSection