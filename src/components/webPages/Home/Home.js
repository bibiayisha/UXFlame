// React imports
import React from 'react'
// App imports
import { slider1, slider3 } from '../../utils/SlidesData'
import Header from '../../atoms/HomeModules/Header/Header'
import ImageCarousal from '../../molecules/ImageCarousal/ImageCarousal'
import NavBar from '../../atoms/Navbar/NavBar'
import './Home.css'
import NewVideos from '../../atoms/HomeModules/NewVideos/NewVideos'
import VideoSection from '../../atoms/HomeModules/VideoSection/VideoSection'
import Subscribers from '../../atoms/HomeModules/Subscribers/Subscribers'
import LatestNews from '../../atoms/HomeModules/LatestNews/LatestNews'
import FShortsSection from '../../atoms/HomeModules/FShortsSection/FShortsSection'
import TheChannel from '../../atoms/HomeModules/TheChannel/TheChannel'

function Home() {
  return (
    <>
    <div className='header-section'>
    <NavBar/>
    <Header/>
    </div>
    <div className=''>
      <ImageCarousal slides={slider1} marginSpecific={'md:-mt-40'} bgColor={true}/>
    </div>
    <NewVideos/>
    <TheChannel/>
    <div className='bg-darkBlue md:py-40 py-0'></div>
    <div className=''>
      <ImageCarousal slidesToShow={4} slides={slider3} bigHeading={'Latest Videos'} smallHeading={'UnBox Vlogs'} bgColor={false}/>
    </div>
    <div className=''>
      <ImageCarousal slidesToShow={4} slides={slider1} bigHeading={'Featured Gaming'} smallHeading={'UnBox Vlogs'} bgColor={false}/>
    </div>
    <FShortsSection/>
    <Subscribers/>
    <LatestNews/>
    <VideoSection/>
    </>
  )
}

export default Home