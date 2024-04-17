// React imports
import React from 'react'
// Third party imports
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
// App imports
import { channel_stats1 } from '../../../utils/channel_stats'
import { channel_stats2 } from '../../../utils/channel_stats'
import StatsCard1 from '../StatsCard/StatsCard1'
import StatsCard2 from '../StatsCard/StatsCard2'
import VideoThumbnail from '../../VideoThumbnail/VideoThumbnail'
import { mostViewedVideo } from '../../../utils/specialVars'

const Stats = () =>{
  return (
    <div className='bg-darkBlue py-8 md:py-20 px-8 md:px-0'>   
        <div className='container'>
            <div>
            <div><p className='text-fs-24 text-white font-light text-center '>Get to know about founders</p></div>
            <div className='pt-4 '>
            <Typography variant='h3' className='text-white capitalize text-center '>Channel Stats</Typography>
            </div>
            </div>
            <div className='py-20'>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xs={12} md={9}>
                        <div>
                            <Grid container justifyContent="center" spacing={3}>
                            {channel_stats1.map((stat, index) => (
                                <Grid item key={index} xs={4} md={4}>
                                    <div className='pb-2 md:pb-0'>
                                    <StatsCard1  stats_n={stat.stats_n} txt1={stat.txt1} txt2={stat.txt2} />
                                    </div>
                                </Grid>
                            ))}
                            </Grid>
                        </div>
                        <div className='bg-offBlue mt-6'>
                            <Grid container >
                                <Grid item xs={7}>
                                   <div className='flex flex-col justify-between items-start align-middle p-0 pl-4 md:pl-10  md:p-10  h-full w-full'>
                                   <div><p className='text-white font-bold text-fs-34'>Top Video</p></div>
                                    <div >
                                        <Grid container>
                                            <Grid items xs={4}>
                                            <p className='text-white font-bold text-fs-22'>{mostViewedVideo.views}</p>
                                            <p className='text-white font-regular text-fs-14'>Views</p>  
                                            </Grid>
                                            <Grid items xs={4}>
                                            <p className='text-white font-bold text-fs-22'>{mostViewedVideo.likes}</p>
                                            <p className='text-white font-regular text-fs-14'>Likes</p>  
                                            </Grid>
                                            <Grid items xs={4}>
                                            <p className='text-white font-bold text-fs-22'>{mostViewedVideo.comments}</p>
                                            <p className='text-white font-regular text-fs-14'>Comments</p>  
                                            </Grid>
                                        </Grid>
                                    </div>
                                   </div>
                                </Grid>
                                <Grid item xs={5}>
                                <div className='h-full '>
                                    <VideoThumbnail thumbnailUrl={mostViewedVideo.image} iconSize={'2.5rem'} href={mostViewedVideo.videoLink}/>
                                </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <div>
                            <Grid container justifyContent="center" spacing={3}>
                            {channel_stats2.map((stat, index) => (
                                <Grid item key={index} xs={6} md={12}>
                                    <div className='pb-2 md:pb-0'>
                                    <StatsCard2  stats_n={stat.stats_n} stats_percent={stat.stats_percent} stats_sign={stat.stats_sign} txt1={stat.txt1} txt2={stat.txt2} />
                                    </div>
                                </Grid>
                            ))} 
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
  )
}

export default Stats