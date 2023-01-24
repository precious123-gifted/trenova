import React from 'react'
import { NavigationBarStyle } from './NavigationBar.styled'
import trenovaLogo from '../assets/trenovo-logo.png'
import { useEffect } from 'react'


export default function NavigationBar() {
  var mobileScreens = window.matchMedia("(max-width: 700px)")
  var desktopScreens = window.matchMedia("(min-width: 700px)")



  return (
   <NavigationBarStyle>
    <div  className='content'>
    <img src={trenovaLogo} id='trenova-logo' alt="" srcset="" />  
    {
      desktopScreens.matches?<div className='navigations'>
        <div className='navlink' id='courses-link'>Courses</div>
        <div className='navlink' id='about-link'>About Us</div>
        <div  className='navlink' id='contact-link'>Contact Us</div>
        <div className='navlink' id='blog-link'>Blog</div>
      </div>:null
    }  
    
    </div>
    
   </NavigationBarStyle>
  )
}
