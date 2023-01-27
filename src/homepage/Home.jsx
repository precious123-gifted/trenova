import React from 'react';
import {HomeStyled} from './Home.styled.jsx';
import { DataContext } from '../App.jsx';
import { useContext } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import HomeContent from './HomeContent.jsx';
import SevenHoursWorkshopSection from '../Seven-hours-workshop/SevenHoursWorkshopSection.jsx';
import TrenovaGuaranteeSection from '../TrenovaGuarantee/TrenovaGuaranteeSection.jsx';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs.jsx';
import Footer from '../Footer/Footer.jsx';



export default function Home() {
   

  return (
    <HomeStyled>
      <NavigationBar/>
  <HomeContent/>
  <SevenHoursWorkshopSection/>
  <TrenovaGuaranteeSection/>
  <WhyChooseUs/>
  <Footer/>
 </HomeStyled>
  );
}
