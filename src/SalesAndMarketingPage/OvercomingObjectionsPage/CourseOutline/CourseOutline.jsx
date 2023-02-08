import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { CourseOutlineStyle } from './CourseOutline.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function CourseOutline() {

  const {courseOutline} = useContext(DataContext)



  const {paymentcontainer} = useContext(DataContext)




  const openPaymentContainer = () =>{
  let  paymentContainerDiv = paymentcontainer.current
  let paymentBTN = courseOutline.current.querySelector('.get-started-btn')
  
  paymentBTN.addEventListener('click' , () =>{
    paymentContainerDiv.style.visibility = 'visible'
  })
  
  }

  const scrollIntoView = ( ()=>{

let scrollItem = courseOutline.current.querySelectorAll('.scroll-item')


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
    <CourseOutlineStyle ref={courseOutline}>
      <div className="content">

<div className="header1 scroll-item" >
COURSE OVERVIEW
</div>



<div className="summary1 scroll-item">

If you are like most sales professionals, you are always looking for ways to overcome customer 
objections and close the sale. This course will help you to work through this objective effectively.
 We will help you plan and prepare for objections so that you can address customer concerns, reduce
  the number of objections you encounter, and improve your averages at closing sales.


</div>

<div className="header2 scroll-item">
COURSE OBJECTIVE
</div>
<div className="summary1 scroll-item">
After you complete this course, you'll be able to:
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Identify the steps you can take to build your credibility.</li>
<li className='scroll-item'>Identify the objections that you encounter most frequently.</li>
<li className='scroll-item'>Develop appropriate responses when prospective buyers throw you a curve.</li>
<li className='scroll-item'>Learn ways to disarm objections with proven rebuttals that get the sale back on track.</li>
<li className='scroll-item'>Learn how to recognize when a prospect is ready to buy.</li>
<li className='scroll-item'>Identify how working with your sales team can help you succeed.</li>

</ul>
</div>


<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>
<div className="header3 scroll-item">
Day 1: Your Competitions and How to Build Credibility
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Setting Yourself Apart</li>
<li className='scroll-item'>Your competitors</li>
<li className='scroll-item'>Your Products and Services</li>
<li className='scroll-item'>Identifying Your USP</li>
<li className='scroll-item'>Establishing Your Credibility</li>
<li className='scroll-item'>First Impressions</li>
<li className='scroll-item'>Belief and Credibility</li>
<li className='scroll-item'>Being an Excellent Communicator</li>
<li className='scroll-item'>Active Listening</li>
<li className='scroll-item'>Responding to Feelings</li>
<li className='scroll-item'>Reading Cues</li>
<li className='scroll-item'>Demonstration Cues</li>
<li className='scroll-item'>Tips for Becoming a Better Listener </li>
<li className='scroll-item'>Listening for Accuracy</li>
<li className='scroll-item'>Powerful Questions</li>
<li className='scroll-item'>Closed vs. Open Questions</li>
<li className='scroll-item'>Discussing Open Questions</li>
<li className='scroll-item'>Asking Good Questions</li>
<li className='scroll-item'>Clarifying Questions</li>
<li className='scroll-item'>Listening and Questioning</li>

</ul>
</div>



<Link to='#'>

<div className='get-started-btn scroll-item'>
<span>BUY NOW</span>
</div></Link>
</div>



    


    </CourseOutlineStyle>
  )
}
