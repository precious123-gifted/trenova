import React from 'react'
import { useEffect } from 'react'
import { ObjectionSectionStyle } from './ObjectionSection.style'
import objectives from '../../assets/objectives.png'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function ObjectionSection() {



  const {objectionSection} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = objectionSection.current.querySelectorAll('.scroll-item')

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
    <ObjectionSectionStyle ref={objectionSection}>
      <div className="content">

<div className="header1 scroll-item">
Overcoming Objections to Nail the Sale
</div>

<div className="header2 scroll-item">
<img src={objectives} alt="" srcset="" />
</div>

<div className="summary scroll-item" id='summary1'>
If you are like most sales professionals, you are always looking for ways to overcome 
customer objections and close the sale. This course will help you to work through this
 objective effectively. We will help you plan and prepare for objections so that you can
  address customer concerns, reduce the number of objections you encounter, and improve your
   averages at closing sales.</div> 
   
   
      <div className="header1 scroll-item">
      Course Objectives
</div>

<div className="summary scroll-item">
After you complete this course, you'll be able to:
</div>

<div className="summary2">
  <ul>
    <li className='scroll-item'>Are you interested in learning new and established telemarketing, customer facing and sales-closing techniques?</li>
    <li className='scroll-item'>Do you want to enhance your confidence in your selling skills and closing techniques like never before?</li>
    <li className='scroll-item'>Would you like to learn proven sales skills and sales processes, as well as powerful sales tools for helping you reach your desired sales performance results?</li>
    <li className='scroll-item'>Do you want to understand how your customers think and why people buy what they buy so you can use that to be successful in sales? </li>
    <li className='scroll-item'>Do you want to help yourself stand out from the crowd with verified successful sales prospecting techniques?</li>
    <li className='scroll-item'>Would you like to earn telemarketing and customer-facing certification and create visible financial success with the skills learned here?</li>

</ul>
</div>


<Link to='/sales-and-marketing/overcoming-objections'>

<div className='get-started-btn scroll-item'>
<span>GET THIS COURSE</span>
</div></Link>

      </div>


  



    </ObjectionSectionStyle>
  )
}
