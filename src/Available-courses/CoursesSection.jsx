import React from 'react'
import { CoursesSectionStyle } from './CoursesSection.style'
import schoolGrowthSvg from '../assets/schoolgrowthsvg.png'
import sellingSkillsSvg from '../assets/sellingskillssvg.png'
import businessGrowthSvg from '../assets/businessgrowthsvg.png'
import graduateSkillsSvg from '../assets/graduateskillssvg.png'




export default function CoursesSection() {

    var mobileScreens = window.matchMedia("(max-width: 700px)")
    var desktopScreens = window.matchMedia("(min-width: 700px)")


  return (
    <CoursesSectionStyle>
      <div className="content">
<div className="header">
    AVAILABLE COURSES
</div>

<div className="courses">
<div className="school-growth-training">
{desktopScreens. matches? <img draggable="false"  src={schoolGrowthSvg} alt=""  id='illustration' className='school-growth-svg' srcset="" />:null }
<div className="text-box">
<div className="text-box-header">
    SCHOOL GROWTH TRAINING
</div>
<div className="text-box-summary">
“The most powerful methods to skyrocket your enrollment, revenue and profits in the world!”
</div>

<div className="learn-more-btn">
    <span>LEARN MORE</span>
</div>

</div>

</div>




<div className="selling-skills-training">

<div className="text-box">
<div className="text-box-header">
SELLING SKILLS TRAINING
</div>
<div className="text-box-summary">
Nobody is a natural-born salesperson. Anybody can learn to improve their 
sales skills, no matter their current level.
</div>

<div className="learn-more-btn">
    <span>LEARN MORE</span>
</div>

</div>

{desktopScreens. matches? <img draggable="false"  src={sellingSkillsSvg} alt="" id='illustration' className='school-growth-svg' srcset="" />:null }

</div>



<div className="business-growth-training">
{desktopScreens. matches? <img draggable="false"  src={businessGrowthSvg} alt="" id='illustration' className='school-growth-svg' srcset="" />:null }
<div className="text-box">
<div className="text-box-header">
BUSINESS GROWTH
CONSULTING
TRAINING
</div>
<div className="text-box-summary">
Start a consulting service to help other businesses to grow,become profitable and 
achieve success. The skills required to achieve these are the focus of this course...
</div>

<div className="learn-more-btn">
    <span>LEARN MORE</span>
</div>

</div>



</div>




<div className="graduate-skills-training">

<div className="text-box">
<div className="text-box-header">
GRADUATE
EMPLOYABILITY
SKILLS TRAINING
</div>
<div className="text-box-summary">
Master Customer Service using this practical customer care course to delight every customer
</div>

<div className="learn-more-btn">
    <span>LEARN MORE</span>
</div>

</div>

{desktopScreens. matches? <img draggable="false"  src={graduateSkillsSvg} alt="" id='illustration' className='graduate-skills-svg' srcset="" />:null }

</div>


</div>
      </div>
    </CoursesSectionStyle>
  )
}
