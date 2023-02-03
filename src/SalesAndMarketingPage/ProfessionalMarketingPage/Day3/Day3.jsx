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
Day 3: Communication Essentials
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Active Listening Skills</li>
<li className='scroll-item'>Zero in on the Matter at Hand</li>
<li className='scroll-item'>The Mission – To Listen</li>
<li className='scroll-item'>Plotting Your Score</li>
<li className='scroll-item'>Ten Ingredients for Good Communication</li>
<li className='scroll-item'>Using the Ingredients</li>
<li className='scroll-item'>Asking Good Questions</li>
<li className='scroll-item'>Closed Questions and Open Questions</li>
<li className='scroll-item'>Probing and Probing Question Techniques</li>



</ul>
</div>



<Link to='#'>

<div className='get-started-btn scroll-item'>
<span>BUY NOW</span>
</div></Link>
</div>



    


    </Day3Style>
  )
}
