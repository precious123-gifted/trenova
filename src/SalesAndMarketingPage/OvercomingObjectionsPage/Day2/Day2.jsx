import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Day2Style } from './Day2.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function Day2() {

  const {day2} = useContext(DataContext)

  const {paymentcontainer} = useContext(DataContext)




  const openPaymentContainer = () =>{
  let  paymentContainerDiv = paymentcontainer.current
  let paymentBTN = day2.current.querySelector('.get-started-btn')
  
  paymentBTN.addEventListener('click' , () =>{
    paymentContainerDiv.style.visibility = 'visible'
  })
  
  }

  const scrollIntoView = ( ()=>{

let scrollItem = day2.current.querySelectorAll('.scroll-item')


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
  openPaymentContainer()
} )


  return (
    <Day2Style ref={day2}>
      <div className="content">



<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>
<div className="header3 scroll-item">
Day 2: Handling Customer Complaints and Overcoming Objections
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Looking For Clues</li>
<li className='scroll-item'>Checklist for Success</li>
<li className='scroll-item'>Body Movements</li>
<li className='scroll-item'>Facial Expressions</li>
<li className='scroll-item'>Grooming</li>
<li className='scroll-item'>Posture</li>
<li className='scroll-item'>Reading People</li>
<li className='scroll-item'>Some Light Reading</li>
<li className='scroll-item'>Find Complaints and Fix Them</li>
<li className='scroll-item'>Self-Analysis - Calling Your Clients</li>
<li className='scroll-item'>Self-Analysis - Fixing Complaints</li>
<li className='scroll-item'>Handling Complaints</li>
<li className='scroll-item'>What are Objections?</li>
<li className='scroll-item'>Attitude Check!</li>
<li className='scroll-item'>Keep Your Brain in Check!</li>
<li className='scroll-item'>Controlling Your Reactions</li>



</ul>
</div>



<Link to='#'>

<div className='get-started-btn scroll-item'>
<span>BUY NOW</span>
</div></Link>
</div>



    


    </Day2Style>
  )
}
