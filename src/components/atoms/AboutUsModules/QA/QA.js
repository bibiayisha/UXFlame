// React imports
import React from 'react'
// Third party imports
import { Typography } from '@mui/material';

const QA = ({ques, ans, next})=> {
  
  let formattedtxt = ans
  if(next){
    // Finding the index of the first occurrence of "UXFLAME"
    const uxflameIndex = ans.indexOf('UXFLAME');

    // Slicing the text to separate the first part and the rest of the text
    const firstPart = ans.slice(0, uxflameIndex + 8); // +8 to include "UXFLAME" and any spaces after it
    const remainingText = ans.slice(uxflameIndex + 8);
    formattedtxt = (
      <>
        {firstPart}
        <br />
        <br />
        {remainingText}
      </>
    );
  }

  return (
    <div className='pt-4'>
        <div className='pb-6 '>
            <Typography variant='h3' className='text-white capitalize text-center md:text-left'>{ques}</Typography>
        </div>
        <div>
        <p className='text-white text-fs-18 leading-lh-32 tracking-ls-neg4 text-justify md:text-left'>{formattedtxt}</p>

        </div>
    </div>
  )
};

export default QA
