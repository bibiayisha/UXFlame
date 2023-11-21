// React imports
import React from 'react'
// Third party imports
import { Grid, Icon } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
// App imports
import images from '../../utils/constants';
import './Footer.css'

function Footer() {
  return (
    <div className='bg-darkBlue'>
        <Grid className='container py-20' container >
            <Grid item xs={12} md={6} lg={3} >
              <div className='mb-1.5'><img width={'70px'} src={images.footer.youtube} /></div>
              <div><img width={'150px'} src={images.header.logo} /></div>
              <div className='my-9'><p className='text-fs-14 tracking-ls-neg text-gray'>Bringing you the best unboxing videos of the latest technology, games and toys!</p></div>
              <div className='flex flex-row'>
                <div><a><FacebookRoundedIcon fontSize='small' className='icons-color mr-4' /></a></div>
                <div><a><TwitterIcon fontSize='small' className='icons-color mr-4' /></a></div>
                <div><a><InstagramIcon fontSize='small' className='icons-color mr-4' /></a></div>
                <div><a><YouTubeIcon fontSize='medium' className='icons-color mr-4' /></a></div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} className='pl-10'>
              <div className='px-10'>
                <div>
                  <p className='text-fs-18 tracking-ls-neg2 text-white font-semibold'>Unbox Links</p>
                </div>  
                <div className='flex flex-row justify-between mt-14'>
                  <div>
                    <ul>
                      <li className='text-white text-fs-14  leading-lh-21 font-semibold cursor-pointer hover:text-orange mb-2'><a>Home</a></li>
                      <li className='text-white text-fs-14  leading-lh-21 font-semibold cursor-pointer hover:text-orange mb-2'><a>Videos</a></li>
                      <li className='text-white text-fs-14  leading-lh-21 font-semibold cursor-pointer hover:text-orange mb-2'><a>News</a></li>
                      <li className='text-white text-fs-14  leading-lh-21 font-semibold cursor-pointer hover:text-orange mb-2'><a>About</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className='text-white text-fs-14  leading-lh-21 font-semibold cursor-pointer hover:text-orange mb-2'><a>Events</a></li>
                      <li className='text-white text-fs-14  leading-lh-21 font-semibold cursor-pointer hover:text-orange mb-2'><a>Partners</a></li>
                      <li className='text-white text-fs-14  leading-lh-21 font-semibold cursor-pointer hover:text-orange mb-2'><a>Contact</a></li>
                      <li className='text-white text-fs-14  leading-lh-21 font-semibold cursor-pointer hover:text-orange mb-2'><a>Shop</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={5} className='pl-10'>
            <div>
              <div>
                <p className='text-fs-18 tracking-ls-neg2 text-white font-semibold'>Subs Live Count</p>
              </div>
              <div className='map flex flex-col justify-center align-middle items-center'>
                <p className='font-bold text-white text-fs-27'>1,829,436</p>
                <p className='text-white font-bold text-fs-14 mt-1'><span className='text-orange'>@</span>uxflame</p>
              </div>
            </div> 
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer