// React import
import React from 'react';
// Third party imports
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const ThumbnailWithPlayButton = ({ thumbnailUrl, iconSize }) => {
    return (
        <Grid container justifyContent="center" alignItems="center">
        <div className="relative text-center md:w-full w-max">
          <img src={thumbnailUrl} alt="Video Thumbnail" className="md:w-full w-max h-auto" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <IconButton
              style={{
                backgroundColor: '#FB8045',
                color: 'white',
                borderRadius: 'full',
              }}
            >
              <PlayArrowRoundedIcon fontSize={'inherit'} style={{ width: iconSize, height: iconSize}} />
            </IconButton>
          </div>
        </div>
      </Grid>
    );
  };
  
  export default ThumbnailWithPlayButton;