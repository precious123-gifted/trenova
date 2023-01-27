import React from 'react'
import { FooterStyle } from './Footer.style'


export default function Footer() {
  return (
    <FooterStyle>
        <div className="content">
<div className='trenova-group-info' id='box'>
    <div className="header">TRENOVA GROUP</div>
    <span className="info">TreNova Academy is
owned by TreNova Group</span>
    
</div>
<div className='company-info' id='box'>
<div className="header">COMPANY INFO</div>
<span className="info">ABOUT US</span>
<span className="info">CONTACT US</span>
<span className="info">EARN-WHILE-YOU-LEARN</span>
<span className="info">BUSINESS OPPORTUNITIES</span>
</div>
<div className='other-links' id='box'>
<div className="header">OTHER LINKS</div>
<span className="info">TRENOVA GROUPS</span>
<span className="info">TRENOVA MEDIA</span>
<span className="info">SCHOOL SUPPORT CENTER</span>
<span className="info">E-LIBRARY</span>
<span className="info">PARENT LOYALTY PLATFORM</span>
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
        </footer>
      
    </FooterStyle>
  )
}
