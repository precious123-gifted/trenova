import React from 'react'
import { SalesAndMarketingStyle } from './SalesAndMarketing.style'
import Header from './Header/Header'
import SevenHoursWorkshopSection from './Seven-hours-workshop/SevenHoursWorkshopSection'
import PopularCoursesSection from './Popular-courses/PopularCoursesSection'

export default function SalesAndMarketingPage() {
  return (
    <SalesAndMarketingStyle>
        <Header/>
        <SevenHoursWorkshopSection/>
        <PopularCoursesSection/>
   
    </SalesAndMarketingStyle>
  )
}
