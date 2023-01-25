import React from 'react'
import Header from '../Header/Header'
import CoursesSection from '../Available-courses/CoursesSection'
import PopularCoursesSection from '../Popular-courses/PopularCoursesSection'

export default function HomeContent() {
  return (
    <div>
      <Header/>
      <CoursesSection/>
      <PopularCoursesSection/>
    </div>
  )
}
