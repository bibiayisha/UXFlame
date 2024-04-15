// React imports
import React from 'react'
// Third party imports
import { Typography } from '@mui/material';

const QA = ({ques, ans})=> {
  return (
    <div className='pt-4'>
        <div className='pb-4 '>
            <Typography variant='h3' className='text-white capitalize'>{ques}</Typography>
        </div>
        <div>
        <p className='text-gray text-fs-18 leading-lh-32 tracking-ls-neg4'>{ans}</p>
        </div>
    </div>
  )
};

export default QA
