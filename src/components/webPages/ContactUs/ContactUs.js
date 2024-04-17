// React imports
import React from 'react'
// App imports
import Banner from '../../atoms/AboutUsModules/Banner/Banner'
import ContactMidSection from '../../atoms/ContactUsModules/ContactMidSection'
import VideoSection from '../../atoms/HomeModules/VideoSection/VideoSection'

export default function ContactUs() {
  return (
    <>
      <Banner bgColor={'bg-orange'} txt1={'home'} txt2={'contact'} link_color={'offBlue'}/>
      <ContactMidSection/>
      <VideoSection/>
    </>
  )
}
