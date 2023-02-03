import React from 'react'
import { NavigationBarStyle } from './NavigationBar.styled'
import trenovaLogo from '../assets/trenovo-logo.png'
import { useEffect } from 'react'
import menuIcon from '../assets/menu-hamburger.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useContext } from 'react'
import { DataContext } from '../App'
import {Link } from 'react-router-dom'



export default function NavigationBar() {
  var mobileScreens = window.matchMedia("(max-width: 700px)")
  var desktopScreens = window.matchMedia("(min-width: 700px)")


  const {navBar} = useContext(DataContext)



const displayNavBar = () =>{
 gsap.to(navBar.current,1,{top:0,position:'relative',})

}


useEffect(() => {
displayNavBar()
},)

  return (
   <NavigationBarStyle ref={navBar}>
    <div  className='content'>
    <img draggable="false" src={trenovaLogo} id='trenova-logo' alt="" srcset="" />  
    {
      desktopScreens.matches?<div className='navigations'>
         <Link className='link' to='/' >  <div className='navlink' id='home-link'>Home</div></Link>
         <Link className='link' to='/sales-and-marketing' >  <div className='navlink' id='courses-link'>Courses</div></Link>
       <div className='navlink' id='about-link'>About Us</div>
        <div  className='navlink' id='contact-link'>Contact Us</div>
        <div className='navlink' id='blog-link'>Blog</div>
      </div>:null
    }  
     {
      mobileScreens.matches?<div className='menu-icon'>
       <Link className='link' to='/sales-and-marketing' > <span className='courses-icon'>courses</span></Link>
       <img draggable="false"  src={menuIcon} alt="" srcset="" className='menu-hambuger'/>
      </div>:null
    } 
    </div>
    
   </NavigationBarStyle>
  )
}
