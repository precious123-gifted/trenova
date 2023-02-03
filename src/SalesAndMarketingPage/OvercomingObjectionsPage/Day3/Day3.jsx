import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Day3Style } from './Day3.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function Day3() {

  const {day3} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = day3.current.querySelectorAll('.scroll-item')


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
    <Day3Style ref={day3}>
      <div className="content">



<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>
<div className="header3 scroll-item">
Day 3: Handling Objections and Making Team Work Help
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Universal Strategies</li>
<li className='scroll-item'>Example Interaction</li>
<li className='scroll-item'>Specific Strategies 1 to 3</li>
<li className='scroll-item'>Specific Strategies 4 to 6</li>
<li className='scroll-item'>Specific Strategies 7 to 9</li>
<li className='scroll-item'>Using the Strategies</li>
<li className='scroll-item'>Session 9: Pricing Issues</li>
<li className='scroll-item'>Handling Pricing Objections</li>
<li className='scroll-item'>Managing the Objections</li>
<li className='scroll-item'>Four Factors That Stay the Same</li>
<li className='scroll-item'>How You Handle the Issues</li>
<li className='scroll-item'>Understanding the Value of Teamwork</li>
<li className='scroll-item'>Making the Team</li>

</ul>
</div>



<Link to='/sales-and-marketing/professional-telemarketing'>

<div className='get-started-btn scroll-item'>
<span>BUY NOW</span>
</div></Link>
</div>



    


    </Day3Style>
  )
}
