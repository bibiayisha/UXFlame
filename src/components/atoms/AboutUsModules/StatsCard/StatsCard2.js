// React imports
import React from 'react'
// App imports
import images from '../../../utils/constants'

const StatsCard2 = ({stats_n, stats_percent, stats_sign, stats_bg, txt1, txt2}) =>{
  return (
    <div className='bg-white relative flex flex-col justify-center items-center'>
        <div className='relative w-full text-center'><img width={'100%'} src={stats_bg}/></div>
        <div className='absolute transform -translate-x-[15%] -translate-y-[6%]'>
        <div className='flex justify-start items-start'>
        <div><p className='text-base md:text-lg text-white font-bold text-center '>{stats_n}</p></div>
        <div className='relative w-full text-center pt-1 md:pt-2 pl-2 w-[20%] md:w-full'><img src={stats_sign}/></div>
        <p className='text-gray text-xs md:text-sm  tracking-ls-neg4 text-left pt-1 md:pt-2 pl-1'>{stats_percent}</p>
        </div>
        <div>
        <p className='text-white text-sm md:text-base  tracking-ls-neg4 text-left '>{txt1}</p>
        <p className='text-gray text-xs md:text-sm tracking-ls-neg4 text-left '>{txt2}</p>
        </div>
        </div>
    </div>
  )
}

export default StatsCard2