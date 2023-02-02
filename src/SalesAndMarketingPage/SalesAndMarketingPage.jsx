import React from 'react'
import { SalesAndMarketingStyle } from './SalesAndMarketing.style'
import Header from './Header/Header'
import CoursesWeOffer from './CoursesWeOffer/CoursesWeOffer'
import CourseOutline from './CourseOutline/CourseOutline'
import ProfessionalTelemarketingSection from './ProfessionalTelemarketingSection/ProfessionalTelemarketingSection'
import ProspectingSection from './ProspectingSection/ProspectingSection'
import ObjectionSection from './ObjectionSection/ObjectionSection'
import { useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../App'



export default function SalesAndMarketingPage() {

 


  return (
    <SalesAndMarketingStyle>
        <Header/>
        <CoursesWeOffer/>
        <CourseOutline/>
        <ProfessionalTelemarketingSection/>
    <ObjectionSection/>
    <ProspectingSection/>
   
    </SalesAndMarketingStyle>
   
  )
}
