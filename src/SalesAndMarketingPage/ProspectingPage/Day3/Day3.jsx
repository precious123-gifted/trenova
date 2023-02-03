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
Day 3: Regaining Lost Accounts and Going Above and Beyond
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Why Do Customers Leave?</li>
<li className='scroll-item'>When Something Goes Wrong</li>
<li className='scroll-item'>What Can I Do About It?</li>
<li className='scroll-item'>Regaining Your Contacts</li>
<li className='scroll-item'>21 Ideas for a Successful Career in Sales</li>
<li className='scroll-item'>Implementing the 21 Ideas</li>
<li className='scroll-item'>Ten Questions to Ask Yourself about Each Prospect</li>
<li className='scroll-item'>Asking the Ten Questions</li>

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
