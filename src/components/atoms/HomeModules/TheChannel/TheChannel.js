// React imports
import React from 'react'
// Third party imports
import { Typography, Grid } from '@mui/material'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
// App imports
import VideoThumbnail from '../../VideoThumbnail/VideoThumbnail'
import images from '../../../utils/constants'
import './TheChannel.css'

function TheChannel() {
  return (
    <div className='bg-offBlue py-40 relative'>
        <div className='absolute z-0 right-0 lg:mt-[-12%] md:mt-[-22%] mt-[-38%]'>
            <img src={images.body.bgBoxes}/>
        </div>
        <div className='flex items-center justify-center absolute md:top-[-2%] top-[-0%] left-[-38.5%] md:left-[6%] lg:left-[44%] lg:top-[0%] z-50 aspect-square w-[70px] md:w-[120px] lg:w-[120px] translate-x-[380px] -translate-y-[25px] rotate-45 rounded-md md:rounded-xl lg:rounded-2xl bg-orange '>
            <PlayArrowRoundedIcon sx={{ color: 'white', width: '4rem', height: '4rem', transform: 'rotate(-45deg)' }} />
        </div>
        <div className='container text-center md:text-left relative z-20'>
            <div className='md:mb-20 mb-10 '>
                <div className='mb-5'><p className='text-gray text-fs-16 uppercase'>UnBox Vlogs</p></div>
                <div className='text-white'><Typography variant='h2'>The Channel</Typography></div>
            </div>
            <div className='mb-20'>
                <Grid container spacing={{sm:0,md:10}}>
                    <Grid item xs={12} md={6} lg={6} ><p className='text-white text-fs-34 md:mb-0 mb-4'>Check out the newest in gaming, technology, toys and more!</p></Grid>
                    <Grid item xs={12} md={6} lg={6} ><p className='text-gray text-fs-18 leading-lh-32'>I’ll show you everything you need to know before buying your product! Quality of the packaging and items, accesories, bonus elements, downlodable content, and more! Check all out to make an informed decision before spending anything.</p></Grid>
                </Grid>
            </div>
            <div className='margin'>
                <VideoThumbnail thumbnailUrl={`${images.body.channel}`} iconSize={'4rem'} extra={true}/>
            </div>
        </div>
    </div>
  )
}

export default TheChannel