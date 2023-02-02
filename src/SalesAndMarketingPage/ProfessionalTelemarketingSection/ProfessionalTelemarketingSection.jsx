import React from 'react'
import { useEffect } from 'react'
import { ProfessionalTelemarketingSectionStyle } from './ProfessionalTelemarketingSection.style'
import gsap from 'gsap'
import { useContext } from 'react'
import { DataContext } from '../../App'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function ProfessionalTelemarketingSection() {


  const {professionalTeleSection} = useContext(DataContext)

  const scrollIntoView = ( ()=>{

let scrollItem = professionalTeleSection.current.querySelectorAll('.scroll-item')

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
    <ProfessionalTelemarketingSectionStyle ref={professionalTeleSection}>
      <div className="content">

<div className="header1 scroll-item">
Professional Telemarketing/Telesales Skills and The Core Premises of Marketing that Promote Selling with Confidence
</div>

<div className="header2 scroll-item">
Finding and closing successful deals through the phone… without breaking the bank
</div>

<div className="summary scroll-item">
With the change caused by the pandemic, routine sales visits have reduced significantly. The implication for businesses is that success in sales will no longer depend on the number of visits and in-person meetings but on how effectively they can use the other means of marketing and sales.
Hence, it’s important to evaluate how salespeople use the phone as it’s going to be playing a more impactful role in sales and marketing. 
As they make sales calls, handle enquiries, give quotes, take orders, and close sales negotiations over the phone, negative phone calls and poor phone interaction could result in missed opportunities and direct loss of sales.
This course will show participants how the phone can supplement, enhance, and sometimes replace other means of marketing and selling, and how this personal approach can dramatically increase their sales success. It equally teaches the skills that enable you to work for foreign organisations and earn money in the dollar while staying in Nigeria.…
</div>
      </div>


    </ProfessionalTelemarketingSectionStyle>
  )
}
