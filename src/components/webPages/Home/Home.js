// React imports
import React from 'react'
// App imports
import { slider1 } from '../../utils/SlidesData'
import Header from '../../atoms/HomeModules/Header'
import ImageCarousal from '../../molecules/ImageCarousal/ImageCarousal'
import NavBar from '../../atoms/Navbar/NavBar'
import './Home.css'
import NewVideos from '../../atoms/HomeModules/NewVideos'
import VideoSection from '../../atoms/HomeModules/VideoSection'

function Home() {
  return (
    <>
    <div className='header-section'>
    <NavBar/>
    <Header/>
    </div>
    <div className=''>
      <ImageCarousal slidesToShow={5} slides={slider1} marginSpecific={'-mt-40'}/>
    </div>
    <NewVideos/>
    <VideoSection/>
    </>
  )
}

export default Home