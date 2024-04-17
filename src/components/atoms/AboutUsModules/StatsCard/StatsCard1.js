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
        <Typography variant='h3' className='text-white pb-1 capitalize text-center '>{stats_n}</Typography>
        <p className='text-white text-fs-18  tracking-ls-neg4 text-center '>{txt1}</p>
        <p className='text-gray text-fs-14  tracking-ls-neg4 text-center '>{txt2}</p>
        </div>
    </div>
  )
}

export default StatsCard1