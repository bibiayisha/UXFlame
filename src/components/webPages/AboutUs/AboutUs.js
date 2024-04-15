// React imports
import React from 'react'
// App imports
import Banner from '../../atoms/AboutUsModules/Banner/Banner'
import QASection from '../../atoms/AboutUsModules/QASection/QASection'
import VideoSection from '../../atoms/HomeModules/VideoSection/VideoSection'
import Mission from '../../atoms/AboutUsModules/Mission/Mission'

function AboutUs() {
  return (
    <div>
    <Banner bgColor={'bg-offBlue'} txt1={'home'} txt2={'about'}/>
    <QASection/>
    <Mission/>
    <VideoSection/>
    </div>
  )
}

export default AboutUs