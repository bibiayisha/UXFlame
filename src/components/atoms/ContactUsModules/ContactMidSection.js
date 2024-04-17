// React imports
import React, { useRef } from 'react'
// Third party imports
import {Typography} from '@mui/material'
import emailjs from '@emailjs/browser';
// App imports
import images from '../../utils/constants'
import { Grid } from '@mui/material'

const ContactMidSection = ({}) =>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_v1w65g2', 'template_ovcw698', form.current, {
            publicKey: '6VxZiiG3VzSCULdfb',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };


  return (
    <div className='bg-darkBlue relative px-10 md:px-0'>
        <div className='relative container'>
          <div className='flex flex-col items-center'>
          <div className=' bg-offBlue pt-20  -mt-[2%] absolute z-20 mb-20'>
            <div className='md:px-20 px-8'>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <div className='h-full flex flex-col justify-between pr-0 md:pr-10'>
                        <div className='pb-10'><Typography variant='h3' className='text-white  text-center md:text-left'>Something<br/> in your <span className='text-orange'>mind</span>? <br/>Let’s talk!</Typography></div>
                        <div><p className='text-gray text-fs-18 leading-lh-32 tracking-ls-neg4 text-center md:text-left pr-0 md:pr-2'>Send us a message and let’s discuss about your ideas, suggestions and more!</p></div>
                        <div className='w-full text-center mt-10'><img className='m-auto' src={images.body.contact_img} /></div>
                    </div>
                </Grid >
                <Grid item xs={12} md={8}>
                    <div className='pb-20'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex flex-col md:flex-row justify-between md:mb-8 mb-0'>
                            <div className='w-full mb-8 md:mb-0 mr-0 md:mr-6'><input className='w-full p-5  bg-transparent border text-xs text-gray' style={{borderColor:'#7373734a'}} type="text" placeholder="Name" name='user_name' required/></div>
                            <div className='w-full mb-8 md:mb-0'><input className='w-full p-5  bg-transparent border  text-xs text-gray' style={{borderColor:'#7373734a'}} type="email" placeholder="Email" name='user_email' required/></div>
                            </div>
                            <div className='w-full mb-10'><textarea className='w-full p-5  bg-transparent border text-xs text-gray' style={{borderColor:'#7373734a'}} name='message'  rows={8} required placeholder='Message'></textarea></div>
                            <div className='w-full'><button className='w-full bg-orange text-center font-bold text-white py-4 text-lg'>Send Message</button></div>
                        </form>
                    </div>
                </Grid>
            </Grid>
            </div>
        </div>
        </div>
        </div>
        <div className='relative py-96 md:py-80'></div>
        <div className='relative py-40 md:py-0'></div>
    </div>
  )
}

export default ContactMidSection