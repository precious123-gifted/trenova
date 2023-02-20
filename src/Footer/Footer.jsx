import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { Power2 } from 'gsap'
import { FooterStyle } from './Footer.style'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../App'
import whatsappLogo from '../assets/whatsapp-logo.png'
import leftArrow from '../assets/leftArrow.png'





export default function Footer() {

  var mobileScreens = window.matchMedia("(max-width: 700px)")
  var desktopScreens = window.matchMedia("(min-width: 700px)")
  const [slideOpen,setSlideOpen] = useState(true)

const {footer} = useContext(DataContext)

const toggleSlideWhatsappDivForDesktop = () =>{
  let leftIcon = footer.current.querySelector('.leftArrow')
  let whatsappContainer = footer.current.querySelector('.whatsapp-container')
  let whatsappLogo = footer.current.querySelector('.whatsappLogo')



leftIcon.addEventListener('click',()=>{

setSlideOpen(!slideOpen)



   gsap.to(whatsappContainer,{width:slideOpen ?'100px' : !slideOpen? '100px': null ,left:slideOpen ?'92.5%' :!slideOpen? '97%' :null})
  gsap.to(whatsappLogo,{visibility:slideOpen ?'visible':!slideOpen? 'hidden' :null })

 
})

}



const toggleSlideWhatsappDivForMobile = () =>{
  let leftIcon = footer.current.querySelector('.leftArrow')
  let whatsappContainer = footer.current.querySelector('.whatsapp-container')
  let whatsappLogo = footer.current.querySelector('.whatsappLogo')



leftIcon.addEventListener('click',()=>{

setSlideOpen(!slideOpen)


gsap.to(whatsappContainer,{width:slideOpen ?'100px' : !slideOpen? '100px': null ,left:slideOpen ?'75%' :!slideOpen? '92.5%' :null})
 gsap.to(whatsappLogo,{visibility:slideOpen ?'visible':!slideOpen? 'hidden' :null })

})

}


useEffect(()=>{

  if(desktopScreens.matches){
toggleSlideWhatsappDivForDesktop()
  }

  if(mobileScreens.matches){
    toggleSlideWhatsappDivForMobile()
      }

})



  return (
    <FooterStyle ref={footer}>
        <div className="content">
<div className='trenova-group-info' id='box'>
    <div className="header">TRENOVA GROUP</div>
    <span className="info">TreNova Academy is
owned by TreNova Group</span>
    
</div>
<div className='company-info' id='box'>
<div className="header">COMPANY INFO</div>
<NavLink to='/about-trenova' className="info">ABOUT US</NavLink>
<NavLink to='/contact' className="info">CONTACT US</NavLink>
<a href='https://www.mentornigeria.com/' className="info">EARN-WHILE-YOU-LEARN</a>
<a href='https://trenovagroup.com/opportunity.php' className="info">BUSINESS OPPORTUNITIES</a>
</div>
<div className='other-links' id='box'>
<div className="header">OTHER LINKS</div>
<a href='https://trenovagroup.com/' className="info">TRENOVA GROUPS</a>
<a href='https://media.trenovagroup.com/' className="info">TRENOVA MEDIA</a>
<a href='https://www.schoolsupportcentre.com/' className="info">SCHOOL SUPPORT CENTER</a>
<a href='https://library.schoolsupportcentre.com/' className="info">E-LIBRARY</a>
<a href='https://loyalty.schoolsupportcentre.com/' className="info">PARENT LOYALTY PLATFORM</a>
</div>
<div className='contacts' id='box'>
<div className="header">CONTACTS</div>
<span className="info">Phone: +234 817 936 1381</span>
<span className="info">Email: info@trenovaacademy.com</span>
<span className="info">Address: 7B Ogunsiji Close, Allen Ikeja, Lagos</span>

</div>


        </div>
        <footer>
         <span>Trenova Group © 2023</span>   

         <div className="whatsapp-container">
          <div className="con">
             <img className='leftArrow' src={leftArrow} alt="" srcset="" />   <a href="https://api.whatsapp.com/send?phone=08179361381"><img  className='whatsappLogo' src={whatsappLogo} alt="" srcset="" /></a>
          </div>
        
         </div>
        </footer>
      
    </FooterStyle>
  )
}
