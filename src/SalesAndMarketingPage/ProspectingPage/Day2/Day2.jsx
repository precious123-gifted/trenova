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
Day 2: Warming Up Cold Calls and Building Rapport
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Attracting new customers</li>
<li className='scroll-item'>The Magic Number</li>
<li className='scroll-item'>A Cure for Call Reluctance</li>
<li className='scroll-item'>Other Tips for Making Calls</li>
<li className='scroll-item'>Getting Your Message Through</li>
<li className='scroll-item'>Openers</li>
<li className='scroll-item'>Creating Your Opener</li>
<li className='scroll-item'>Creating Your Opener</li>
<li className='scroll-item'>My Cold Call Strategy</li>
<li className='scroll-item'>The basic selling processes</li>
<li className='scroll-item'>The sales meeting</li>
<li className='scroll-item'>Preparing proposals and pitches</li>
<li className='scroll-item'>How to build rapport and create mega credibility</li>
<li className='scroll-item'>Identification of needs </li>
<li className='scroll-item'>How to present the solution </li>
<li className='scroll-item'>Converting prospects into clients using RIA</li>



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
