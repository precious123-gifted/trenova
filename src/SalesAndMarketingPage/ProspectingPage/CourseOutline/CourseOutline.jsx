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

Selling has been around for thousands of years, but even to this day, most people are scared of it, or simply dislike it. Or they associate sales with negative emotions, manipulation and bad experiences. Many people call sales a "necessary evil," when in fact is a natural activity, we all perform daily without even knowing! 
Sales can be done successfully, creating win-win situations and long-lasting relationships. Learn how you can do that by joining the Professional Sales Skills Master Class today and Becoming a sales Consultant, perfecting your sales skills and teaching others to do the same.
Learn powerful sales skills and hands-on practical tools to guide you to create from scratch a positive emotional connection to the selling process both from a seller and a buyer perspective.
Develop a strong foundation of consumer motivational theory related to what makes a person purchase a thing, by understanding supply and demand and its direct connection to buyer psychology, neuromarketing, retail therapy, religion, rituals and habits, subliminal messaging and other factors influencing our decisions. 
Learn core, professional sales coaching skills, such as how to develop a rapport with your clients, work together to set achievable goals, and support them using powerful communication and questioning techniques as well as hands-on practical tools. 
Learn proper sales skills and sales coaching techniques and coaching evaluation methods designed to help you determine a client's needs and their readiness to develop their emotional intelligence about sales and life, build sales relationships and leave your ego aside to become the best salespeople you can be.
Learn proper sales closing techniques designed to help you, not only through theory but also through practical applications, daily sales exercises, creating real-life scenarios and role-playing exercises.
Learn how to look at sales objections as positive factors in the sales process, and how to turn the most popular objections around and close the sale. 
Learn the art of prospecting as it is one of the least perfected and properly used tools in selling to this day and mastering it will automatically make you stand out from the crowd. 
Develop a strong understanding of the psychology of the successful salesperson so that you can learn how to get past your own limiting beliefs, your undesired habits and mindsets in rapport building, overcoming resistance so you can create lasting sales relationships through practical changes and the satisfaction of mastering new sales skills.


</div>

<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>

<div className="header3 scroll-item">
Day 1: Targeting Your Market and The Prospect Dashboard
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>A Narrow Focus</li>
<li className='scroll-item'>Narrowing Your Focus</li>
<li className='scroll-item'>Where are Your Customers?</li>
<li className='scroll-item'>Common Characteristics</li>
<li className='scroll-item'>What Makes Them Buy?</li>
<li className='scroll-item'>Perform an Analysis</li>
<li className='scroll-item'>Listen to Them</li>
<li className='scroll-item'>Are You Listening?</li>
<li className='scroll-item'>Summarize</li>
<li className='scroll-item'>Use Analytical Tools</li>
<li className='scroll-item'>Customer Profile</li>
<li className='scroll-item'>Customer Location</li>
<li className='scroll-item'>Market Profile </li>
<li className='scroll-item'>The Prospect Dashboard and CRM Tools</li>
<li className='scroll-item'>Sample Dashboard</li>
<li className='scroll-item'>So How Does It Work?</li>
<li className='scroll-item'>Dashboard Q & A</li>
<li className='scroll-item'>My Prospect Dashboard</li>
<li className='scroll-item'>Planning with the Prospect Dashboard</li>
<li className='scroll-item'>The Purchasing Cycle</li>
<li className='scroll-item'>How to generate sales leads</li>
<li className='scroll-item'>Planning Worksheet</li>
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
