// React imports
import React, { Component } from "react";
// Third party import
import {Box, Typography} from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// App imports
import './NewVideosSlider.css'
import { NewVideosSliderProps } from "./Types";

class NewVideosSlider extends React.Component {
    render() {
      const {slides } = this.props;
      const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow:1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              arrows: false, 
            },
          },
        ],
      };
  
      return (
        <div className="slider2 p-0 m-0">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div  key={index}>
                <img src={slide.imageurl}  width={'100%'}/>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }
  
  NewVideosSlider.propTypes = NewVideosSliderProps;
  
  export default NewVideosSlider;
  