import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Day4Style } from './Day4.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function Day4() {

  const {day4} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = day4.current.querySelectorAll('.scroll-item')


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
    <Day4Style ref={day4}>
      <div className="content">



<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>
<div className="header3 scroll-item">
Day 4: Buying Signals and Closing the Sale
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Signals to Watch For</li>
<li className='scroll-item'>Noticing Signals</li>
<li className='scroll-item'>Making the Play</li>
<li className='scroll-item'>Creating a Custom Toolbox</li>
<li className='scroll-item'>Strategies to Try</li>
<li className='scroll-item'>Persistence Pays Off</li>
<li className='scroll-item'>Closing Techniques: Thank You Notes</li>
<li className='scroll-item'>15 Sales Closing Success Tips</li>
<li className='scroll-item'>The Fifteen Activities</li>
<li className='scroll-item'>Selecting One Activity</li>
<li className='scroll-item'>Sell It to Me - Introduction and Demonstration</li>
<li className='scroll-item'>Sell It to Me - Objections and Requests</li>
<li className='scroll-item'>Sell It to Me - Closing and Other Points</li>



</ul>
</div>



<Link to='/sales-and-marketing/professional-telemarketing'>

<div className='get-started-btn scroll-item'>
<span>BUY NOW</span>
</div></Link>
</div>



    


    </Day4Style>
  )
}
