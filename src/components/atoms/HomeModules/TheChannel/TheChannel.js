// React imports
import React from 'react'
// Third party imports
import { Typography, Grid } from '@mui/material'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
// App imports
import VideoThumbnail from '../../VideoThumbnail/VideoThumbnail'
import images from '../../../utils/constants'
import './TheChannel.css'
import { channelVideo } from '../../../utils/specialVars';

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
                <div className='mb-5'><p className='text-gray text-fs-16 uppercase'>DesignLab & Devlab</p></div>
                <div className='text-white'><Typography variant='h2'>The Channel</Typography></div>
            </div>
            <div className='mb-20'>
                <Grid container spacing={{sm:0,md:10}}>
                    <Grid item xs={12} md={6} lg={6} ><p className=' text-justify md:text-left text-white text-fs-34 md:mb-0 mb-4 w-full md:w-8/12 tracking-ls-neg3'>Explore the latest in design, coding, technology, tools, and more!</p></Grid>
                    <Grid item xs={12} md={6} lg={6} ><p className='text-justify md:text-left text-gray text-fs-18 leading-lh-32 tracking-ls-neg4'>Dive into <a href='https://www.youtube.com/c/uxflame' target='_blank' className='text-orange underline'>UXFLAME</a>,  DesignLab for Figma tutorials and UX design insights, crafting captivating experiences. In DevLab, master coding, from beginner tutorials to advanced techniques, turning ideas into reality. Experience creativity and innovation in one place.</p></Grid>
                </Grid>
            </div>
            <div className='margin'>
                <VideoThumbnail thumbnailUrl={channelVideo.image} iconSize={'4rem'} extra={true} href={channelVideo.videoLink}/>
            </div>
        </div>
    </div>
  )
}

export default TheChannel