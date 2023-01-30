import React from 'react'
import { SevenHoursWorkshopSectionStyle } from './SevenHoursWorkshopSection.styled'
import phoneSvg from '../../assets/phone.png'
import relationshipSvg from '../../assets/relationship-svg.png'
import obstacleSvg from '../../assets/obstacle-svg.png'

export default function SevenHoursWorkshopSection() {
  return (
    <SevenHoursWorkshopSectionStyle>
      <div className="content">
<div className="header">
courses we offer

</div>

<div className="boxes-container">

<div className="section1">
    <div id="box" className='box1'>
        <div className="heading"><img draggable='false' src={phoneSvg} alt="" srcset="" /></div>
        <div className="writeup">Professional Telemarketing</div>
    </div>
    <div id="box" className='box2'>
        <div className="heading"><img draggable='false' src={relationshipSvg} alt="" srcset="" /></div>
        <div className="writeup">Relationship Building</div>
    </div>

    <div id="box" className='box3'>
        <div className="heading"><img draggable='false' src={obstacleSvg} alt="" srcset="" /></div>
        <div className="writeup">Overcoming Objections</div>
    </div>
</div>


</div>
        
      </div>


    </SevenHoursWorkshopSectionStyle>
  )
}
