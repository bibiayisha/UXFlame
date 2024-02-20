// React import
import React from 'react';
// Third party imports
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
// App imports
import './VideoThumbnail.css'

const ThumbnailWithPlayButton = ({ thumbnailUrl, iconSize, extra, href }) => {
  const isMobile = window.innerWidth <= 767;
    return (
        <Grid container justifyContent="center" alignItems="center">
        <div className="relative text-center md:w-full w-max overflow-hidden">
          <a className='thumbnail' href={href} target="_blank" rel="noopener noreferrer">
            <img src={thumbnailUrl} alt="Video Thumbnail" className="md:w-full w-max h-auto thumbnail-img" />
            { extra && 
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 special-text text-left">
              <div ><span className='st1'>Welcome to my</span><br/>
              <span className='st2'>UXflame Channel!</span></div>
              </div>}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <IconButton
                style={{
                  backgroundColor: '#FB8045',
                  color: 'white',
                  borderRadius: 'full',
                }}
              >
              <PlayArrowRoundedIcon
                style={{ width: iconSize, height: iconSize }}
                className='play-icon'
              />
              </IconButton>
            </div>
          </a>
        </div>
      </Grid>
    );
  };
  
  export default ThumbnailWithPlayButton;