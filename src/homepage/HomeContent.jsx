import React from 'react'
import Header from './Header/Header'
import CoursesSection from './Available-courses/CoursesSection'
import PopularCoursesSection from './Popular-courses/PopularCoursesSection'
import SevenHoursWorkshopSection from './Seven-hours-workshop/SevenHoursWorkshopSection.jsx';
import TrenovaGuaranteeSection from './TrenovaGuarantee/TrenovaGuaranteeSection.jsx';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

export default function HomeContent() {
  return (
    <div>
      <Header/>
      <CoursesSection/>
      <PopularCoursesSection/>
      <SevenHoursWorkshopSection/>
  <TrenovaGuaranteeSection/>
  <WhyChooseUs/>
    </div>
  )
}
