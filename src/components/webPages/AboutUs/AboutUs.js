// React imports
import React from 'react'
// App imports
import Banner from '../../atoms/AboutUsModules/Banner/Banner'
import QASection from '../../atoms/AboutUsModules/QASection/QASection'
import VideoSection from '../../atoms/HomeModules/VideoSection/VideoSection'
import Mission from '../../atoms/AboutUsModules/Mission/Mission'
import MidSection from '../../atoms/AboutUsModules/MidSection/MidSection'
import Stats from '../../atoms/AboutUsModules/Stats/Stats'

function AboutUs() {
  return (
    <div>
    <Banner bgColor={'bg-offBlue'} txt1={'home'} txt2={'about'} link_color={'orange'}/>
    <MidSection/>
    <QASection/>
    <Stats/>
    <Mission/>
    <VideoSection/>
    </div>
  )
}

export default AboutUs