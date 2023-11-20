// React imports
import React, { Component } from "react";
// Third party import
import {Box} from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// App imports
import './ImageCarousal.css'
import { ImageCarousalProps } from "./Types";

class ImageCarousal extends React.Component {
    render() {
      const { slides } = this.props;
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  
      return (
        <div className='m-0 p-8 bg-red w-11/12 float-right overflow-hidden -mt-16'>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <img src={slide.imageurl} />
                <h3>{slide.heading}</h3>
                <p>{slide.subtext}</p>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }
  
  ImageCarousal.propTypes = ImageCarousalProps;
  
  export default ImageCarousal;
  