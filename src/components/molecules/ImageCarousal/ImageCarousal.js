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
      const {slidesToShow, slides, smallHeading, bigHeading, marginSpecific } = this.props;
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:slidesToShow || 4,
        slidesToScroll: 1,
      };
  
      return (
        <div className={`m-0 ${marginSpecific} px-8 pl-20 pt-10 py-6 bg-offBlue w-11/12 float-right overflow-hidden`}>
          {/* TODO: Do styling and spacing of small and big heading */}
          <p>{smallHeading}</p>
          <Typography>{bigHeading}</Typography>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div  key={index}>
                <img width={'230px'} src={slide.imageurl} />
                <h3 className="mt-4 text-fs-16 leading-lh-16 text-white font-bold w-11/12">{slide.heading}</h3>
                <p className="mt-1 text-gray  text-fs-13 leading-lh-16">{slide.subtext}</p>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }
  
  ImageCarousal.propTypes = ImageCarousalProps;
  
  export default ImageCarousal;
  