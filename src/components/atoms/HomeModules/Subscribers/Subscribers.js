// React imports
import React from 'react'
// App imports
import images from '../../../utils/constants'
import { Typography } from '@mui/material'
import './Subscribers.css'
import { count } from '../../../utils/specialVars'

function Subscribers() {
  return (
    <div className='bg-darkBlue py-36 '>
        <div className='container flex flex-col items-center justify-between subscribers text-center'>
            <div className='flex flex-col items-center'>
                <div className='mb-3'><p className='text-fs-16 text-gray leading-lh-24'>UXFLAME FAMILY</p></div>
                <div className='text-white'><Typography variant='h2'>Subscribers <span className='text-orange'>Live</span> Count</Typography></div>
            </div>
            <div>
                <p className='md:text-fs-120 text-fs-34 font-bold text-white'>{count.count}</p>
            </div>
            <div className='flex flex-row justify-center align-middle items-center'>
                <div className='mr-4'>
                    <img width={'40px'} src={images.body.favicon}/>
                </div>
                <div>
                <p className='text-white font-bold text-fs-18 mt-1'><span className='text-orange'>@</span>uxflame</p>
                <p className='text-white font-regular text-fs-14'>on Youtube</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribers