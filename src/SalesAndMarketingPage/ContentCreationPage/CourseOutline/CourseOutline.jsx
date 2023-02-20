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

This course includes several assignments, worksheets, and walkthroughs featuring our own tried-and-true methods in creating professional content. I will walk you through our entire studio setup and provide you with a list of equipment and software that we have used over the years to help you get started quickly.
You can apply this knowledge to grow your personal brand, advertise your business, or get a job in content marketing.

</div>

<div className="header2 scroll-item">
COURSE OBJECTIVE
</div>
<div className="summary1 scroll-item">
After you complete this course, you'll be able to:
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Establish your personal, professional, or business branding and increase your brand recognition</li>
<li className='scroll-item'>Understand your audience and create content tailored for their specific interests and demographics</li>
<li className='scroll-item'>Develop a content conceptualization and content marketing strategy to produce regular, high-quality content</li>
<li className='scroll-item'>Set up a home studio with minimal equipment for beginners and upgrade your equipment as you become more advanced</li>
<li className='scroll-item'>Generate a constant stream of engaging content by repurposing your existing content for social media posts</li>
<li className='scroll-item'>Record, edit, and produce professional audio and video content using Camtasia and Audacity</li>
<li className='scroll-item'>Create, record, and publish a podcast to all popular networks including Apple Podcasts, Spotify, Audible/Amazon Music, Google Podcasts, and more</li>
<li className='scroll-item'>Create a WordPress website and optimize it for SEO to improve your search ranking for your website and blog posts</li>
<li className='scroll-item'>Increase your sales, traffic, and brand recognition using the power of digital content</li>
<li className='scroll-item'>Grow a business from scratch or build upon your existing strategy</li>
<li className='scroll-item'>Understand the cognitive buying journey and how your content can inspire people to take action</li>
<li className='scroll-item'>Optimize your website for content marketing and drive profitable user action</li>
<li className='scroll-item'>Develop a system for consistently generating new content ideas</li>
<li className='scroll-item'>Understand the importance of effective writing and how to become a better writer</li>
<li className='scroll-item'>Become familiar with some of the most effective types of content</li>
<li className='scroll-item'>Generate an endless stream of valuable content by repurposing what you've already created</li>
<li className='scroll-item'>Optimize your site for search engines to drive a consistent stream of free traffic</li>
<li className='scroll-item'>Promote your content and drive traffic from a wide variety of sources</li>
<li className='scroll-item'>Use valuable content to grow your email list and build an effective sales funnel</li>
<li className='scroll-item'>Learn about external marketing channels like Facebook, Twitter, and Instagram</li>
<li className='scroll-item'>Effectively grow your audience by engaging with your followers and subscribers on YouTube, Twitter, TikTok, Instagram, LinkedIn, Pinterest, and Twitch</li>
<li className='scroll-item'>Collect and analyze data to measure your results and optimize future campaigns</li>



</ul>
</div>


<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>
<div className="header3 scroll-item">
Day 1: Basic Content Creation
</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>Generating Content Ideas: Develop a system for getting to know your audience and consistently generating new content ideas.</li>
<li className='scroll-item'>Content Conceptualization: Selecting a topic and format including assignments and worksheets to help you get started quickly.</li>
<li className='scroll-item'>Creating Written Content: Creating a WordPress blog in under 10 minutes, designing your website using Canva, and publishing your first blog post.</li>
<li className='scroll-item'>Creating Audio Content: Buying a microphone and setting up a home studio, recording and editing audio tracks using Audacity, and publishing an audiobook.</li>
<li className='scroll-item'>How to optimize your efficiency as a writer, using simple workflows and tools.</li>
<li className='scroll-item'>An in depth understanding of which AI (Artificial Intelligence) apps can help, and which are a waste of time.</li>
<li className='scroll-item'>How to outline articles rapidly and thoroughly - a critical skill for success</li>
<li className='scroll-item'>Master topic selection and search intent, to ensure that you are not writing in vain.</li>
<li className='scroll-item'>A clear cut editing and proofing process that saves huge amounts of time and effort.</li>


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
