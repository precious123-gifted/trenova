import React from 'react'
import { WhyChooseUsStyle } from './WhyChooseUs.style'
import queSVG from '../../assets/Queue-amico.png'
import contactSVG from '../../assets/Contact us.png'



export default function WhyChooseUs() {
  return (
    <WhyChooseUsStyle>
      <div className="content">

<div className="why-choose-us-section">
    <div className="header">WHY CHOOSE US</div>
    <div className="components">
  <div className="svg-section">
<img draggable="false"  src={queSVG}  alt=""  className='que-svg' srcset="" />
    </div>
    <div className="writeup-section">
<div className="write-up">Not only this, but you will also network with
like-minded business people who are serious
about growing their business so make sure
you bring a good supply of business cards.
Plus, bring any number of partners, staff, 
colleagues or friends with you for HALF PRICE.</div>
<div className="registration-btn"><span>REGISTER NOW </span> </div>
    </div>

    </div>
  
</div>






<div className="speak-section">
    <div className="header">READY TO SPEAK WITH A BUSINESS EXPERT ?</div>


    <div className="components">


   
     <div className="writeup-section">
<div className="write-up">
    <span className='phone'>CALL US NOW : 0909-393-0074</span>
    <span className='whatsapp'>ON WHATSAPP : +234 8179 3613 81</span>
</div>

    </div> 
    <div className="svg-section">
    <img draggable="false"  src={contactSVG}  alt=""  className='contact-us-svg' srcset="" />
    </div> 
    </div>
  
</div>

      </div>
    </WhyChooseUsStyle>
  )
}
