// React imports
import React from 'react'
// Third party imports
import {Typography, Button, Grid} from '@mui/material';
// App imports
import images from '../../../utils/constants';
import SocialIcons from '../../SocialIconsBar/SocialIcons'

function Header() {
  return (
    <div className='bg-transparent w-full '>
      <div className='md:pt-32 md:pb-60 pt-20 pb-20'>
        <Grid container justifyContent="center" alignItems='center'>
        <Grid item xs={1}>
            <div className='flex justify-center items-center h-full'>
              <SocialIcons/>
            </div>
          </Grid>
          <Grid item xs={11}>
            <div className='container m-auto'>
              <div className='px-14 text-center md:text-left'>
                <div><img className='m-auto md:m-0' width={'100px'} src={images.header.youtube}/></div>
                <p className='text-white font-Poppins pb-3 pt-5 text-fs-16'>190k views - 13 hours ago</p>
                <Typography variant='h1'><span className='text-orange'>UXFLAME</span> <br/><span className='text-white'>Learn Design Science with Haddi</span></Typography>
                <p className='text-white md:w-3/5 w-full font-Poppins leading-lh-32 mt-4 mb-10  text-fs-18'>Check us out as we do a deep dive into the newest and most powerful gaming computer the market has to offer!</p>
                <Button variant='outline'>Subscribe Now!</Button>
              </div>
            </div>
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Header