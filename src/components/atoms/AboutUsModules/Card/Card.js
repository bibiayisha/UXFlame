// React imports
import React from 'react'
// Third party imports
import { Typography } from '@mui/material';

const Card=({img, txt1, txt2})=> {
    // Finding the index of the first space
    const spaceIndex = txt1.indexOf(' ');

    // Slicing the text to separate the first word
    const firstWord = txt1.slice(0, spaceIndex);
    const remainingText = txt1.slice(spaceIndex + 1);
  return (
    <div>
        <div className='pr-0 md:pr-14 mx-10 md:mx-0 md:block flex flex-col justify-center items-center'>
          <div className='py-2'><img  src={img}/></div>
          <div className='pt-4 pb-8'><Typography variant='h4' className='text-white capitalize text-center md:text-left'>{firstWord}<br />{remainingText}</Typography></div>
          <p className='text-white text-fs-18 leading-lh-32 tracking-ls-neg4 text-center md:text-left'>{txt2}</p>
        </div>
    </div>
  );
};

export default Card