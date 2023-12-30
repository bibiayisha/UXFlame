// React imports
import React from 'react'
// Third party imports
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// App imports
import './SocialIcons.css'

function SocialIcons() {
  return (
    <div className='px-10'>
        <div className='social-text text-fs-11 font-bold text-white pt-3 align-middle'><a><FacebookRoundedIcon fontSize='small' className='icons-color rotate-icon'/> <span className='pt-2'>Facebook</span></a></div>
        <div className='social-text text-fs-11 font-bold text-white py-3'><a><TwitterIcon fontSize='small' className='icons-color rotate-icon'/> <span className='py-2'>Twitter</span></a></div>
        <div className='social-text text-fs-11 font-bold text-white py-3'><a><InstagramIcon fontSize='small' className='icons-color rotate-icon'/></a> <span className='py-2'>Instagram</span></div>
        <div className='social-text text-fs-11 font-bold text-white py-3'><a><YouTubeIcon fontSize='small' className='icons-color rotate-icon'/></a> <span className='py-2'>Youtube</span></div>
    </div>
  )
}

export default SocialIcons