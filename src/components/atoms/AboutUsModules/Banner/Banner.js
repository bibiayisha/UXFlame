// React imports
import React from 'react'
// Third party imports
import { Typography } from '@mui/material';

const Banner = ({bgColor, txt1, txt2}) =>{
  return (
    <div className={`${bgColor}`}>
        <div className='container mx-auto py-20 flex justify-center flex-col align-middle'>
            <div className='pb-2 text-center'><Typography variant='h3' className='text-white capitalize'>{txt2}</Typography></div>
            <div className='flex  flex-row justify-center align-middle'>
                <div><Typography variant='h5' className='text-white uppercase  px-2'>{txt1}</Typography></div>
                <div><Typography variant='h5' className='text-white border-l-2 uppercase px-2'>{txt2}</Typography></div>
            </div>
        </div>
    </div>
  );
};

export default Banner