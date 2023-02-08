import React from 'react'
import { HeaderStyle } from './Header.styled'
import phoneHeader from '../../../assets/phone-header.png'
import { useContext } from 'react'
import { DataContext } from '../../../App'
import { useEffect } from 'react'
import gsap from 'gsap'



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
<div className='header-text'>
PROFESSIONAL
TELEMARKETING
</div>

<div className='summary'>
Finding and closing successful deals through the phone without breaking the bank
</div>


</div>
<div className='section2'>
{
desktopScreens.matches?<img draggable="false"  src={phoneHeader} className='helping-hand' alt="" srcset="" />
 : mobileScreens.matches?<img draggable="false"  src={phoneHeader} className='helping-hand' alt="" srcset="" />
 :null
}



</div>
</div>

    </HeaderStyle>
  )
}
