import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Day5Style } from './Day5.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function Day5() {

  const {day5} = useContext(DataContext)

  const {paymentcontainer} = useContext(DataContext)




  const openPaymentContainer = () =>{
  let  paymentContainerDiv = paymentcontainer.current
  let paymentBTN = day5.current.querySelector('.get-started-btn')
  
  paymentBTN.addEventListener('click' , () =>{
    paymentContainerDiv.style.visibility = 'visible'
  })
  
  }


  const scrollIntoView = ( ()=>{

let scrollItem = day5.current.querySelectorAll('.scroll-item')


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
    <Day5Style ref={day5}>
      <div className="content">



<div className="header2 scroll-item">
COURSE CONTENT DETAILS
</div>
<div className="header3 scroll-item">
Day 3: Advance Content Creation and Marketing
</div>

<div className="summary2 ">
  <ul>
  <li className='scroll-item'>Starting a Podcast: Planning your podcast format, scheduling guests using Calendly, recording a podcast using Riverside fm, and publishing your podcast to every popular network including Apple Podcasts, Spotify, and Audible using Anchor.</li>
<li className='scroll-item'>Creating Video Content: Setting up lighting, recording and editing video using Camtasia, and reviewing the post-production process. </li>
<li className='scroll-item'>Email Marketing: Use valuable opt-in incentives to grow your email list, bring people into your sales funnel, and build deeper relationships with your audience.</li>
<li className='scroll-item'>External Marketing Channels: Learn how platforms like Facebook, Twitter, and Instagram can tie right into your overall content strategy.</li>
<li className='scroll-item'>Publishing Videos on YouTube and Streaming: Creating a YouTube Channel, publishing videos to YouTube, creating YouTube video thumbnails in Canva, selecting YouTube video tags, and streaming with Streamlabs OBS.</li>
<li className='scroll-item'>Content Formats & Repurposing: Get familiar with various content formats and learn how to create an endless stream of fresh content simply by repurposing what you've already created.</li>
<li className='scroll-item'>Measuring Your Results: Collect and analyze data to measure the results of your content marketing efforts, and ensure that you're always making progress toward your goals.</li>

</ul>
</div>





<div className="header3 scroll-item">
Training Fee: N69,950 for 3 days
</div>

<div className="header3 scroll-item">
Training Fee: N24,950 per day
</div>


<Link to='#'>

<div className='get-started-btn scroll-item'>
<span>BUY NOW</span>
</div></Link>
</div>



    


    </Day5Style>
  )
}
