import React from 'react'
import { useEffect } from 'react'

import { AboutStyle } from './About.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function About() {

  const {about} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = about.current.querySelectorAll('.scroll-item')


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
    <AboutStyle ref={about}>
      <div className="content">

<div className="header1 scroll-item" >
About Trenova Academy 
</div>



<div className="summary1 scroll-item">
We are owned by TreNova Group, a Business Growth Consulting, Capability Development and Education Technolog
 (EdTech) Organisation that offers Mobile-First Marketing services, Platform Management and Business Growth and
training services to help SME owners, Private School owners and private individuals to grow and become successful.
The company is a member of international business growth, marketing and personal development consulting organization
 that operates in 26 countries, spread across 4 major continents including the USA, the UK, Germany, Spain, Francev,
  Belgium, Portugal, India, Ireland, Australia, and New Zealand among others.
The company offers astute business owners, directors, professionals and aspiring entrepreneurs a fresh, unique and 
dynamic approach to business. In specific terms, we have been in business for more than 15 years and we have supported 
the growth of over 20,000 business owners across various sectors in Nigeria and trained more than 100,000 of their 
staff in various areas of business growth and development.


</div>


<div className="header1 scroll-item" >
Our Core Values
</div>

<div className="summary1 scroll-item">
Our core values are the guiding force for the many experiences that are created at TreNova, they’re not just a
 poster on a wall. They provide the framework for making decisions like who we hire, who we promote,
  which business we support, and how we get things done. They are:

</div>

<div className="summary2 ">
  <ul>
<li className='scroll-item'>R = Respect</li>
<li className='scroll-item'>I = Integrity</li>
<li className='scroll-item'>S = Significance</li>
<li className='scroll-item'>E = Excellence</li>
</ul>
</div>

<div className="header2 scroll-item">
Our Vision
</div>

<div className="summary1 scroll-item">
“We envision an Africa where any individual, anywhere has the power to transform their life, 
career and business through access to affordable and high-quality education, innovative 
technology and creative platforms.’’

</div>


<div className="header2 scroll-item">
Our Mission
</div>

<div className="summary1 scroll-item">
“To Help African Become Educational & Career Success by providing effective solutions for
 accelerated growth.’’
In achieving this, we shall make our company the most successful education technology,
 business growth support & career development Organisation in Africa; do everything necessary 
 to satisfy our customers and make the company a great place to work for our employees.

</div>



      </div>


    </AboutStyle>
  )
}
