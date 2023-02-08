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
Day 2: How to Build Trust
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Building Trust</li>
<li className='scroll-item'>Defining Trust and Respect</li>
<li className='scroll-item'>Phases of Negotiation</li>
<li className='scroll-item'>Phases of Negotiation: Preparation</li>
<li className='scroll-item'>Phases of Negotiation: Exchanging Information</li>
<li className='scroll-item'>Phases of Negotiation: Bargaining</li>
<li className='scroll-item'>Phases of Negotiation: Commitment and Closing</li>
<li className='scroll-item'>Exploring the Phases – Preparation Phase</li>
<li className='scroll-item'>Exploring the Phases – Exchanging Information</li>
<li className='scroll-item'>Exploring the Phases – Bargaining</li>
<li className='scroll-item'>Exploring the Phases – Commitment and Closing</li>
<li className='scroll-item'>Types of Negotiation – Integrative, Inductive, Deductive, Distributive etc</li>
<li className='scroll-item'>Types of Negotiation: Soft/Hard/Principled, Alternative Dispute Resolution etc</li>
<li className='scroll-item'>Defining the Negotiation Types</li>
<li className='scroll-item'>Negotiation Experience</li>




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
