// React imports
import React from 'react'
// App imports
import images from '../../../utils/constants'

const MidSection = ({}) =>{
  return (
    <div className='bg-darkBlue relative -mt-0'>
        <div className='relative container'>
        <div className='container bg-offBlue pt-20 -mt-[2%] absolute z-20 mb-20'>
            <div className='text-center '><p className='text-white text-center font-bold text-5xl'>Something is</p></div>
            <div className='text-center'><p className='uppercase text-orange py-6 text-center font-black text-7xl'>coming soon !</p></div>
            <div className='w-full text-center'><img className='m-auto' src={images.body.contact_img} /></div>
        </div>
        </div>
        <div className='relative py-80'></div>
    </div>
  )
}

export default MidSection