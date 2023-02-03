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
} )


  return (
    <CourseOutlineStyle ref={courseOutline}>
      <div className="content">

<div className="header1 scroll-item" >
COURSE OVERVIEW
</div>



<div className="summary1 scroll-item">
With the change caused by the pandemic, routine sales visits have reduced significantly. The implication for businesses is that success in sales will no longer depend on the number of visits and in-person meetings but on how effectively they can use the other means of marketing and sales.
Hence, it’s important to evaluate how salespeople use the phone as it’s going to be playing a more impactful role in sales and marketing. 
As they make sales calls, handle enquiries, give quotes, take orders, and close sales negotiations over the phone, negative phone calls and poor phone interaction could result in missed opportunities and direct loss of sales.
This course will show participants how the phone can supplement, enhance, and sometimes replace other means of marketing and selling, and how this personal approach can dramatically increase their sales success. It equally teaches the skills that enable you to work for foreign organisations and earn money in the dollar while staying in Nigeria.
You will also learn how to hone your communication skills, your ability to persuade, and techniques to personalize each sales call.</div>

<div className="header2 scroll-item">
COURSE OBJECTIVE
</div>
<div className="summary1 scroll-item">
At the completion course, participants will be able to:
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Build trust and respect with customers.</li>
<li className='scroll-item'>Warm up their sales approach to improve success.</li>
<li className='scroll-item'>Identify ways to make a positive impression.</li>
<li className='scroll-item'>Identify negotiation strategies that will make them stronger sellers.</li>
<li className='scroll-item'>Create a script to maximize their efficiency on the phone.</li>
<li className='scroll-item'>Learn what to say and what to ask to create interest, handle objections, and close the sale.</li>

</ul>
</div>


<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>
<div className="header3 scroll-item">
Day 1: Verbal Communication & Exceptional Things about Telephone Sales
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Getting the basics right</li>
<li className='scroll-item'>What are you selling?</li>
<li className='scroll-item'>Being Yourself and Sounding Your Best</li>
<li className='scroll-item'>The Masterpiece of Voice</li>
<li className='scroll-item'>The Four E's</li>
<li className='scroll-item'>A Service Image: What Do Your Customers Hear?</li>
<li className='scroll-item'>A Service Image: What Do You Want Your Customers to Hear?</li>
<li className='scroll-item'>The Good, the Bad, and the Not-to-Mention – Our Examples</li>
<li className='scroll-item'>What You Say and What it Means</li>
<li className='scroll-item'>Your Interpretation</li>
<li className='scroll-item'>Planning the Ideal Answer </li>
<li className='scroll-item'>Try Out These Phrases</li>
<li className='scroll-item'>Keeping a Positive Outlook </li>
<li className='scroll-item'>Give Yourself Time to Learn</li>
<li className='scroll-item'>Repport Building</li>
<li className='scroll-item'>Guidelines for Remembering Names</li>



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
