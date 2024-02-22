// React imports
import React from 'react'
// Third party imports
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
// App imports
import './SocialIcons.css'

function SocialIcons() {
  return (
    <div className='px-10'>
        <div className='social-text text-fs-11 font-bold text-white pt-3 align-middle '><a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@UXFlame'><YouTubeIcon fontSize='small' className='icons-color rotate-icon'/> <span className='py-2 hidden lg:inline-block'>Youtube</span></a></div>
        <div className='social-text text-fs-11 font-bold text-white py-3'><a target="_blank" rel="noopener noreferrer" href='https://www.pinterest.com/uxflame/'><PinterestIcon fontSize='small' className='icons-color rotate-icon'/><span className='py-2 hidden lg:inline-block'>Pinterest</span></a> </div>
        <div className='social-text text-fs-11 font-bold text-white py-3'><a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/uxflame?igsh=ZTIwbW8xMGR5Ym13'><InstagramIcon fontSize='small' className='icons-color rotate-icon'/><span className='py-2 hidden lg:inline-block'>Instagram</span></a> </div>
        <div className='social-text text-fs-11 font-bold text-white py-3'><a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/uxflame'><FacebookRoundedIcon fontSize='small' className='icons-color rotate-icon'/> <span className='pt-2 hidden lg:inline-block'>Facebook</span></a></div>
        <div className='social-text text-fs-11 font-bold text-white py-3'><a target="_blank" rel="noopener noreferrer" href='https://twitter.com/ux_flame'><TwitterIcon fontSize='small' className='icons-color rotate-icon'/> <span className='py-2 hidden lg:inline-block'>Twitter</span></a></div>
 </div>
  )
}

export default SocialIcons