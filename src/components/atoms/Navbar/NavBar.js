// React imports
import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom'
// Third party imports
import { IconButton, List, ListItem } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// App imports
import images from '../../utils/constants'
import './NavBar.css'

 function NavBar(props) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  return (
    <div className= {`w-full h-full navbar ${props.bgcolor ? 'bg-darkBlue':'bg-transparent'}`}>
      <div className='flex items-center justify-between container mx-auto  py-4'>
        <div>
          <img width={'180px'} src={`${images.header.logo}`} alt='logo' />
        </div>
        <div >
          <List className={` ${isDrawerOpen ? 'active bg-darkBlue p-2' : ''} navList navbar-menu`}>
            <ListItem button onClick={toggleDrawer} className='navListItem'>
              <NavLink className='link' to='/'>Home</NavLink>
            </ListItem>
            <ListItem button onClick={toggleDrawer} className='navListItem'>
              <NavLink className='link' to='about-us'>About Us</NavLink>
            </ListItem>
            <ListItem button onClick={toggleDrawer} className='navListItem' >
              <NavLink className='link' to='videos'>Videos</NavLink>
            </ListItem>
            <ListItem className='navListItem'>
              <NavLink button onClick={toggleDrawer} className='link' to='blogs'>Blogs</NavLink>
            </ListItem>
            <ListItem className='navListItem'>
              <NavLink button onClick={toggleDrawer} className='link' to='courses'>Courses</NavLink>
            </ListItem>
            <ListItem className='navListItem'>
             <NavLink button onClick={toggleDrawer} className='link' to='contact-us'>Contact</NavLink>
            </ListItem>
          </List>
        </div>
        <div className='lg:hidden block'>
        <IconButton onClick={toggleDrawer}>
        {isDrawerOpen ? (
          <CloseRoundedIcon sx={{ color: 'white' }} fontSize="large" />
        ) : (
          <MenuRoundedIcon sx={{ color: 'white' }} fontSize="large" />
        )}
      </IconButton>
      </div>
      {/* <div className='md:hidden'>
          <Drawer open={isDrawerOpen} anchor='right' onClose={toggleDrawer}>
          <List>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Videos" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Blogs" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Partners" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Shop" />
            </ListItem>
          </List>
          </Drawer>
        </div> */}
    </div>
    </div>
  ) 
}
export default NavBar