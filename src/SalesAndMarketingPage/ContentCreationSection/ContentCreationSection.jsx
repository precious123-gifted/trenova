import React from 'react'
import { useEffect } from 'react'
import { ContentCreationSectionStyle } from './ContentCreationSection.style'
import objectives from '../../assets/content_creator.png'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function ContentCreationSection() {



  const {contentCreationSection} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = contentCreationSection.current.querySelectorAll('.scroll-item')

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
    <ContentCreationSectionStyle ref={contentCreationSection}>
      <div className="content">

<div className="header1 scroll-item">
Overcoming contentCreations to Nail the Sale
</div>

<div className="header2 scroll-item">
<img src={objectives} alt="" srcset="" />
</div>

<div className="summary scroll-item" id='summary1'>
This course includes several assignments, worksheets, and walkthroughs featuring our own tried-and-true methods in creating professional content. I will walk you through our entire studio setup and provide you with a list of equipment and software that we have used over the years to help you get started quickly.
You can apply this knowledge to grow your personal brand, advertise your business, or get a job in content marketing.</div> 
   
   
      <div className="header1 scroll-item">
      Course Objectives
</div>

<div className="summary scroll-item">
After you complete this course, you'll be able to:
</div>

<div className="summary2">
  <ul>
    <li className='scroll-item'>Establish your personal, professional, or business branding and increase your brand recognition</li>
    <li className='scroll-item'>Understand your audience and create content tailored for their specific interests and demographics</li>
    <li className='scroll-item'>Develop a content conceptualization and content marketing strategy to produce regular, high-quality content</li>
    <li className='scroll-item'>Set up a home studio with minimal equipment for beginners and upgrade your equipment as you become more advanced</li>
    <li className='scroll-item'>Generate a constant stream of engaging content by repurposing your existing content for social media posts</li>
    <li className='scroll-item'>Record, edit, and produce professional audio and video content using Camtasia and Audacity</li>
    <li className='scroll-item'>Create, record, and publish a podcast to all popular networks including Apple Podcasts, Spotify, Audible/Amazon Music, Google Podcasts, and more</li>
    <li className='scroll-item'>Create a WordPress website and optimize it for SEO to improve your search ranking for your website and blog posts</li>


</ul>
</div>


<Link to='/content-creation-and-marketing'>

<div className='get-started-btn scroll-item'>
<span>GET THIS COURSE</span>
</div></Link>

      </div>


  



    </ContentCreationSectionStyle>
  )
}
