// React imports
import React from 'react'
// Third party imports
import { Typography, Button } from '@mui/material'
// App imports
import FeaturedShorts from '../../../molecules/FeaturedShorts/FeaturedShorts'
import { FShorts } from '../../../utils/FeaturedShortsData'
import images from '../../../utils/constants'

function FShortsSection() {
  return (
    <div className='bg-darkBlue md:pt-96 pt-10 pb-32'>
        <div className=''>
            <div className='container flex flex-col justify-center items-center md:pb-28 pb-10 pt-28'>
                <div><p className='uppercase text-gray text-fs-16 mb-4 '>60 SECONDS CRAFT</p></div>
                <div className='text-white text-center'><Typography variant='h2'>Featured Shorts</Typography></div>
            </div>
            <div className='pb-20'>
                <FeaturedShorts slides={FShorts}/>
            </div>
            <div className='container text-center md:text-left'>
                <Button variant='text' startIcon={<img width={'15px'} src={images.body.playBtn}/>}>Browse all playlists</Button>
            </div>
        </div>
    </div>
  )
}

export default FShortsSection