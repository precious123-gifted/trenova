import React from 'react'
import { NavigationBarStyle } from './NavigationBar.styled'
import trenovaLogo from '../assets/trenovo-logo.png'
import { useEffect } from 'react'
import { useState } from 'react'
import menuIcon from '../assets/menu-hamburger.png'
import exitIcon from '../assets/menu-exit.png'
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


const [menuState,setMenuState] = useState(false)
let menu = menuState? exitIcon: menuIcon 

const slideMenuInAndOut = () =>{
  
const menuHolder = navBar.current.querySelector('.menu-box')
const sideBar = navBar.current.querySelector('.side-bar')

 gsap.to(sideBar,0.8,{top:menuState? '20%' : '-100%',})  


menuHolder.addEventListener('click',()=>{
setMenuState(!menuState)

 


})



}








useEffect(() => {
displayNavBar()
if(mobileScreens.matches){

 slideMenuInAndOut() 
}


},)

  return (
   <NavigationBarStyle ref={navBar}>
    <div  className='content'>
    <img draggable="false" src={trenovaLogo} id='trenova-logo' alt="" srcset="" />  
    {
      desktopScreens.matches?<div className='navigations'>
         <Link className='link' to='/sales-and-marketing' >  <div className='navlink' id='home-link'>Home</div></Link>
         {/* <Link className='link' to='/sales-and-marketing' >  <div className='navlink' id='courses-link'>Courses</div></Link> */}
         <Link className='link' to='/about-trenova'><div className='navlink' id='about-link'>About Us</div></Link>
       <Link className='link' to='/contact'><div  className='navlink' id='contact-link'>Contact Us</div></Link> 
        {/* <div className='navlink' id='blog-link'>Blog</div> */}
      </div>:null
    }  
     {
      mobileScreens.matches?<div className='menu-icon'>
       {/* <Link className='link' to='/sales-and-marketing' > <span className='courses-icon'>courses</span></Link> */}
       <Link className='link' to='/sales-and-marketing' > <span className='courses-icon'>Home</span></Link>
       <div className="menu-box"><img draggable="false"  src={menu} alt="" srcset=""  className='menu-hambuger'/></div>
      </div>:null
    } 
    </div>
    

    {
      mobileScreens.matches?
      <div className="side-bar">

<Link to='/about-trenova'> <span className='about'>About Us</span></Link>
<Link to='/contact'><span>Contact Us</span></Link>

      </div>
      
      :null
    } 


   </NavigationBarStyle>
  )
}
