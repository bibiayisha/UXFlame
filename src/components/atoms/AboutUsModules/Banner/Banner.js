// React imports
import React from 'react'
import {NavLink} from 'react-router-dom'
// Third party imports
import { Typography } from '@mui/material';

const Banner = ({bgColor, txt1, txt2, link_color}) =>{
  return (
    <div className={`${bgColor}`}>
        <div className='container mx-auto py-20 flex justify-center flex-col align-middle'>
            <div className='pb-2 text-center'><Typography variant='h3' className='text-white capitalize'>{txt2}</Typography></div>
            <div className='flex  flex-row justify-center align-middle'>
                <div><NavLink className='link' to='/'><Typography variant='h5' className={`hover:text-${link_color} text-white uppercase  px-2`}>{txt1}</Typography></NavLink></div>
                <div className='border-l-2 text-white'></div>
                <div><NavLink className='link' to='#'><Typography variant='h5' className={`hover:text-${link_color} text-white uppercase  px-2`}>{txt2}</Typography></NavLink></div>
            </div>
        </div>
    </div>
  );
};

export default Banner