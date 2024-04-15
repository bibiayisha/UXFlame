// React imports
import React from 'react'
// Third party imports
import { Typography } from '@mui/material';

const Card=({img, txt1, txt2})=> {
  return (
    <div>
        <div className='py-2'><img src={img}/></div>
        <div className='pt-4 pb-8'><Typography variant='h3' className='text-white capitalize'>{txt1}</Typography></div>
        <p className='text-gray text-fs-18 leading-lh-32 tracking-ls-neg4'>{txt2}</p>
    </div>
  );
};

export default Card