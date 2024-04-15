// React imports
import React from 'react'
// App imports
import Banner from '../../atoms/AboutUsModules/Banner/Banner'
import VideoSection from '../../atoms/HomeModules/VideoSection/VideoSection'
import MidSection from '../../atoms/ComingSoonModules/MidSection/MidSection'

function ComingSoon() {
  return (
    <div>
    <Banner bgColor={'bg-orange'} txt1={'home'} txt2={'coming soon'}/>
    <div className='relative'>
      <MidSection/>
      <VideoSection/>
    </div>
    </div>
  )
}

export default ComingSoon