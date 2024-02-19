// React imports
import React from 'react'
// Third party imports
import { Typography, Button, Grid } from '@mui/material'
// App imports
import images from '../../../utils/constants'
import { news } from '../../../utils/NewsData'

function LatestNews() {
  return (
    <div className='bg-darkBlue py-20 md:py-40'>
        <div className='container '>
            <div className='flex md:flex-row flex-col justify-between md:items-start items-center align-top mb-20 md:mb-0 text-center md:text-left'>
                <div className='flex flex-col '>
                    <div className='mb-3'><p className='text-fs-16 text-gray leading-lh-24 uppercase'>Unbox vlogs</p></div>
                    <div className='text-white'><Typography variant='h2'>Latest News</Typography></div>
                </div>
                <div className='mx-auto md:mx-0 md:mt-0 mt-4'>
                   <Button variant='text' startIcon={<img width={'15px'} src={images.body.playBtn}/>}>Browse all posts</Button>
                </div>
            </div>
            <Grid container spacing={4}>
            {news.slice(0, 3).map((item, index) => (
                <Grid item xs={12} md={6} lg={4} className='pb-10 md:pb-20 lg:pb-0'>
                    <a href='#'>
                    <div className='relative md:mb-0 mb-20'>
                        <div className='mt-0 md:mt-24 '><img src={item.imageUrl} /></div>
                        <div className='-mt-20 absolute'>
                            <div><p className=' text-white uppercase text-fs-12 font-bold py-1'><span className='bg-orange p-1'>{item.superText}</span></p></div>
                            <div className='bg-offBlue md:w-11/12 w-4/5 p-4'>
                                <p className='text-white text-fs-20 font-bold '>{item.title}</p>
                                <p className='text-fs-14 text-gray mt-3'>{item.date}</p>
                            </div>
                        </div>
                    </div>
                    </a>
                </Grid>
            ))}
            </Grid>
        </div>
    </div>
  )
}

export default LatestNews