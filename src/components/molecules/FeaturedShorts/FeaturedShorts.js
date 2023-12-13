// React imports
import React, { Component } from "react";
// Third party import
import {Box, Typography} from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// App imports
import './FeaturedShorts.css'
import { FeaturedShortsProps } from "./Types";

class FeaturedShorts extends React.Component {
    render() {
      const {slides } = this.props;
      console.log(slides)
      const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 100,
        slidesToShow:3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '170px',
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1, 
              slidesToScroll: 1,
              centerPadding: '50px',
            },
          },
        ],
      };
  
      return (
        <div className="sliderfs p-0 m-0">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="slide-container">
                <div className="gradient-overlay"></div>
                <img src={slide.imageurl} alt={`Slide ${index + 1}`} />
                <div className="content-overlay p-6 w-6/12">
                  <p className="text-fs-22 text-white font-semibold tracking-ls-neg leading-lh-24">{slide.heading}</p>
                  <p className="text-fs-14 text-white font-regular mt-1.5">{slide.subtext}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }
  
  FeaturedShorts.propTypes = FeaturedShortsProps;
  
  export default FeaturedShorts;
  