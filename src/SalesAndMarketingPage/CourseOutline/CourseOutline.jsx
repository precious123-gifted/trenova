import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { CourseOutlineStyle } from './CourseOutline.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../App'
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
PROFESSIONAL SALES & MARKETING SKILLS MASTERCLASS 
</div>



<div className="summary1 scroll-item">
Nobody is a natural-born salesperson. Anybody can learn to improve their sales skills, no matter their current level.
You can learn to master all levels of sales skills including telemarketing/telesales, customer-facing, overcoming objections, closing the sale, and devising a marketing strategy that works for you and your business.
Whether you are an intending telemarketer, sales associate, sales executive, freelance marketer, entrepreneur, sales consultant, CEO, account executive or just interested in developing selling skills, you will benefit from these courses.
</div>

<div className="header2 scroll-item">
What you will learn
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>The art of successful sales prospecting in person, by phone, text and technology</li>
<li className='scroll-item'>The 7 Secrets to Career Success in Sales and Marketing</li>
<li className='scroll-item'>The Core Premises of Sales & Marketing</li>
<li className='scroll-item'>The process of Customer Creation</li>
<li className='scroll-item'>The Elevator Speech</li>
<li className='scroll-item'>Intrinsic and Extrinsic selling</li>
<li className='scroll-item'>Prospecting – How to Generate Leads</li>
<li className='scroll-item'>You will learn professional telesales and customer-facing skills, such as how to develope a repport with your clients and work together to set achievable goals</li>
<li className='scroll-item'>You will learn updated Sales and Closing Techniques not only through theory but also through practical applications</li>
<li className='scroll-item'>How to overcome resistance, view sales objections as opportunities in the sales process, and turn them into closed sales</li>
<li className='scroll-item'>How to get past your own limiting beliefs, undesired habits, and mindsets, enhance your confidence and sell more effectively </li>
</ul>
</div>

<div className="header2 scroll-item">
Who are this courses for
</div>

<div className="summary2">
  <ul>
    <li className='scroll-item'>Young and Intending Sales Professionals</li>
    <li className='scroll-item'>Account Executives</li>
    <li className='scroll-item'>Sales Executives</li>
    <li className='scroll-item'>SME Owners </li>
    <li className='scroll-item'>Young Graduates </li>
    <li className='scroll-item'>Freelance Marketers</li>
    <li className='scroll-item'>Coaches and Mentors</li>
    <li className='scroll-item'>Business Executives & Entrepreneurs</li>
    <li className='scroll-item'>Sales Consultants</li>
</ul>
</div>


<div className="header2 scroll-item">
Course Description
</div>

<div className="summary2">
  <ul>
    <li className='scroll-item' >Are you interested in learning new and established telemarketing, customer facing and sales-closing techniques?</li>
    <li className='scroll-item'>Do you want to enhance your confidence in your selling skills and closing techniques like never before?</li>
    <li className='scroll-item'>Would you like to learn proven sales skills and sales processes, as well as powerful sales tools for helping you reach your desired sales performance results?</li>
    <li className='scroll-item'>Do you want to understand how your customers think and why people buy what they buy so you can use that to be successful in sales? </li>
    <li className='scroll-item'>Do you want to help yourself stand out from the crowd with verified successful sales prospecting techniques?</li>
    <li className='scroll-item'>Would you like to earn telemarketing and customer-facing certifications and create visible financial success with the skills learned here?</li>

</ul>
</div>

<Link to='/professional-telemarketing'>

<div className='get-started-btn scroll-item'>
<span>GET THIS COURSE</span>
</div></Link>

      </div>


    </CourseOutlineStyle>
  )
}
