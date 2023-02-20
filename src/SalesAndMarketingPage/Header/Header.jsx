import React from 'react'
import { HeaderStyle } from './Header.styled'
import salesHeaderSvg from '../../assets/sales-header-svg.png'
import { useContext } from 'react'
import { DataContext } from '../../App'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import arrow from '../../assets/arrow.png'



export default function Header() {

  var mobileScreens = window.matchMedia("(max-width: 700px)")
  var desktopScreens = window.matchMedia("(min-width: 700px)")



  const {header} = useContext(DataContext)



  const displayHeaderContent = () =>{
    let headerText = header.current.querySelector('.header-text')
    let getStartedButton = header.current.querySelector('.get-started-btn')
    let helpingHandSvg = header.current.querySelector('.helping-hand')
   gsap.to(headerText,1,{top:0,opacity:1,})
   gsap.to(getStartedButton,0.4,{opacity:1,})
   gsap.to(helpingHandSvg,1,{opacity:1,marginTop:0,})

  }
  
  
  useEffect(() => {
  displayHeaderContent()
  },)

  return (
    <HeaderStyle ref={header}>
<div className='content'>
<div className='section1'>
  <div className='header1'>SALES AND MARKETING</div>
<div className='header-text'>
COURSE LIST
</div>
<div className="summary">
  <ul>
  <Link to='/professional-telemarketing'> <li><span><img src={arrow} width='20px' alt="" srcset="" /></span> Professional Telemarketing/Telesales Skills and The Core Premises of 
      Marketing that Promote Selling with Confidence</li></Link> 

      <Link to='/overcoming-objections'>  <li><span><img src={arrow} width='20px' alt="" srcset="" /></span>Overcoming Objections to Nail the Sale
</li></Link> 

<Link to='/content-creation-and-marketing'>
<li><span><img src={arrow} width='20px' alt="" srcset="" /></span>Complete Content Creation & Content Marketing Masterclass</li></Link>

<Link to='/prospecting-report-and-building-relationships'>
<li><span><img src={arrow} width='20px' alt="" srcset="" /></span>Prospecting, Creating Repport and Building Relationships through
       Customer Facing and Sales Meetings</li></Link>
 
  </ul>
</div>


</div>
<div className='section2'>
{
desktopScreens.matches?<img draggable="false"  src={salesHeaderSvg} className='helping-hand' alt="" srcset="" />
 : mobileScreens.matches?<img draggable="false"  src={salesHeaderSvg} className='helping-hand' alt="" srcset="" />
 :null
}


</div>
</div>

    </HeaderStyle>
  )
}
