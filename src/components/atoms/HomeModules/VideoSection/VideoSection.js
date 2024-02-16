// React imports
import React from 'react'
// Third party imports
import { Grid, Typography } from '@mui/material'
// App imports
import './VideoSection.css'
import images from '../../../utils/constants'
import VideoThumbnail from '../../VideoThumbnail/VideoThumbnail'

function VideoSection() {
  return (
    <div className='bg-darkBlue py-20'>
        <div className='video-sec relative' >
        <Grid container alignItems="stretch" className='g relative container pb-6 md:pb-0'>
        <Grid item xs={12} md={6} lg={7} >
            <div className='flex flex-col h-full justify-center  md:py-0 py-10 text-center md:text-left  bg-orange'>
            <div>
                <p className='text-white text-fs-16 font-light uppercase'>unbox spotlight</p>
            </div>
            <div className='mt-3'>
                <Typography variant='h3' className='text-white' style={{lineHeight:'40px'}}>Video of <br/>the Month!</Typography>
            </div>
            </div>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
            <div className='h-full '>
            <VideoThumbnail thumbnailUrl={images.body.latestVideo} iconSize={'2.5rem'}/>
            </div>
        </Grid>
        </Grid>
        <div class="orange-bg bg-orange"></div>
    </div>
    </div>
  )
}

export default VideoSection