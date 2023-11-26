// React imports
import React from 'react'
// Third party imports
import { Typography, Button, Grid } from '@mui/material'
// App imports
import images from '../../../utils/constants'
import { news } from '../../../utils/NewsData'

function LatestNews() {
  return (
    <div className='bg-darkBlue py-40'>
        <div className='container'>
            <div className='flex flex-row justify-between items-start align-top mb-20'>
                <div className='flex flex-col '>
                    <div className='mb-3'><p className='text-fs-16 text-gray leading-lh-24 uppercase'>Unbox vlogs</p></div>
                    <div className='text-white'><Typography variant='h2'>Latest News</Typography></div>
                </div>
                <div>
                   <Button variant='text' startIcon={<img width={'15px'} src={images.body.playBtn}/>}>Browse all posts</Button>
                </div>
            </div>
            <Grid container spacing={4}>
            {news.slice(0, 3).map((item, index) => (
                <Grid item xs={12} md={4} lg={4}>
                    <div className='relative'>
                        <div><img src={item.imageUrl} /></div>
                        <div className='-mt-20 absolute'>
                            <div><p className=' text-white uppercase text-fs-12 font-bold py-1'><span className='bg-orange p-1'>{item.superText}</span></p></div>
                            <div className='bg-offBlue w-11/12 p-4'>
                                <p className='text-white text-fs-20 font-bold '>{item.title}</p>
                                <p className='text-fs-14 text-gray mt-3'>{item.date}</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            ))}
            </Grid>
        </div>
    </div>
  )
}

export default LatestNews