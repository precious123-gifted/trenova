import React from 'react'
import { useEffect } from 'react'
import { CoursesWeOfferStyle } from './CoursesWeOffer.styled'
import phoneSvg from '../../assets/phone.png'
import relationshipSvg from '../../assets/relationship-svg.png'
import obstacleSvg from '../../assets/obstacle-svg.png'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);





export default function CoursesWeOffer() {




  const {courseWeOffer} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = courseWeOffer.current.querySelectorAll('.scroll-item')

scrollItem.forEach(item => {
  ScrollTrigger.create({
    trigger: item,
    start: "top center",
    toggleActions: "restart none none none",

    onEnter: () => {
      gsap.to(item,1, {
        opacity: 1,
        bottom:0,
      });
    },

    onLeave: () => {
      gsap.to(item,1, {
        opacity: 0,
        bottom:'70px',
      });
    },

    onLeaveBack: () => {
      gsap.to(item,1, {
        opacity: 0,
        bottom:'70px',
      });
    },

    onEnterBack: () => {
      gsap.to(item,1, {
        opacity: 1,
        bottom:0,
      });
    },
  })

})


  } )



useEffect( ()=>{
  scrollIntoView()
} )



  return (
    <CoursesWeOfferStyle ref={courseWeOffer}>
      <div className="content">
<div className="header scroll-item">
courses we offer

</div>

<div className="boxes-container">

<div className="section1">
 <div id="box" className='box1 scroll-item'>
  <div className="heading"><img draggable='false' src={phoneSvg} alt="" srcset="" /></div>
       <Link to='/professional-telemarketing'> <div className="writeup ">Professional Telemarketing</div></Link>
    </div>
    
    <div id="box" className='box3 scroll-item'>
        <div className="heading"><img draggable='false' src={obstacleSvg} alt="" srcset="" /></div>
        <div className="writeup">Overcoming Objections</div>
    </div>

    <div id="box" className='box2 scroll-item'>
        <div className="heading"><img draggable='false' src={relationshipSvg} alt="" srcset="" /></div>
        <div className="writeup">Prospecting and Customer Facing</div>
    </div>

    
</div>


</div>
        
      </div>


    </CoursesWeOfferStyle>
  )
}
