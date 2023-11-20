// React imports
import React from 'react'
// App imports
import { slider1 } from '../../utils/SlidesData'
import Header from '../../atoms/Header'
import ImageCarousal from '../../molecules/ImageCarousal/ImageCarousal'
import NavBar from '../../atoms/NavBar'
import './Home.css'
import NewVideos from '../../atoms/NewVideos'

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
    </>
  )
}

export default Home