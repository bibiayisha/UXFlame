// React imports
import React from 'react'
// Third party imports
import { Typography, Grid } from '@mui/material'
// App imports
import VideoThumbnail from '../../VideoThumbnail/VideoThumbnail'
import images from '../../../utils/constants'
import './TheChannel.css'

function TheChannel() {
  return (
    <div className='bg-offBlue py-40'>
        <div className='container text-center md:text-left'>
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
                <VideoThumbnail thumbnailUrl={`${images.body.channel}`} iconSize={'3rem'}/>
            </div>
        </div>
    </div>
  )
}

export default TheChannel