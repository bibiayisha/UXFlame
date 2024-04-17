// React imports
import React from 'react'
// Third party imports
import { Typography } from '@mui/material'
// App imports
import images from '../../../utils/constants'

const StatsCard1 = ({stats_n, txt1, txt2}) =>{
  return (
    <div className='bg-white relative flex flex-col justify-center items-center'>
        <div className='relative w-full text-center'><img width={'100%'} src={images.body.stats_img1}/></div>
        <div className='absolute transform -translate-x-[0] -translate-y-[20%]'>
        <p className='text-white pb-1 capitalize text-center text-3xl md:text-5xl font-bold'>{stats_n}</p>
        <p className='text-white text-sm md:text-base   tracking-ls-neg4 text-center '>{txt1}</p>
        <p className='text-gray md:text-sm text-xs  tracking-ls-neg4 text-center '>{txt2}</p>
        </div>
    </div>
  )
}

export default StatsCard1