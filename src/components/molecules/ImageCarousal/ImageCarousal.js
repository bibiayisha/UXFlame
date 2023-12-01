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

class ImageCarousal extends React.Component {
    render() {
      const {slidesToShow, slides, smallHeading, bigHeading, marginSpecific, bgColor } = this.props;
      const settings = {
        dots: false,
        arrows: bgColor || false,
        infinite: true,
        speed: 500,
        slidesToShow:slidesToShow || 4,
        slidesToScroll: 1,
      };
  
      return (
        <div className={`m-0 ${marginSpecific} px-8 pl-20   ${bgColor ? 'bg-offBlue pb-6 pt-14' : 'pb-28'} w-11/12 float-right overflow-hidden slider1`}>
          {bgColor ? null : (
            <>
              <div className="mb-4">
                <p className="text-gray text-fs-16 uppercase">{smallHeading}</p>
              </div>
              <div className="text-white mb-20">
                <Typography variant="h3">{bigHeading}</Typography>
              </div>
            </>
          ) }
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div  key={index} className="slide-spacing">
                <img width={'230px'} src={slide.imageurl} />
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
  