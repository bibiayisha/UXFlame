// React imports
import React from 'react'
// Third party imports
import { Button, Grid, Typography } from '@mui/material'
// App imports
import images from '../../../utils/constants'
import {slider2} from '../../../utils/SlidesData'
import NewVideosSlider from '../../../molecules/NewVideosSlider/NewVideosSlider'

function NewVideos() {
  return (
    <div className='bg-darkBlue '>
      <Grid className='container py-28' container spacing={{ sm:0, md: 7 }}>
        <Grid item xs={12} md={6} lg={7} >
          <NewVideosSlider slides={slider2}/>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <div className='md:mt-0 mt-20 md:text-left text-center'>
            <div><p className='text-fs-24 text-white font-light'>New Videos!</p></div>
            <div className='mt-1 mb-10'><Typography variant='h3' className='text-white'>Every Friday <br/>at 9PM</Typography></div>
            <div className='mb-5 flex md:flex-row flex-col justify-between md:items-start items-center w-full md:w-11/12'>
              <div className='mr-4 mt-2 mb-4 md:mb-0 w-[40px] md:w-2/5'><img width={'100px'} src={images.body.bell}/></div>
              <div><p className='text-gray text-fs-18 tracking-ls-neg2 leading-lh-32'>Remember to <span className='text-white font-semibold'>turn on the notifications bell</span> so you’ll be informed when a new video is uploaded!</p></div>
            </div>
            <div className='w-11/12'><p className='text-gray text-fs-18 tracking-ls-neg2 leading-lh-32'>We really appreaciate all your comments, likes and suggestions, so keep em coming!</p></div>
            <div className='my-8'>
              <Button variant='text' startIcon={<img width={'15px'} src={images.body.playBtn}/>}>See All Videos</Button>
            </div>
          </div>
        </Grid>
      </Grid>  
    </div>
  )
}

export default NewVideos