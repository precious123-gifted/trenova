import React from 'react'
import { useEffect } from 'react'
import { ContactPageStyle } from './ContactPage.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {


  const {navBar} = useContext(DataContext)

useEffect(() => {
navBar.current.scrollIntoView()
}, )


    const {contactPage} = useContext(DataContext)

    const scrollIntoView = ( ()=>{
  
  let scrollItem = contactPage.current.querySelectorAll('.scroll-item')
  
  
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
    <ContactPageStyle ref={contactPage}>
      
<div className="content">
<div className="header1 scroll-item">
Get In Touch With Us
</div>


<form action="">

<div className="input-div">
    <div className='input-wrapper scroll-item' htmlFor="first-name">
        <span>First Name</span>
<input type="text"  name='first-name' placeholder='enter your first name'/>
</div>

<div className='input-wrapper scroll-item' htmlFor="last-name">
    <span>Last Name</span>
<input type="text"  name='last-name' placeholder='enter your last name'/>
</div>

<div className='input-wrapper scroll-item' htmlFor="email">
    <span>Email</span>
<input type="text"  name='email' placeholder='enter your email-adress'/>
</div>

</div>

<div className="textarea-div scroll-item">

<label htmlFor="textarea">
<textarea name="textarea" id="" cols="30" rows="10">


</textarea>

</label>

</div>

<div className='get-started-btn scroll-item'>
<span>Send Message</span>
</div>



</form>

</div>

    </ContactPageStyle>
  )
}
