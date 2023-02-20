import React from 'react'
import { useEffect } from 'react'
import { ProspectingSectionStyle } from './ProspectingSection.style'
import relationshipMeeting from '../../assets/relationship-meeting.png'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);





export default function ProspectingSection() {



  const {prospectSection} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = prospectSection.current.querySelectorAll('.scroll-item')

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
    <ProspectingSectionStyle ref={prospectSection}>
      <div className="content">

<div className="header1 scroll-item">
Prospecting, Creating Rapport and Building Relationships through Customer Facing and Sales Meetings
</div>

<div className="header2 scroll-item">
<img src={relationshipMeeting} alt="" srcset="" />


</div>

<div className="summary scroll-item">
Selling has been around for thousands of years, but even to this day, most people are scared of it, or simply dislike it. Or they associate sales with negative emotions, manipulation and bad experiences. Many people call sales a "necessary evil," when in fact is a natural activity, we all perform daily without even knowing! 
Sales can be done successfully, creating win-win situations and long-lasting relationships. Learn how you can do that by joining the Professional Sales Skills Master Class today and Becoming a sales Consultant, perfecting your sales skills and teaching others to do the same.

In this course, you will learn proper sales closing techniques designed to help you, not only through theory but also through practical applications, daily sales exercises, creating real-life scenarios and role-playing exercises. </div>
     
 <Link to='/prospecting-report-and-building-relationships'>
    
<div className='get-started-btn scroll-item'>
<span>GET THIS COURSE</span>
</div>    </Link>


      </div>


    </ProspectingSectionStyle>
  )
}
