// React imports
import React from 'react'
// Third party imports
import { Typography, Grid } from '@mui/material'
// App imports
import { mission_stats } from '../../../utils/mission_stats'
import Card from '../Card/Card'

function Mission() {
  return (
    <div className='bg-darkBlue py-20 '>
      <div className='container '>
      <div className='pb-2'><p className='text-fs-24 text-white font-light text-center md:text-left'>Learn about</p></div>
      <div className='pb-20'><Typography variant='h3' className='text-white capitalize text-center md:text-left'>Our Mission</Typography></div>
      <Grid container>
      {mission_stats.map((stat, index) => (
        <Grid item key={index} xs={12} md={4}>
            <div className='pb-20 md:pb-0'>
            <Card  img={stat.img} txt1={stat.txt1} txt2={stat.txt2} />
            </div>
        </Grid>
      ))}
      </Grid>
      </div>
    </div>
  )
}

export default Mission