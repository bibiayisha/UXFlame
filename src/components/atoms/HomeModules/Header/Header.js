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
      <div className='md:pt-18 md:pb-40 pt-20 pb-20'>
        <Grid container justifyContent="center" alignItems='center'>
        <Grid item xs={1}>
            <div className='flex justify-center items-center h-full'>
              <SocialIcons/>
            </div>
          </Grid>
          <Grid item xs={11}>
            <div className='container m-auto'>
              <div className='px-14 text-center md:text-left'>
                <div><a href='https://www.youtube.com/@UXFlame' target="_blank" rel="noopener noreferrer"><img className='m-auto md:m-0' width={'100px'} src={images.header.youtube}/></a></div>
                <p className='text-white font-Inter pb-3 pt-5 text-fs-16'>190k views - 13 hours ago</p>
                <Typography variant='h1'><span className='text-orange'>UXFLAME</span> <br/><span className='text-white'>Master Design and Code with HASH</span></Typography>
                <p className='text-white md:w-4/5 w-full font-Inter leading-lh-32 mt-4 mb-10  text-fs-18'>Welcome to UXFLAME, where creativity meets innovation. We're thrilled to introduce two distinct verticals within our channel: <span class='text-orange'>DesignLab</span> and <span class='text-orange'>DevLab</span></p>
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