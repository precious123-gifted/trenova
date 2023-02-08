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
  const {paymentcontainer} = useContext(DataContext)




  const openPaymentContainer = () =>{
  let  paymentContainerDiv = paymentcontainer.current
  let paymentBTN = day4.current.querySelector('.get-started-btn')
  
  paymentBTN.addEventListener('click' , () =>{
    paymentContainerDiv.style.visibility = 'visible'
  })
  
  }


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
  openPaymentContainer()
} )


  return (
    <Day4Style ref={day4}>
      <div className="content">



<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>
<div className="header3 scroll-item">
Day 4: Developing Your Script
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>The Basic Script</li>
<li className='scroll-item'>Speaking With Customers</li>
<li className='scroll-item'>Warm Up the Cold Call</li>
<li className='scroll-item'>Basic Script - Part 1: The Attention Statement</li>
<li className='scroll-item'>Basic Script - Part 2: The Identification Statement</li>
<li className='scroll-item'>Basic Script - Part 3: A People-Response-In-Kind Attitude</li>
<li className='scroll-item'>Basic Script - Part 4: The Reason-For-This-Call Statement</li>
<li className='scroll-item'>Basic Script - Part 5: A Request for an Appointment</li>
<li className='scroll-item'>Basic Script - Part 6: Your Response to Objections</li>
<li className='scroll-item'>Basic Script Summary</li>
<li className='scroll-item'>Sample Script</li>
<li className='scroll-item'>Making the Script Yours</li>
<li className='scroll-item'>Notes on Using the Script</li>
<li className='scroll-item'>Customizing the Basic Script: Referral Script</li>
<li className='scroll-item'>Customizing the Basic Script: Rarely/Never See the Potential Client</li>
<li className='scroll-item'>Polishing the Script</li>
<li className='scroll-item'>My Script</li>
<li className='scroll-item'>Creating a Template</li>


</ul>
</div>



<Link to='#'>

<div className='get-started-btn scroll-item'>
<span>BUY NOW</span>
</div></Link>
</div>



    


    </Day4Style>
  )
}
