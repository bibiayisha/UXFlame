// React imports
import React, { Component } from "react";
// Third party import
import {Box, Typography} from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// App imports
import './ImageCarousal.css'
import { ImageCarousalProps } from "./Types";
import VideoThumbnail from "../../atoms/VideoThumbnail/VideoThumbnail";

class ImageCarousal extends React.Component {
    render() {
      const {slidesToShow, slides, smallHeading, bigHeading, marginSpecific, bgColor } = this.props;
      const settings = {
        dots: false,
        arrows: bgColor || false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 1500,
        autoplay:true,
        touchThreshold: 10, 
        swipe: true, 
        swipeToSlide: true,
        draggable: true, 
        respondTo: 'window',
        slidesToShow:slidesToShow || 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: slidesToShow || 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: slidesToShow || 5,
              slidesToScroll: 1,
            },
          },
          
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: slidesToShow || 4,
              slidesToScroll: 1,
            },
          },

          {
            breakpoint: 1000, 
            settings: {
              slidesToShow:slidesToShow || 3,
              slidesToScroll: 1, 
            },
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2, 
              slidesToScroll: 1,
              arrows: false, 
            },
          },
        ],
      };
  
      return (
        <div className={` ${marginSpecific} md:px-8 md:pl-20   ${bgColor ? 'bg-offBlue md:pb-6 md:pt-14 w-full md:w-[90vw]' : 'bg-darkBlue md:pb-28 w-full md:w-[90vw]'}  md:float-right md:overflow-hidden slider1 p-10  mx-auto relative z-40`}>
          {bgColor ? null : (
            <>
              <div className="mb-4 text-center md:text-left">
                <p className="text-gray text-fs-16 uppercase">{smallHeading}</p>
              </div>
              <div className="text-white mb-20 text-center md:text-left">
                <Typography variant="h3">{bigHeading}</Typography>
              </div>
            </>
          ) }
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div  key={index} className="slide-spacing text-center md:text-left">
                <VideoThumbnail thumbnailUrl={slide.imageurl} iconSize={'2rem'} href={slide.videoLink}/>
                <h3 className={`mt-4 ${bgColor? 'text-fs-16 leading-lh-16':'text-fs-18 leading-lh-24 mb-2'}  text-white font-semibold w-11/12 `}>{slide.heading}</h3>
                <p className={`mt-1 text-gray  ${bgColor? 'text-fs-13':'text-fs-14'} leading-lh-16`}>{slide.subtext}</p>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }
  
  ImageCarousal.propTypes = ImageCarousalProps;
  
  export default ImageCarousal;
  