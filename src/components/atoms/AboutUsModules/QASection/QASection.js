// React imports
import React from 'react'
// Third party imports
import { Grid } from '@mui/material'
// App imports
import { qas } from '../../../utils/QA'
import QA from '../QA/QA'
import images from '../../../utils/constants'

const QASection=({})=> {
    
  return (
    <div className='bg-darkBlue py-20 px-8 md:px-0'>   
    <div className='container '>
    <div>
    <Grid container>
        <Grid item xs={12} md={6}>
         <div><p className='text-fs-24 text-white font-light text-center md:text-left'>Get to know about founders</p></div>
         <div className='pb-10'><QA ques={qas[0].ques} ans={qas[0].ans}/></div>
         <div className='pb-10'><QA ques={qas[1].ques} ans={qas[1].ans}/></div>
        </Grid>
        <Grid item xs={12} md={6}>
            <div className=' text-center md:text-right  md:float-right w-[60%] md:w-fit m-auto'><img  className='m-auto' src={images.body.flameImg}/></div>
        </Grid>
    </Grid>
    </div>
    <div>
    <div className='pt-8'><QA ques={qas[2].ques} ans={qas[2].ans} next={true}/></div>
    </div>
    </div>
    </div>
  )
}

export default QASection