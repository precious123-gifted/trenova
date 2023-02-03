import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../App'
import { ProfessionalMarketingPageStyle } from './ProfessionalMarketingPage.style'
import Header from './Header/Header'
import CourseOutline from './CourseOutline/CourseOutline'
import Day2 from './Day2/Day2'
import Day3 from './Day3/Day3'
import Day4 from './Day4/Day4'
import Day5 from './Day5/Day5'






export default function ProfessionalMarketingPage() {


  const {navBar} = useContext(DataContext)

useEffect(() => {
navBar.current.scrollIntoView()
}, )


  return (
    <ProfessionalMarketingPageStyle>
      
      <Header/>
     <CourseOutline/>
 <Day2/>
 <Day3/>
 <Day4/>
 <Day5/>
    </ProfessionalMarketingPageStyle>
  )
}
