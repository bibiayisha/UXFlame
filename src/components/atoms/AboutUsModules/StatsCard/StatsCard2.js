// React imports
import React from 'react'
// App imports
import images from '../../../utils/constants'

const StatsCard2 = ({stats_n, stats_percent, stats_sign, txt1, txt2}) =>{
  return (
    <div className='bg-white relative flex flex-col justify-center items-center'>
        <div className='relative w-full text-center'><img width={'100%'} src={images.body.stats_img2}/></div>
        <div className='absolute transform -translate-x-[15%] -translate-y-[16%]'>
        <div className='flex justify-start items-start'>
        <div><p className='text-fs-27 text-white font-bold text-center '>{stats_n}</p></div>
        <div className='relative w-full text-center pt-1 pl-2'><img src={stats_sign}/></div>
        <p className='text-gray text-fs-12  tracking-ls-neg4 text-left pt-1 pl-1'>{stats_percent}</p>
        </div>
        <div>
        <p className='text-white text-fs-18  tracking-ls-neg4 text-left '>{txt1}</p>
        <p className='text-gray text-fs-14  tracking-ls-neg4 text-left '>{txt2}</p>
        </div>
        </div>
    </div>
  )
}

export default StatsCard2