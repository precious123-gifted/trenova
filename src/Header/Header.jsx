import React from 'react'
import { HeaderStyle } from './Header.styled'
import helpingHandsSvg from '../assets/HELPING HANDS FRAME.png'
import helpingHandsMobileSvg from '../assets/HELPING HANDS FRAME mobile.png'


export default function Header() {

  var mobileScreens = window.matchMedia("(max-width: 700px)")
  var desktopScreens = window.matchMedia("(min-width: 700px)")

  return (
    <HeaderStyle>
<div className='content'>
<div className='section1'>
<div className='header-text'>
CAPABILITY
DEVELOPMENT
ACADEMY
</div>
{
desktopScreens.matches?<div className='get-started-btn'>
<span>GET STARTED</span>
</div>:null}

</div>
<div className='section2'>
{
desktopScreens.matches?<img draggable="false"  src={helpingHandsSvg} className='helping-hand' alt="" srcset="" />
 : mobileScreens.matches?<img draggable="false"  src={helpingHandsMobileSvg} className='helping-hand' alt="" srcset="" />
 :null
}
{
mobileScreens.matches?<div className='get-started-btn'>
<span>GET STARTED</span>
</div>:null}

</div>
</div>

    </HeaderStyle>
  )
}
