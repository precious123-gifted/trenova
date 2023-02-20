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
Day 2: Basic Content Marketing
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Classic Marketing Fundamentals: Basic principles from the "old world" of marketing that you'll need to understand for this course. Beginners are welcome here!</li>
<li className='scroll-item'>Content Marketing Essentials: What content marketing is, how it works, how to tell a compelling story, and how to create detailed buyer personas to guide your approach.</li>
<li className='scroll-item'>Types Of Content: Learn about the most effective types of content, and see more than a dozen specific content ideas that you can steal and apply to your own strategy.</li>
<li className='scroll-item'>Understanding SEO Basics: Learning how SEO works, finding keywords using Google Trends and autocomplete, understanding your audience using Google Analytics, and using YoastSEO for WordPress.</li>
<li className='scroll-item'>Understanding SEO Basics: Learning how SEO works, finding keywords using Google Trends and autocomplete, understanding your audience using Google Analytics, and using YoastSEO for WordPress.Promoting Your Content: Repurposing content for social media, scheduling content using Buffer, getting followers, and most importantly, content creator etiquette!</li>
<li className='scroll-item'>Copywriting: We'll discuss why effective writing is so important, and you'll learn all about headlines, structure, vocabulary, tone, calls-to-action, editing, as well as a number of tips to help you become a better writer overall.</li>




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
